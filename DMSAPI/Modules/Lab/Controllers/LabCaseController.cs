using DMS.Modules.Labs.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Labs.Controllers;

[Route("api/[controller]")]
public class LabCaseController : BaseController<LabCase>
{
    public LabCaseController(DMSContext context)
        : base(context)
    {
    }


    #region Include Relations
    protected override IQueryable<LabCase> IncludeRelations(IQueryable<LabCase> query)
    {
        return query.Include(x => x.Lab)
                    .Include(x => x.Patient)
                    .Include(x => x.Staff)
                    .Include(x => x.LabPayments);
    }
    #endregion
}