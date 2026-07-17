using System.Text.Json;
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

                StartDate = DateOnly.Parse(
                    model.GetProperty("startDate").GetString()!
                ),

                EndDate = model.GetProperty("endDate").GetString() is { Length: > 0 } endDate
                    ? DateOnly.Parse(endDate)
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
            plan.TotalFee = Math.Max(0,totalFee - plan.Discount);

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

    [HttpGet("{id}")]
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
                DateOnly.Parse(
                    model.GetProperty("startDate").GetString()!
                );


            plan.EndDate =
                model.GetProperty("endDate").GetString()
                is { Length: > 0 } endDate
                ? DateOnly.Parse(endDate)
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

    [HttpDelete("{id}")]
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
}