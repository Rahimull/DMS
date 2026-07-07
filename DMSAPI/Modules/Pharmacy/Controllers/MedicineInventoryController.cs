using DMS.Modules.Pharmacy.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Pharmacy.Controllers;

[Route("api/[controller]")]
public class MedicineInventoryController : BaseController<MedicineInventory>
{
    public MedicineInventoryController(DMSContext context)
        : base(context)
    {
    }
}