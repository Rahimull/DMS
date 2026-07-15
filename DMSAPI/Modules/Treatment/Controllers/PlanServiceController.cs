using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Treatments.Controllers;

[Route("api/[controller]")]
public class PlanServiceController : BaseController<PlanService>
{
    
    public PlanServiceController(DMSContext context)
        : base(context)
    {
     
    }

    [HttpGet("treatment/{treatmentPlanId}")]
    public async Task<IActionResult> GetByTreatment(int treatmentPlanId)
    {
        var data = await _context.PlanServices
            .Where(x => x.TreatmentPlanId == treatmentPlanId)
            .Include(x => x.Service)
            .OrderBy(x => x.Id)
            .ToListAsync();
        return Ok(data);
    }

    [HttpGet("treatment/{treatmentPlanId}/total")]
    public async Task<IActionResult> GetTotal(int treatmentPlanId)
    {
        var total = await _context.PlanServices
            .Where(x => x.TreatmentPlanId == treatmentPlanId)
            .SumAsync(x => x.TotalFee);
        return Ok(total);
    }

    [HttpDelete("treatment/{treatmentPlanId}")]
    public async Task<IActionResult> DeleteByTreatment(int treatmentPlanId)
    {
        var items = await _context.PlanServices
            .Where(x => x.TreatmentPlanId == treatmentPlanId)
            .ToListAsync();

        if (!items.Any()) return NotFound();

        _context.PlanServices.RemoveRange(items);
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpGet("treatment/{treatmentPlanId}/details")]
    public async Task<IActionResult> GetDetatils(int treatmentPlanId)
    {
        var data = await _context.PlanServices
            .Where(x => x.TreatmentPlanId == treatmentPlanId)
            .Include(x => x.Service)
            .Select(x => new
            {
                x.Id,
                x.ServiceId,
                ServiceName = x.Service!.Name,
                x.ServiceFee,
                x.TotalFee
            })
            .ToListAsync();
        return Ok(data);
    }


}