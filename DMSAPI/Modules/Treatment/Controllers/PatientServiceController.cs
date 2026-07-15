using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Treatments.Controllers;

[Route("api/[controller]")]
public class PatientServiceController : BaseController<PatientService>
{
    public PatientServiceController(DMSContext context)
        : base(context)
    {
    }
    [HttpGet("patient/{patientId}")]
    public async Task<IActionResult> GetByPatient(int patientId)
    {
        var data = await _context.PatientServices
            .Where(x => x.PatientId == patientId)
            .Include(x => x.Service)
            .Include(x => x.ServiceRequirement)
            .OrderBy(x => x.Id)
            .ToListAsync();

        return Ok(data);
    }

    [HttpGet("appointment/{appointmentId}")]
    public async Task<IActionResult> GetByAppointment(int appointmentId)
    {
        var data = await _context.PatientServices
            .Where(x => x.AppointmentId == appointmentId)
            .Include(x => x.Service)
            .Include(x => x.ServiceRequirement)
            .OrderBy(x => x.Id)
            .ToListAsync();

        return Ok(data);
    }
    [HttpGet("treatment/{treatmentPlanId}")]
    public async Task<IActionResult> GetByTreatment(int treatmentPlanId)
    {
        var data = await _context.PatientServices
            .Where(x => x.TreatmentPlanId == treatmentPlanId)
            .Include(x => x.Service)
            .Include(x => x.ServiceRequirement)
            .OrderBy(x => x.Id)
            .ToListAsync();

        return Ok(data);
    }

    [HttpGet("treatment/{treatmentPlanId}/details")]
    public async Task<IActionResult> GetDetails(int treatmentPlanId)
    {
        var data = await _context.PatientServices
            .Where(x => x.TreatmentPlanId == treatmentPlanId)
            .Include(x => x.Service)
            .Include(x => x.ServiceRequirement)
            .Select(x => new
            {
                x.Id,
                x.PatientId,
                x.ServiceId,
                ServiceName = x.Service!.Name,
                Requirement = x.ServiceRequirement!.RequirmentName,
                x.Value
            })
            .ToListAsync();

        return Ok(data);
    }
    [HttpDelete("treatment/{treatmentPlanId}")]
    public async Task<IActionResult> DeleteByTreatment(int treatmentPlanId)
    {
        var items = await _context.PatientServices
            .Where(x => x.TreatmentPlanId == treatmentPlanId)
            .ToListAsync();

        if (!items.Any())
            return NotFound();

        _context.PatientServices.RemoveRange(items);

        await _context.SaveChangesAsync();

        return Ok();
    }
    [HttpDelete("appointment/{appointmentId}")]
    public async Task<IActionResult> DeleteByAppointment(int appointmentId)
    {
        var items = await _context.PatientServices
            .Where(x => x.AppointmentId == appointmentId)
            .ToListAsync();

        if (!items.Any())
            return NotFound();

        _context.PatientServices.RemoveRange(items);

        await _context.SaveChangesAsync();

        return Ok();
    }
}