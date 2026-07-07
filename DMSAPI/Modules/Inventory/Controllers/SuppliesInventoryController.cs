using DMS.Modules.Inventory.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Inventory.Controllers;

[Route("api/[controller]")]
public class SuppliesInventoryController : BaseController<SupplyInventory>
{
    public SuppliesInventoryController(DMSContext context)
        : base(context)
    {
    }
}