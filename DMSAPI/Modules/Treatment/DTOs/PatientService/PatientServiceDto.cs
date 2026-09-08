
namespace DMS.Modules.Treatments.Dtos;

public class PatientServiceDto
{
  public int Id { get; set; }
    public int PatientId { get; set; }

    public int? AppointmentId { get; set; }

    public int? TreatmentPlanId { get; set; }

    public int ServiceId { get; set; }
    public int ServiceRequirementId { get; set; }


    public string Value { get; set; } = null!;


    public string? PatientName { get; set; }

    public string? ServiceName { get; set; }

}