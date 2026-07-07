using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Labs.Entities;
using DMS.Modules.Patients.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Labs.Entities;

public class LabCase : BaseEntity
{
    [Column("lab_ID")]
    public int LabId { get; set; }

    [Column("pat_ID")]
    public int PatientId { get; set; }

    [Required]
    [MaxLength(150)]
    [Column("case_name")]
    public string CaseName { get; set; } = null!;

    [Column("case_date")]
    public DateOnly CaseDate { get; set; }

    [Column("delivery_date")]
    public DateOnly? DeliveryDate { get; set; }

    [Column("fee")]
    public decimal Fee { get; set; }

    [MaxLength(50)]
    [Column("status")]
    public string? Status { get; set; }

    [MaxLength(500)]
    [Column("notes")]
    public string? Notes { get; set; }

    public Lab Lab { get; set; } = null!;

    public Patient Patient { get; set; } = null!;

    public ICollection<LabPayment> Payments { get; set; } = new List<LabPayment>();
}