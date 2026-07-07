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
}