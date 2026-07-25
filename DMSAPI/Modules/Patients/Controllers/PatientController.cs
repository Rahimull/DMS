using System.Text.Json;
using DMS.Modules.Patients.DTOs;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Patients.Mappers;
using DMS.Modules.Patients.Models;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Patients.Controllers;

[Route("api/[controller]")]
public class PatientController : BaseController<Patient>
{
    public PatientController(DMSContext context)
        : base(context)
    {
    }


    [HttpPost("PatientRegistration")]
    public async Task<IActionResult> PatientRegistration([FromBody] PatientRegistrationDto dto)
    {
       var patient = dto.Patient.ToPatient();
    //    _context.Patients.Add(patient);
    //    await _context.SaveChangesAsync();




       System.Console.WriteLine(JsonSerializer.Serialize(
        dto,
        new JsonSerializerOptions
        {
            WriteIndented = true
        }
       ));
       Console.WriteLine(
        JsonSerializer.Serialize(
            patient,
            new JsonSerializerOptions
            {
                WriteIndented = true
            }
        )
    );
        
        return Ok(patient);
    }
}