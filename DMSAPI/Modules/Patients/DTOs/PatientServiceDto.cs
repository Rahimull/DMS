namespace DMS.Modules.Patients.DTOs;
public class PatientServiceDto
{
     
    public int PatientId { get; set; }


    public int? AppointmentId { get; set; }
    public int? TreatmentPlanId { get; set; }
    public int ServiceId { get; set; }
    public int ServiceRequirementId { get; set; }
    public string Description { get; set; } = null!;

    public List<ServiceRequirementDto> Requirements { get; set; } = new();
}