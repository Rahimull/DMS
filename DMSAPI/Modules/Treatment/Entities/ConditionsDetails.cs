using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Patients.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class ConditionDetail : BaseEntity
{
    [Column("condition_ID")]
    public int ConditionId { get; set; }

    [Column("pat_ID")]
    public int PatientId { get; set; }

    [Column("severty")]
    public string? Severty { get; set; }

    [Column("result")]
    public int Result { get; set; } = 1;

    [Column("diagnosis_date")]
    public DateOnly? DaignosisDate { get; set; }

    public int TreatmentPlanId { get; set; }

    [MaxLength(1000)]
    [Column("notes")]
    public string? Notes { get; set; }

    public Condition? Condition { get; set; }

    public Patient? Patient { get; set; }
    public TreatmentPlan? TreatmentPlan { get; set; }
}