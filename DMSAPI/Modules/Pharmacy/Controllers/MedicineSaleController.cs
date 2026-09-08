using DMS.Modules.Pharmacy.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Pharmacy.Controllers;

[Route("api/[controller]")]
public class MedicineSaleController : BaseController<MedicineSale>
{
    public MedicineSaleController(DMSContext context)
        : base(context)
    {
    }


        #region Search
    protected override IQueryable<MedicineSale> ApplySearch(IQueryable<MedicineSale> query, string search)
    {
        search = search.Trim().ToLower();
        if (int.TryParse(search, out var id))
        {
            return query.Where(x => 
                    x.Id == id 
                    
                );
        }
        return query;
       
    }
    #endregion
}