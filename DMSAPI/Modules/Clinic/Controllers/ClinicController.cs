using DMS.Modules.Clinics.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Clinics.Controllers;

[Route("api/[controller]")]
public class ClinicController : BaseController<Clinic>
{
    public ClinicController(DMSContext context)
        : base(context)
    {
    }


     #region Search
    protected override IQueryable<Clinic> ApplySearch(IQueryable<Clinic> query, string search)
    {
        search = search.Trim().ToLower();
        if (int.TryParse(search, out var id))
        {
            return query.Where(x => 
                    x.Id == id ||
                    (x.Name ?? "").Contains(search) || 
                    (x.Phone1 ?? "").Contains(search) || 
                    (x.Phone2 ?? "").Contains(search)
                );
        }
        return query.Where(x => 
            (x.Name ?? "").Contains(search) ||
            (x.Phone1 ?? "").Contains(search) || 
            (x.Phone2 ?? "").Contains(search)
        );
       
    }
    #endregion
}