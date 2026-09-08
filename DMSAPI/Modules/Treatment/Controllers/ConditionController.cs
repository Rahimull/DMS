using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Treatments.Controllers;

[Route("api/[controller]")]
public class ConditionController : BaseController<Condition>
{
    public ConditionController(DMSContext context)
        : base(context)
    {
    }


       #region Search
    protected override IQueryable<Condition> ApplySearch(IQueryable<Condition> query, string search)
    {
        search = search.Trim().ToLower();
        if (int.TryParse(search, out var id))
        {
            return query.Where(x => 
                    x.Id == id ||
                    (x.Name ?? "").Contains(search)
                    
                );
        }
        return query.Where(x => 
            (x.Name ?? "").Contains(search)
        );
       
    }
    #endregion
}