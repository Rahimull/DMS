using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class ServiceRequirement : BaseEntity
{
    [Required]
    [Column("service_ID")]
    public int ServiceId { get; set; }

    [Required]
    [MaxLength(200)]
    [Column("item_name")]
    public string ItemName { get; set; } = null!;

    [Column("quantity")]
    public decimal Quantity { get; set; }

    [MaxLength(50)]
    [Column("unit")]
    public string? Unit { get; set; }

    public Service Service { get; set; } = null!;
}