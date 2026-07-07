using DMS.Modules.Xrays.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Radiology.Controllers;

[Route("api/[controller]")]
public class PatientXRayController : BaseController<PatientXray>
{
    public PatientXRayController(DMSContext context)
        : base(context)
    {
    }
}