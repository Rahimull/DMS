using DMS.Modules.Labs.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Labs.Controllers;

[Route("api/[controller]")]
public class LabController : BaseController<Lab>
{
    public LabController(DMSContext context)
        : base(context)
    {
    }

    

        #region Search
    protected override IQueryable<Lab> ApplySearch(IQueryable<Lab> query, string search)
    {
        search = search.Trim().ToLower();
        if (int.TryParse(search, out var id))
        {
            return query.Where(x => 
                    x.Id == id ||
                    (x.Name ?? "").Contains(search) ||
                    (x.Address ?? "").Contains(search)
                    
                );
        }
        return query.Where(x => 
            (x.Name ?? "").Contains(search) ||
            (x.Address ?? "").Contains(search)
        );
       
    }
    #endregion
    
}