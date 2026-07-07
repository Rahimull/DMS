using DMS.Modules.Treatments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Treatments.Controllers;

[Route("api/[controller]")]
public class PatientServiceController : BaseController<PatientService>
{
    public PatientServiceController(DMSContext context)
        : base(context)
    {
    }
}