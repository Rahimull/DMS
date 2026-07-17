using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Labs.Entities;

[Index(nameof(Name), IsUnique = true)]
public class Lab : BaseEntity
{
    [Required]
    [MaxLength(150)]
    [Column("lab_name")]
    public string Name { get; set; } = null!;

    [MaxLength(20)]
    [Column("phone1")]
    public string Phone1 { get; set; } = null!;
    [MaxLength(20)]
    [Column("phone2")]
    public string Phone2 { get; set; }= null!;

    [MaxLength(200)]
    [Column("address")]
    public string? Address { get; set; }

    [MaxLength(150)]
    [Column("lab_manager")]
    public string? LabManager { get; set; }

    public ICollection<LabCase> LabCases { get; set; } = new List<LabCase>();
     public ICollection<LabPayment> Payments { get; set; } = new List<LabPayment>();
}