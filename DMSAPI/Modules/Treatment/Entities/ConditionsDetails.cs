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

    [Column("tooth_no")]
    public int ToothNo { get; set; }

    [Column("condition_date")]
    public DateOnly ConditionDate { get; set; }

    [MaxLength(1000)]
    [Column("notes")]
    public string? Notes { get; set; }

    public Condition Condition { get; set; } = null!;

    public Patient Patient { get; set; } = null!;
}