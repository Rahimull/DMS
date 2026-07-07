using DMS.Modules.Clinics.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Clinics.Controllers;

[Route("api/[controller]")]
public class ClinicController : BaseController<Clinic>
{
    public ClinicController(DMSContext context)
        : base(context)
    {
    }
}