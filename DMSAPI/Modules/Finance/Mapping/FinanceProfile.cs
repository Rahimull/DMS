using AutoMapper;
using DMS.Modules.Finances.Entities;

namespace DMS.Modules.Finances.Dtos;

public class FinanceProfile : Profile
{
    public FinanceProfile()
    {
        /* ==========================================================================================
              Expense:  CREATE DTO → ENTITY , ENTITY → DTO,   UPDATE DTO → ENTITY
           ============================================================================================= */

        CreateMap<ExpenseCreateDto, Expense>();
        CreateMap<ExpenseUpdateDto, Expense>()
            .ForMember(
                dest => dest.Id,
                opt => opt.Ignore()
            );
        CreateMap<Expense, ExpenseDto>();
          
    }
}

