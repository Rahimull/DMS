using AutoMapper;
using DMS.Modules.Labs.Entities;

namespace DMS.Modules.Labs.DTOs;

public class LabProfile : Profile
{
    public LabProfile()
    {
        /* ==========================================================================================
              LABCASE:  CREATE DTO → ENTITY , ENTITY → DTO,   UPDATE DTO → ENTITY
           ============================================================================================= */

        CreateMap<LabCaseCreateDto, LabCase>();
        CreateMap<LabCaseUpdateDto, LabCase>()
            .ForMember(
                dest => dest.Id,
                opt => opt.Ignore()
            );
        CreateMap<LabCase, LabCaseDto>()
            .ForMember(
                dest => dest.StaffName,
                opt => opt.MapFrom(src => src.Staff != null ? src.Staff.FirstName + " " + src.Staff.LastName : null)
            )
            .ForMember(
                dest => dest.PatientName,
                opt => opt.MapFrom(src => src.Patient != null ? src.Patient.FirstName + " " + src.Patient.LastName : null)
            )
            .ForMember(
                dest => dest.LabName,
                opt => opt.MapFrom(src => src.Lab != null ? src.Lab.Name : null)
            )
            .ForMember(
                dest => dest.CaseTypeName,
                opt => opt.MapFrom(src => src.Service != null ? src.Service.Name : null)
            );
    }
}

