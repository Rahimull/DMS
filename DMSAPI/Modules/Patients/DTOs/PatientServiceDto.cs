namespace DMS.Modules.Patients.DTOs;
public class PatientServiceDto
{
    public int ServiceId { get; set; }

    public string? ServiceName { get; set; }

    public string? Description { get; set; }

    public decimal Fee { get; set; }

    public List<ServiceRequirementDto> Requirements { get; set; } = new();
}