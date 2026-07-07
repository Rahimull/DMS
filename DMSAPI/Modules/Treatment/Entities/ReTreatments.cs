using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class Retreatment : BaseEntity
{
    [Column("pat_ID")]
    public int PatientId { get; set; }

    [Column("staff_ID")]
    public int StaffId { get; set; }

    [Column("retreatment_date")]
    public DateOnly RetreatmentDate { get; set; }

    [MaxLength(500)]
    [Column("reason")]
    public string? Reason { get; set; }

    [MaxLength(1000)]
    [Column("notes")]
    public string? Notes { get; set; }

    public Patient Patient { get; set; } = null!;

    public Staff Staff { get; set; } = null!;
}