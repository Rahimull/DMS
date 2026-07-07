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
    public string Name { get; set; } = null!;

    [Column("xray_date")]
    public DateOnly XrayDate { get; set; }

    [Column("image")]
    public string? Image { get; set; }

    [MaxLength(500)]
    [Column("description")]
    public string? Description { get; set; }

    public Patient Patient { get; set; } = null!;
}