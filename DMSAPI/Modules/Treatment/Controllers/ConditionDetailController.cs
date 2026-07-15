using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Treatments.Controllers;

[Route("api/[controller]")]
public class ConditionDetailController : BaseController<ConditionDetail>
{
    public ConditionDetailController(DMSContext context)
        : base(context)
    {
    }

    [HttpGet("patient/{patientId}")]
    public async Task<IActionResult> GetByPatient(int patientId)
    {
        var data = await _context.ConditionDetails
            .Where(x => x.PatientId == patientId)
            .Include(x => x.Condition)
            .OrderByDescending(x => x.DaignosisDate)
            .ToListAsync();

        return Ok(data);
    }

    [HttpGet("patient/{patientId}/details")]
    public async Task<IActionResult> GetDetails(int patientId)
    {
        var data = await _context.ConditionDetails
            .Where(x => x.PatientId == patientId)
            .Include(x => x.Condition)
            .Select(x => new
            {
                x.Id,
                x.PatientId,
                x.ConditionId,
                ConditionName = x.Condition!.Name,
                x.Severty,
                x.Result,
                x.DaignosisDate,
                x.Notes
            })
            .ToListAsync();

        return Ok(data);
    }

    [HttpDelete("patient/{patientId}")]
    public async Task<IActionResult> DeleteByPatient(int patientId)
    {
        var items = await _context.ConditionDetails
            .Where(x => x.PatientId == patientId)
            .ToListAsync();

        if (!items.Any())
            return NotFound();

        _context.ConditionDetails.RemoveRange(items);

        await _context.SaveChangesAsync();

        return Ok();
    }
    [HttpGet("patient/{patientId}/latest")]
    public async Task<IActionResult> GetLatest(int patientId)
    {
        var item = await _context.ConditionDetails
            .Where(x => x.PatientId == patientId)
            .Include(x => x.Condition)
            .OrderByDescending(x => x.DaignosisDate)
            .FirstOrDefaultAsync();

        if (item == null)
            return NotFound();

        return Ok(item);
    }
}