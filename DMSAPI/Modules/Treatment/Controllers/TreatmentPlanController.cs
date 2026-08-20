using System.Text.Json;
using DMS.Models;
using DMS.Modules.Finances.Entities;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Treatments.DTOs;
using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Treatments.Controllers;

[Route("api/[controller]")]
public class TreatmentPlanController : BaseController<TreatmentPlan>
{
    public TreatmentPlanController(DMSContext context)
        : base(context)
    {
    }


    #region  GetPaged
    public override async Task<IActionResult> GetPaged([FromBody] QueryParams query)
    {
        IQueryable<TreatmentPlan> data = _context.TreatmentPlans.AsNoTracking()
                .Include(x => x.Patient)
                .Include(x => x.Staff)
                .Where(x => !x.IsDeleted);

        // Search
        if (!string.IsNullOrWhiteSpace(query.Search?.SearchTerm))
        {
            var search = query.Search.SearchTerm.ToLower();

            data = data.Where(x =>
                EF.Property<string>(x, "Name").ToLower().Contains(search));
        }

        // Total Count
        var totalCount = await data.CountAsync();

        // Paging
        var result = await data
            .Skip(query.Pagination.PageIndex * query.Pagination.PageSize)
            .Take(query.Pagination.PageSize)
            .ToListAsync();

        return Ok(new
        {
            success = true,
            data = new
            {
                data = result,
                totalCount
            }
        });
    }

    #endregion


    #region SAVE TREATEMENT PLAN 
    [HttpPost("save")]
    public async Task<IActionResult> SaveTreatment([FromBody] JsonElement model)
    {
        // Validation
        if (!model.TryGetProperty("services", out var services))
            return BadRequest("Services are required.");

        if (services.GetArrayLength() == 0)
            return BadRequest("Treatment plan must contain at least one service.");

        if (!model.TryGetProperty("conditions", out var conditions))
            return BadRequest("Conditions are required.");

        await using var transaction = await _context.Database.BeginTransactionAsync();

        try
        {
            var plan = new TreatmentPlan
            {
                PatientId = model.GetProperty("patientId").GetInt32(),
                StaffId = model.GetProperty("staffId").GetInt32(),

                StartDate = DateTime.Parse(
                    model.GetProperty("startDate").GetString()!
                ),

                EndDate = model.GetProperty("endDate").GetString() is { Length: > 0 } endDate
                    ? DateTime.Parse(endDate)
                    : null,

                Status = model.GetProperty("status").GetString(),

                Round = model.GetProperty("round").GetInt32(),

                Installments = model.GetProperty("installments").GetInt32(),

                Discount = model.GetProperty("discount").GetDecimal(),

                Notes = model.GetProperty("notes").GetString(),

                Notification = model.GetProperty("notification").GetString()
            };

            _context.TreatmentPlans.Add(plan);

            await _context.SaveChangesAsync();

            decimal totalFee = 0;

            // --------------------------
            // Save Plan Services
            // --------------------------

            foreach (var item in services.EnumerateArray())
            {
                var serviceFee = item.GetProperty("serviceFee").GetDecimal();

                var totalFeeItem = item.GetProperty("totalFee").GetDecimal();

                totalFee += totalFeeItem;

                _context.PlanServices.Add(new PlanService
                {
                    TreatmentPlanId = plan.Id,

                    ServiceId = item.GetProperty("serviceId").GetInt32(),

                    ServiceFee = serviceFee,

                    TotalFee = totalFeeItem
                });
            }

            // Calculate Total Fee
            plan.TotalFee = Math.Max(0, totalFee - plan.Discount);

            // --------------------------
            // Save Conditions
            // --------------------------

            foreach (var item in conditions.EnumerateArray())
            {
                _context.ConditionDetails.Add(new ConditionDetail
                {
                    TreatmentPlanId = plan.Id,

                    PatientId = plan.PatientId!.Value,

                    ConditionId = item.GetProperty("conditionId").GetInt32(),

                    Severty = item.GetProperty("severity").GetString(),

                    Notes = item.GetProperty("notes").GetString(),

                    DaignosisDate = DateOnly.FromDateTime(DateTime.Now)
                });
            }

            await _context.SaveChangesAsync();

            await transaction.CommitAsync();

            return Ok(new
            {
                success = true,

                treatmentPlanId = plan.Id,

                totalFee = plan.TotalFee,

                serviceCount = services.GetArrayLength(),

                conditionCount = conditions.GetArrayLength(),

                message = "Treatment Plan saved successfully."
            });
        }
        catch (Exception ex)
        {
            await transaction.RollbackAsync();

            return BadRequest(new
            {
                success = false,
                message = ex.Message
            });
        }
    }


    #endregion

    #region ADD NEW TREATMENT PLAN
    [HttpPost("treatmentplan")]
    public async Task<IActionResult> Treatmentplan([FromBody] TreatmentplanRegistrationsDto dto)
    {
        System.Console.WriteLine("data from frant end: ", dto);
        if (dto?.Treatmentplan == null)
        {
            return BadRequest("پلان ضروری است");
        }
        if (dto?.Patient == null)
        {
            return BadRequest("اطلاعات مریض ارسال نشده.");
        }

        using var transaction = await _context.Database.BeginTransactionAsync();

        try
        {
            // ======================
            // 1- Get Patient By Id  
            // ======================

           var patient = new Patient
           {
               FirstName = dto.Patient.FirstName,
               LastName = dto.Patient.LastName,
               FatherName = dto.Patient.FatherName,
               StaffId = dto.Treatmentplan.StaffId ?? 1,
               Phone = dto.Patient.Phone,
               Age = dto.Patient.Age,
               Gender = dto.Patient.Gender,
               MaritalStatus = dto.Patient.MaritalStatus,
               BloodGroup = dto.Patient.BloodGroup,
               RegistrationDate = dto.Patient.RegistrationDate ?? DateOnly.FromDateTime(DateTime.Now),
               Address = dto.Patient.Address,
           };
            
            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();


            // ======================
            // 2- Conditions
            // ======================
            if (dto.Conditions?.ConditionDetails != null)
            {
                foreach (var item in dto.Conditions.ConditionDetails)
                {
                    var detail = item.Value;

                    var conditionDetail = new ConditionDetail
                    {
                        PatientId = patient.Id,
                        ConditionId = detail.ConditionId,
                        Severty = detail.Severity,
                        DaignosisDate = string.IsNullOrEmpty(detail.DiagnosisDate) ? null : DateOnly.Parse(detail.DiagnosisDate),
                        Result = detail.Result ?? 0,
                        Notes = detail.Notes

                    };
                    _context.ConditionDetails.Add(conditionDetail);
                }
                // await _context.SaveChangesAsync();
            }

            // ======================
            // 3- Treatmentplan
            // ======================

            TreatmentPlan? treatmentplan = null;
            if (dto.Treatmentplan != null)
            {

                treatmentplan = new TreatmentPlan
                {
                    PatientId = patient.Id,
                    StaffId = dto.Treatmentplan.StaffId,
                    Installments = dto.Treatmentplan.Installment,
                    Round = dto.Treatmentplan.Round,
                    Discount = dto.Treatmentplan.Discount,
                    TotalFee = dto.Treatmentplan.TotalFee,
                    StartDate = dto.Treatmentplan.StartDate,
                    EndDate = dto.Treatmentplan.EndDate,
                    Status = dto.Treatmentplan.Status,
                    Notes = dto.Treatmentplan.Details,
                };
                _context.TreatmentPlans.Add(treatmentplan);
                await _context.SaveChangesAsync();
            }

            // ======================
            // 4- Patient Services
            // ======================

            if (dto.PatientServices != null && dto.PatientServices.Any())
            {
                foreach (var ps in dto.PatientServices)
                {
                    foreach (var re in ps.Requirements)
                    {
                        var patientService = new PatientService
                        {
                            PatientId = patient.Id,
                            ServiceId = ps.ServiceId,
                            TreatmentPlanId = treatmentplan?.Id,
                            ServiceRequirementId = re.ServiceRequirementId,
                            Value = JsonSerializer.Serialize(re.Value)
                        };

                        _context.PatientServices.Add(patientService);

                    }
                }


                await _context.SaveChangesAsync();
            }



            // ======================
            // 5- Payment
            // ======================

            if (dto.Payment != null)
            {
                var payment = new FeePayment
                {
                    InstallmentCounter = treatmentplan?.Installments ?? 1,
                    PaymentDate = DateTime.UtcNow,
                    PaidAmount = dto.Payment.PaidAmount,
                    DueAmount = dto.Payment.DueAmount,
                    WholeFeePaid = 0,
                    TreatmentPlanId = treatmentplan?.Id,
                    StaffId = treatmentplan?.StaffId ?? 0
                };

                _context.FeePayments.Add(payment);
                await _context.SaveChangesAsync();
            }

            await transaction.CommitAsync();

            return Ok(new
            {
                message = "جلسه به درستی ثبت شد.",
                patientId = patient.Id
            });

        }
        catch (Exception ex)
        {
            await transaction.RollbackAsync();
            return BadRequest(new
            {
                message = ex.Message,
                innerException = ex.InnerException?.Message,
                stackTrace = ex.StackTrace

            });
        }
    }

    #endregion
    #region GET TREATMENT DETAILS
    [HttpGet("{id}/details")]
    public async Task<IActionResult> GetTreatmentDetails(int id)
    {
        var plan = await _context.TreatmentPlans
            .Include(x => x.Patient)
            .Include(x => x.Staff)

            .Include(x => x.PlanServices)
                .ThenInclude(x => x.Service)

            .Include(x => x.ConditionDetails)
                .ThenInclude(x => x.Condition)

            .FirstOrDefaultAsync(x => x.Id == id);


        if (plan == null)
        {
            return NotFound(new
            {
                success = false,
                message = "Treatment Plan not found"
            });
        }


        return Ok(new
        {
            success = true,

            data = new
            {
                plan.Id,

                patient = new
                {
                    plan.PatientId,
                    name = $"{plan.Patient!.FirstName} {plan.Patient.LastName}"
                },


                doctor = new
                {
                    plan.StaffId,
                    name = $"{plan.Staff!.FirstName} {plan.Staff.LastName}"
                },


                plan.StartDate,

                plan.EndDate,

                plan.Status,

                plan.Round,

                plan.Installments,

                plan.Discount,

                plan.TotalFee,


                services = plan.PlanServices.Select(x => new
                {
                    x.Id,

                    serviceId = x.ServiceId,

                    serviceName = x.Service!.Name,

                    serviceFee = x.ServiceFee,

                    totalFee = x.TotalFee

                }),


                conditions = plan.ConditionDetails.Select(x => new
                {
                    x.Id,

                    conditionId = x.ConditionId,

                    conditionName = x.Condition!.Name,

                    severity = x.Severty,

                    diagnosisDate = x.DaignosisDate,

                    notes = x.Notes

                }),


                plan.Notes,

                plan.Notification
            }
        });
    }

    #endregion


    #region UPDATE TREATMENT PLAN
    [HttpPut("update/{id}")]
    public async Task<IActionResult> UpdateTreatment(
        int id,
        [FromBody] JsonElement model)
    {
        await using var transaction =
            await _context.Database.BeginTransactionAsync();


        try
        {
            var plan = await _context.TreatmentPlans
                .FirstOrDefaultAsync(x => x.Id == id);


            if (plan == null)
            {
                return NotFound(new
                {
                    success = false,
                    message = "Treatment Plan not found"
                });
            }


            // Update Main Data

            plan.PatientId =
                model.GetProperty("patientId").GetInt32();

            plan.StaffId =
                model.GetProperty("staffId").GetInt32();


            plan.StartDate =
                DateTime.Parse(
                    model.GetProperty("startDate").GetString()!
                );


            plan.EndDate =
                model.GetProperty("endDate").GetString()
                is { Length: > 0 } endDate
                ? DateTime.Parse(endDate)
                : null;


            plan.Status =
                model.GetProperty("status").GetString();


            plan.Round =
                model.GetProperty("round").GetInt32();


            plan.Installments =
                model.GetProperty("installments").GetInt32();


            plan.Discount =
                model.GetProperty("discount").GetDecimal();


            plan.Notes =
                model.GetProperty("notes").GetString();


            plan.Notification =
                model.GetProperty("notification").GetString();



            // Remove Old Services

            var oldServices =
                await _context.PlanServices
                .Where(x => x.TreatmentPlanId == id)
                .ToListAsync();


            _context.PlanServices.RemoveRange(oldServices);



            // Add New Services

            decimal totalFee = 0;


            foreach (var item in model.GetProperty("services")
                .EnumerateArray())
            {

                var fee =
                    item.GetProperty("totalFee")
                    .GetDecimal();


                totalFee += fee;


                _context.PlanServices.Add(new PlanService
                {
                    TreatmentPlanId = id,

                    ServiceId =
                        item.GetProperty("serviceId")
                        .GetInt32(),

                    ServiceFee =
                        item.GetProperty("serviceFee")
                        .GetDecimal(),

                    TotalFee = fee
                });
            }
            plan.TotalFee =
                totalFee - plan.Discount;

            // Remove Old Conditions
            var oldConditions =
                await _context.ConditionDetails
                .Where(x => x.TreatmentPlanId == id)
                .ToListAsync();
            _context.ConditionDetails.RemoveRange(oldConditions);

            // Add New Conditions

            foreach (var item in model.GetProperty("conditions")
                .EnumerateArray())
            {

                _context.ConditionDetails.Add(new ConditionDetail
                {
                    TreatmentPlanId = id,

                    PatientId = plan.PatientId!.Value,

                    ConditionId =
                        item.GetProperty("conditionId")
                        .GetInt32(),

                    Severty =
                        item.GetProperty("severity")
                        .GetString(),

                    Notes =
                        item.GetProperty("notes")
                        .GetString(),

                    DaignosisDate =
                        DateOnly.FromDateTime(DateTime.Now)
                });
            }
            await _context.SaveChangesAsync();
            await transaction.CommitAsync();
            return Ok(new
            {
                success = true,
                id = plan.Id,
                message = "Treatment Plan updated successfully"
            });

        }
        catch (Exception ex)
        {
            await transaction.RollbackAsync();

            return BadRequest(new
            {
                success = false,
                message = ex.Message
            });
        }
    }

    #endregion

    #region DELETE TREAMENT PLAN
    [HttpDelete("{id}/Delete")]
    public async Task<IActionResult> DeleteTreatment(int id)
    {
        await using var transaction =
            await _context.Database.BeginTransactionAsync();
        try
        {
            var plan = await _context.TreatmentPlans
                .FirstOrDefaultAsync(x => x.Id == id);
            if (plan == null)
            {
                return NotFound(new
                {
                    success = false,
                    message = "Treatment Plan not found"
                });
            }

            // Delete Plan Services
            var services = await _context.PlanServices
                .Where(x => x.TreatmentPlanId == id)
                .ToListAsync();
            _context.PlanServices.RemoveRange(services);

            // Delete Conditions
            var conditions = await _context.ConditionDetails
                .Where(x => x.TreatmentPlanId == id)
                .ToListAsync();
            _context.ConditionDetails.RemoveRange(conditions);

            // Delete Main Plan
            _context.TreatmentPlans.Remove(plan);
            await _context.SaveChangesAsync();
            await transaction.CommitAsync();
            return Ok(new
            {
                success = true,
                message = "Treatment Plan deleted successfully"
            });

        }
        catch (Exception ex)
        {
            await transaction.RollbackAsync();

            return BadRequest(new
            {
                success = false,
                message = ex.Message
            });
        }
    }

    #endregion
}