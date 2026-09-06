using DMS.Modules.Finances.Dtos;
using DMS.Modules.Finances.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Finances.Controllers;

[Route("api/[controller]")]
public class ExpenseDetailsController : BaseDtoController<ExpenseDetailsDto, ExpenseDetailsCreateDto, ExpenseDetailsUpdateDto, ExpenseDetail>
{
    public ExpenseDetailsController(DMSContext context, IMapper mapper)
        : base(context, mapper)
    {
    }


    #region Include Relations

    protected override IQueryable<ExpenseDetail> IncludeRelations(
        IQueryable<ExpenseDetail> query)
    {
        return query
            .Include(x => x.Expense)
            .Include(x => x.Staff);
    }

    #endregion
}