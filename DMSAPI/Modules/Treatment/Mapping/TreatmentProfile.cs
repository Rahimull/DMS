using AutoMapper;
using DMS.Modules.Treatments.Dtos;
using DMS.Modules.Treatments.Entities;

public class TreatmentProfile : Profile
{
    public TreatmentProfile()
    {
        /* ==========================================================================================
              ConditionDetails:  CREATE DTO → ENTITY , ENTITY → DTO,   UPDATE DTO → ENTITY
           ============================================================================================= */

        CreateMap<ConditionDetailsCreateDto, ConditionDetail>();
        CreateMap<ConditionDetailsUpdateDto, ConditionDetail>()
            .ForMember(
                dest => dest.Id,
                opt => opt.Ignore()
            );
        CreateMap<ConditionDetail, ConditionDetailsDto>()
            .ForMember(
                dest => dest.ConditionName,
                opt => opt.MapFrom(src => src.Condition != null ? src.Condition.Name : null)
            )
            .ForMember(
                dest => dest.PatientName,
                opt => opt.MapFrom(src => src.Patient != null ? src.Patient.FirstName + " " + src.Patient.LastName : null)
            );
    }
}

