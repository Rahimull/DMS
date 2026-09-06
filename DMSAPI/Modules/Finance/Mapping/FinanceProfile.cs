using AutoMapper;
using DMS.Modules.Finances.Dtos;
using DMS.Modules.Finances.Entities;


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


        /* ==========================================================================================
              Expense:  CREATE DTO → ENTITY , ENTITY → DTO,   UPDATE DTO → ENTITY
           ============================================================================================= */
        CreateMap<ExpenseDetailsCreateDto, ExpenseDetail>();
        CreateMap<ExpenseDetailsUpdateDto, ExpenseDetail>()
            .ForMember(
                dest => dest.Id,
                opt => opt.Ignore()
            );
        CreateMap<ExpenseDetail, ExpenseDetailsDto>()
            .ForMember(dest => dest.ExpenseName, opt => opt.MapFrom(src => src.Expense.Name))
            .ForMember(dest => dest.StaffName, opt => opt.MapFrom(src => src.Staff.FirstName + " " + src.Staff.LastName));
          
    }
}

