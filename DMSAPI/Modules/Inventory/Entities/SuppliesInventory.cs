using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Inventory.Entities;

[Index(nameof(Name), IsUnique = true)]
public class SupplyInventory : BaseEntity
{
    
    [MaxLength(150)]
    [Column("name")]
    public string? Name { get; set; }
     [Column("qty_in_stock")]
    public int QtyInStock { get; set; }

    [MaxLength(50)]
    [Column("unit_price")]
    public decimal? UnitPrice { get; set; }


    [MaxLength(200)]
    [Column("description")]
    public string? Description { get; set; }

    [Column("reg_date")]
    public DateOnly RegDate { get; set; }

    public ICollection<SupplySale> Sales { get; set; } = new List<SupplySale>();
}