using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Clinics.Entities;

[Index(nameof(Name), IsUnique = true)]
[Index(nameof(Email), IsUnique = true)]
public class Clinic : BaseEntity
{
    [Required, MaxLength(200)]
    [Column("clinic_name")]
    public string Name { get; set; } = null!;

    [Required, MaxLength(500)]
    [Column("clinic_address")]
    public string Address { get; set; } = null!;

    [Phone, MaxLength(20)]
    [Column("clinic_phone1")]
    public string? Phone1 { get; set; }

    [Phone, MaxLength(20)]
    [Column("clinic_phone2")]
    public string? Phone2 { get; set; }

    [EmailAddress, MaxLength(150)]
    [Column("clinic_email")]
    public string? Email { get; set; }

    // [Column("clinic_founder")]
    // public int? FounderId { get; set; }

    [Column("clinic_logo")]
    public byte[]? Logo { get; set; }

    // Navigation Property

    // [ForeignKey(nameof(FounderId))]
    // public Staff? Founder { get; set; }
}