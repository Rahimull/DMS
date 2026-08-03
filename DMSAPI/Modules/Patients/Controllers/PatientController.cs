using System.Diagnostics.Contracts;
using System.Text.Json;
using DMS.Modules.Appointments.Entities;
using DMS.Modules.Finances.Entities;
using DMS.Modules.Patients.DTOs;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Patients.Mappers;
using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;

namespace DMS.Modules.Patients.Controllers;

[Route("api/[controller]")]
public class PatientController : BaseController<Patient>
{
    public PatientController(DMSContext context)
        : base(context)
    {
    }

    #region Patient Registeration
    [HttpPost("PatientRegistration")]
    public async Task<IActionResult> PatientRegistration([FromBody] PatientRegistrationDto dto)
    {
        System.Console.WriteLine("data from frant end: ", dto);
        if (dto == null || dto.Patient == null)
        {
            return BadRequest("Patient Information is Required");
        }

        using var transaction = await _context.Database.BeginTransactionAsync();

        try
        {
            // ======================
            // 1- Patient
            // ======================

            var patient = dto.Patient.ToPatient();
            patient.StaffId = dto.Services.Appointment.StaffId ?? 1;
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
                await _context.SaveChangesAsync();
            }

            // ======================
            // 3- Appointment
            // ======================

            Appointment? appointment = null;
            if (dto.Services?.Appointment != null)
            {
                var appointmentDto = dto.Services.Appointment;

                appointment = new Appointment
                {
                    PatientId = patient.Id,
                    ServiceId = dto.Services.Appointment.ServiceId,
                    StaffId = dto.Services.Appointment.StaffId,
                    Installment = dto.Services.Appointment.Installment,
                    Round = dto.Services.Appointment.Round,
                    Discount = dto.Services.Appointment.Discount,
                    ServiceFee = dto.Services.Appointment.ServiceFee,
                    TotalFee = dto.Services.Appointment.TotalFee,
                    MeetDate = dto.Services.Appointment.MeetDate,
                    Status = dto.Services.Appointment.Status,
                    Details = dto.Services.Appointment.Details,
                };
                _context.Appointments.Add(appointment);
                await _context.SaveChangesAsync();
            }

            // ======================
            // 4- Patient Services
            // ======================

            if (dto.Services?.PatientServices != null)
            {
                foreach (var serviceDto in dto.Services.PatientServices)
                {
                    foreach (var requirement in serviceDto.Requirements)
                    {
                        var patientService = new PatientService
                        {
                            PatientId = patient.Id,
                            ServiceId = serviceDto.ServiceId,
                            AppointmentId = appointment?.Id,

                            ServiceRequirementId =
                                requirement.ServiceRequirementId,

                            Value =
                                serviceDto.Description +
                                " " +
                                JsonSerializer.Serialize(
                                    requirement.Value
                                )
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
                    InstallmentCounter = appointment?.Installment ?? 1,
                    PaymentDate = DateTime.UtcNow,
                    PaidAmount = dto.Payment.PaidAmount,
                    DueAmount = dto.Payment.DueAmount,
                    WholeFeePaid = 0,
                    AppointmentId = appointment?.Id,
                    StaffId = appointment?.StaffId ?? 0
                };

                _context.FeePayments.Add(payment);
                await _context.SaveChangesAsync();
            }

            await transaction.CommitAsync();

            return Ok(new
            {
                message = "Patient Resgistered Successfully",
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


    #region Patient Get By Id
    public override async Task<IActionResult> GetById(int id)
    {
        var patient = await _context.Patients.AsNoTracking()
            .Include(p => p.Appointments).ThenInclude(s => s.Staff)
            .Include(p => p.Appointments).ThenInclude(p => p.FeePayments)
            .Include(p => p.PatientServices).ThenInclude(s => s.Service)
            .Include(p => p.PatientXrays)
            .Include(p => p.TreatmentPlans)
            .Include(p => p.Retreatments)
            .Include(p => p.ConditionDetails).ThenInclude(ps => ps.Condition)

                    .FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);
        if (patient == null) return NotFound();

        return Ok(patient);
    }
    #endregion

    #region Include Relations
    protected override IQueryable<Patient> IncludeRelations(IQueryable<Patient> query)
    {
        return query
            .Include(x => x.Appointments).ThenInclude(a => a.FeePayments)
            .Include(x => x.Staff);
    }


    #endregion

    #region  Search
    protected override IQueryable<Patient> ApplySearch(
     IQueryable<Patient> query,
     string search)
    {
        search = search.Trim().ToLower();

        if (int.TryParse(search, out var id))
        {
            return query.Where(x =>
                x.Id == id ||
                (x.FirstName ?? "").Contains(search) ||
                (x.LastName ?? "").Contains(search) ||
                (x.Phone ?? "").Contains(search)
            );
        }

        return query.Where(x =>
            (x.FirstName ?? "").Contains(search) ||
            (x.LastName ?? "").Contains(search) ||
            (x.Phone ?? "").Contains(search)
        );
    }


    #endregion

}