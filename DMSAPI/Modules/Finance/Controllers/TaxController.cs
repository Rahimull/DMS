using DMS.Modules.Finances.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Finances.Controllers;

[Route("api/[controller]")]
public class TaxController : BaseController<Tax>
{
    public TaxController(DMSContext context)
        : base(context)
    {
    }
}