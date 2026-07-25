using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Treatments.Controllers;

[Route("api/[controller]")]
public class ServiceRequirmentMapController : BaseController<ServiceRequirementMap>
{

    public ServiceRequirmentMapController(DMSContext context)
        : base(context)
    {
       
    }

    
    [HttpGet("service/{serviceId}")]
public async Task<IActionResult> GetByService(int serviceId)
{
    var data = await _context.ServiceRequirementMaps
        .Where(x =>
            x.ServiceId == serviceId &&
            !x.IsDeleted &&
            x.IsActive
        )
        .Include(x => x.ServiceRequirement)
        .OrderBy(x => x.DisplayOrder)
        .Select(x => new
        {
            id = x.Id,
            serviceId = x.ServiceId,
            serviceRequirementId = x.ServiceRequirmentId,

            displayOrder = x.DisplayOrder,
            isRequired = x.IsRequired,

            requirement = new
            {
                id = x.ServiceRequirement.Id,
                name = x.ServiceRequirement.RequirmentName
            }
        })
        .ToListAsync();


    return Ok(new
    {
        success = true,
        data
    });
}
}