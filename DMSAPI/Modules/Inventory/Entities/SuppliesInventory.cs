using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Inventory.Entities;

[Index(nameof(Name), IsUnique = true)]
public class SupplyInventory : BaseEntity
{
    [Required]
    [MaxLength(150)]
    [Column("item_name")]
    public string Name { get; set; } = null!;

    [MaxLength(50)]
    [Column("unit")]
    public string? Unit { get; set; }

    [Column("quantity")]
    public decimal Quantity { get; set; }

    [Column("unit_price")]
    public decimal UnitPrice { get; set; }

    [Column("reorder_level")]
    public decimal ReorderLevel { get; set; }

    [MaxLength(500)]
    [Column("description")]
    public string? Description { get; set; }

    public ICollection<SupplySale> Sales { get; set; } = new List<SupplySale>();
}