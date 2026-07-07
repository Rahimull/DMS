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
    [Column("phone")]
    public string? Phone { get; set; }

    [MaxLength(500)]
    [Column("address")]
    public string? Address { get; set; }

    [MaxLength(500)]
    [Column("description")]
    public string? Description { get; set; }

    public ICollection<LabCase> LabCases { get; set; } = new List<LabCase>();
}