using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class ClassRevenue : BaseEntity
{
    [Required]
    [MaxLength(150)]
    [Column("class_name")]
    public string Name { get; set; } = null!;

    [Column("amount")]
    public decimal Amount { get; set; }

    [MaxLength(500)]
    [Column("description")]
    public string? Description { get; set; }
}