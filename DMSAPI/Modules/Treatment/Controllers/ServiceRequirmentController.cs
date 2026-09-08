using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Treatments.Controllers;

[Route("api/[controller]")]
public class ServiceRequirmentController : BaseController<ServiceRequirement>
{
    public ServiceRequirmentController(DMSContext context)
        : base(context)
    {
    }


    #region Search
    protected override IQueryable<ServiceRequirement> ApplySearch(IQueryable<ServiceRequirement> query, string search)
    {
        search = search.Trim().ToLower();
        if (int.TryParse(search, out var id))
        {
            return query.Where(x => 
                    x.Id == id ||
                    (x.RequirmentName ?? "").Contains(search)
                    
                );
        }
        return query.Where(x => 
            (x.RequirmentName ?? "").Contains(search)
        );
       
    }
    #endregion
}