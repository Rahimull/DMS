using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Treatments.Controllers;

[Route("api/[controller]")]
public class RetreatmentController : BaseController<Retreatment>
{
    public RetreatmentController(DMSContext context)
        : base(context)
    {
    }

    [HttpGet("patient/{patientId}")]
public async Task<IActionResult> GetByPatient(int patientId)
{
    var data = await _context.Retreatments
        .Where(x => x.PatientId == patientId)
        .Include(x => x.Staff)
        .Include(x => x.Service)
        .OrderByDescending(x => x.RetreatmentDate)
        .ToListAsync();

    return Ok(data);
}
[HttpGet("staff/{staffId}")]
public async Task<IActionResult> GetByStaff(int staffId)
{
    var data = await _context.Retreatments
        .Where(x => x.StaffId == staffId)
        .Include(x => x.Patient)
        .Include(x => x.Service)
        .OrderByDescending(x => x.RetreatmentDate)
        .ToListAsync();

    return Ok(data);
}
[HttpGet("treatment/{treatmentPlanId}")]
public async Task<IActionResult> GetByTreatment(int treatmentPlanId)
{
    var data = await _context.Retreatments
        .Where(x => x.TreatmentPlanId == treatmentPlanId)
        .Include(x => x.Patient)
        .Include(x => x.Service)
        .OrderByDescending(x => x.RetreatmentDate)
        .ToListAsync();

    return Ok(data);
}
[HttpGet("appointment/{appointmentId}")]
public async Task<IActionResult> GetByAppointment(int appointmentId)
{
    var data = await _context.Retreatments
        .Where(x => x.AppointmentId == appointmentId)
        .Include(x => x.Patient)
        .Include(x => x.Service)
        .OrderByDescending(x => x.RetreatmentDate)
        .ToListAsync();

    return Ok(data);
}
[HttpGet("{id}/details")]
public async Task<IActionResult> GetDetails(int id)
{
    var item = await _context.Retreatments
        .Include(x => x.Patient)
        .Include(x => x.Staff)
        .Include(x => x.Service)
        .Include(x => x.TreatmentPlan)
        .FirstOrDefaultAsync(x => x.Id == id);

    if (item == null)
        return NotFound();

    return Ok(new
    {
        item.Id,

        Patient =
            $"{item.Patient!.FirstName} {item.Patient.LastName}",

        Doctor =
            $"{item.Staff!.FirstName} {item.Staff.LastName}",

        Service = item.Service!.Name,

        item.RetreatmentDate,

        item.RetreatmentCost,

        item.RetreatmentOutcome,

        item.Reason,

        item.OutcomeDetails
    });
}
[HttpDelete("patient/{patientId}")]
public async Task<IActionResult> DeleteByPatient(int patientId)
{
    var items = await _context.Retreatments
        .Where(x => x.PatientId == patientId)
        .ToListAsync();

    if (!items.Any())
        return NotFound();

    _context.Retreatments.RemoveRange(items);

    await _context.SaveChangesAsync();

    return Ok();
}

}