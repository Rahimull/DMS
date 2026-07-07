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
}