using DMS.Modules.Labs.DTOs;
using DMS.Modules.Labs.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace DMS.Modules.Labs.Controllers;

[Route("api/[controller]")]
public class LabCaseController : BaseDtoController<LabCaseDto, LabCaseCreateDto, LabCaseUpdateDto, LabCase>
{
    public LabCaseController(DMSContext context, IMapper mapper)
        : base(context, mapper)
    {
    }


    #region Include Relations
    protected override IQueryable<LabCase> IncludeRelations(IQueryable<LabCase> query)
    {
        return query.Include(x => x.Lab)
                    .Include(x => x.Patient)
                    .Include(x => x.Staff)
                    .Include(x => x.LabPayments)
                    .Include(x => x.Service);
    }
    #endregion


        #region Search
    protected override IQueryable<LabCase> ApplySearch(IQueryable<LabCase> query, string search)
    {
        search = search.Trim().ToLower();
        if (int.TryParse(search, out var id))
        {
            return query.Where(x => 
                    x.Id == id ||
                    (x.Material ?? "").Contains(search) ||
                    (x.CaseStatus ?? "").Contains(search)
                    
                );
        }
        return query.Where(x => 
            (x.Material ?? "").Contains(search) ||
            (x.CaseStatus ?? "").Contains(search)
        );
       
    }
    #endregion


}