using DMS.Modules.Staffs.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Staffs.Controllers;

[Route("api/[controller]")]
public class StaffController : BaseController<Staff>
{
    public StaffController(DMSContext context)
        : base(context)
    {
    }
}