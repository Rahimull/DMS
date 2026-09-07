using AutoMapper;
using DMS.Modules.Xrays.Dtos;
using DMS.Modules.Xrays.Entities;


public class RadiologyProfile : Profile
{
    public RadiologyProfile()
    {
        /* ==========================================================================================
              PatientXray:  CREATE DTO → ENTITY , ENTITY → DTO,   UPDATE DTO → ENTITY
           ============================================================================================= */
        CreateMap<PatientXrayCreateDto, PatientXray>()
            .ForMember(
                dest => dest.FilePath,
                opt => opt.Ignore()
            );
        CreateMap<PatientXrayUpdateDto, PatientXray>()
            .ForMember(
                dest => dest.Id,
                opt => opt.Ignore()
            ).ForMember(
                dest => dest.FilePath,
                opt => opt.Ignore()
            );
        CreateMap<PatientXray, PatientXrayDto>()
            .ForMember(
                dest => dest.PatientName,
                opt => opt.MapFrom(src => src.Patient.FirstName + " " + src.Patient.LastName)
            );


          
    }
}

