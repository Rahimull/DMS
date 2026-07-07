using DMS.Modules.Appointments.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Appointments.Controllers;

[Route("api/[controller]")]
public class AppointmentController : BaseController<Appointment>
{
    public AppointmentController(DMSContext context)
        : base(context)
    {
    }
}