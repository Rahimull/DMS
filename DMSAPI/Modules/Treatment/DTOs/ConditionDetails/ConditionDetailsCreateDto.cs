using System.ComponentModel.DataAnnotations;

namespace DMS.Modules.Treatments.Dtos;

public class ConditionDetailsCreateDto
{

    public int? ConditionId { get; set; }

    public int? PatientId { get; set; }

    public string? Severty { get; set; }

    public int Result { get; set; }

    public DateOnly? DaignosisDate { get; set; }

    public int? TreatmentPlanId { get; set; }

    [MaxLength(300)]
    public string? Notes { get; set; }

}