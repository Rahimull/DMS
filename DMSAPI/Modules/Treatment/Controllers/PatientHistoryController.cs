using DMS.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Patients.Controllers;


[Route("api/[controller]")]
public class PatientHistoryController : ControllerBase
{
    private readonly DMSContext _context;


    public PatientHistoryController(DMSContext context)
    {
        _context = context;
    }


    [HttpGet("{patientId}")]
    public async Task<IActionResult> GetHistory(int patientId)
    {

        var patient = await _context.Patients
            .Where(x => x.Id == patientId)
            .Select(x => new
            {
                x.Id,
                x.FirstName,
                x.LastName,
                x.Phone,
                x.Address
            })
            .FirstOrDefaultAsync();


        if(patient == null)
        {
            return NotFound(new
            {
                success=false,
                message="Patient not found"
            });
        }



        var treatments =
            await _context.TreatmentPlans
            .Where(x => x.PatientId == patientId)
            .Include(x => x.Staff)
            .Include(x => x.PlanServices)
                .ThenInclude(x => x.Service)
            .Select(x => new
            {
                x.Id,

                x.StartDate,

                x.EndDate,

                doctor =
                    x.Staff != null
                    ? $"{x.Staff.FirstName} {x.Staff.LastName}"
                    : "",

                x.Status,

                x.TotalFee,

                services =
                    x.PlanServices.Select(s => new
                    {
                        serviceName = s.Service!.Name,
                        s.TotalFee
                    })

            })
            .ToListAsync();



        var conditions =
            await _context.ConditionDetails
            .Where(x => x.PatientId == patientId)
            .Include(x => x.Condition)
            .Select(x => new
            {
                condition =
                    x.Condition!.Name,

                x.Severty,

                x.DaignosisDate,

                x.Notes
            })
            .ToListAsync();



        return Ok(new
        {
            success=true,

            data=new
            {
                patient,

                treatments,

                conditions
            }
        });
    }
}