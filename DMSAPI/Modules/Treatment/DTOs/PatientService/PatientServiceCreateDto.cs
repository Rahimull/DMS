
namespace DMS.Modules.Treatments.Dtos;

public class PatientServiceCreateDto
{

    public int PatientId { get; set; }

    public int? AppointmentId { get; set; }

    public int? TreatmentPlanId { get; set; }

    public int ServiceId { get; set; }
    public int ServiceRequirementId { get; set; }


    public string Value { get; set; } = null!;


}