using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Patients.Entities;
using DMS.Shared.Common;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Treatments.Entities;

[Index(nameof(Name), IsUnique = true)]
public class Service : BaseEntity
{
    [Required, MaxLength(150)]
    [Column("service_name")]
    public string Name { get; set; } = null!;

    [MaxLength(500)]
    [Column("description")]
    public string? Description { get; set; }

    [Column("fee")]
    public decimal Fee { get; set; }

    [Column("duration")]
    public int Duration { get; set; }

    [Column("is_active")]
    public bool IsActive { get; set; } = true;

    // Navigation Properties

    public ICollection<PatientService> PatientServices { get; set; } = new List<PatientService>();

    public ICollection<PlanService> PlanServices { get; set; } = new List<PlanService>();
}