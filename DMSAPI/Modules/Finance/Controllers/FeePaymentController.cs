using DMS.Modules.Finances.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Finances.Controllers;

[Route("api/[controller]")]
public class FeePaymentController : BaseController<FeePayment>
{
    public FeePaymentController(DMSContext context)
        : base(context)
    {
    }
}