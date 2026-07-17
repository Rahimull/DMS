using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Patients.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Xrays.Entities;

public class PatientXray : BaseEntity
{
    [Column("pat_ID")]
    public int PatientId { get; set; }

    [Required]
    [MaxLength(150)]
    [Column("xray_name")]
    public string XrayName { get; set; } = null!;

    [Column("xray_type")]
    public string Xraytype { get; set; } = null!;

    [Column("reg_date")]
    public DateOnly RegDate { get; set; }

    [MaxLength(200)]
    [Column("description")]
    public string? Description { get; set; }

    public Patient Patient { get; set; } = null!;
}