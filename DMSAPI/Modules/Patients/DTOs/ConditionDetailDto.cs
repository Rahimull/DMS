namespace DMS.Modules.Patients.DTOs;
public class ConditionDetailDto
{
    public int ConditionId { get; set; }

    public string? Severity { get; set; }

    public string? DiagnosisDate { get; set; }

    public string? Result { get; set; }

    public string? Notes { get; set; }
}