using DMS.Modules.Patients.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Patients.Controllers;

[Route("api/[controller]")]
public class PatientController : BaseController<Patient>
{
    public PatientController(DMSContext context)
        : base(context)
    {
    }
}