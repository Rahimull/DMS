using System.ComponentModel.DataAnnotations;

namespace DMS.Modules.Treatments.Dtos;

public class ConditionDetailsDto
{
    public int Id { get; set; }

    public int? ConditionId { get; set; }

    public int? PatientId { get; set; }

    public string? Severty { get; set; }

    public int Result { get; set; }

    public DateOnly? DaignosisDate { get; set; }

    public int? TreatmentPlanId { get; set; }

    [MaxLength(300)]
    public string? Notes { get; set; }

    public string? ConditionName { get; set; }

    public string? PatientName { get; set; }
      public DateTime CreatedAt { get; set; }
}