using DMS.Modules.Finances.Dtos;
using DMS.Modules.Finances.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace DMS.Modules.Finances.Controllers;

[Route("api/[controller]")]
public class ExpenseController : BaseDtoController<ExpenseDto, ExpenseCreateDto, ExpenseUpdateDto, Expense>
{
    public ExpenseController(DMSContext context, IMapper mapper)
        : base(context, mapper)
    {
    }
}