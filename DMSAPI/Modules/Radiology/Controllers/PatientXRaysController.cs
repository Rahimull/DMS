using DMS.Modules.Xrays.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using DMS.Modules.Xrays.Dtos;

namespace DMS.Modules.Radiology.Controllers;

[Route("api/[controller]")]
public class PatientXRayController : BaseDtoController<PatientXrayDto, PatientXrayCreateDto, PatientXrayUpdateDto, PatientXray>
{
    public PatientXRayController(DMSContext context, IMapper mapper)
        : base(context, mapper)
    {
    }
}