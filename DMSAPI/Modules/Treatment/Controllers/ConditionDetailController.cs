using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Treatments.Controllers;

[Route("api/[controller]")]
public class ConditionDetailController : BaseController<ConditionDetail>
{
    public ConditionDetailController(DMSContext context)
        : base(context)
    {
    }
}