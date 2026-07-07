using DMS.Modules.Labs.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Labs.Controllers;

[Route("api/[controller]")]
public class LabCaseController : BaseController<LabCase>
{
    public LabCaseController(DMSContext context)
        : base(context)
    {
    }
}