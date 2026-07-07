using DMS.Modules.Inventory.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Inventory.Controllers;

[Route("api/[controller]")]
public class SuppliesSaleController : BaseController<SupplySale>
{
    public SuppliesSaleController(DMSContext context)
        : base(context)
    {
    }
}