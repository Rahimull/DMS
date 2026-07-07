using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Pharmacy.Entities;

[Index(nameof(Name), IsUnique = true)]
public class MedicineInventory : BaseEntity
{
    [Required]
    [MaxLength(150)]
    [Column("medicine_name")]
    public string Name { get; set; } = null!;

    [MaxLength(100)]
    [Column("generic_name")]
    public string? GenericName { get; set; }

    [MaxLength(100)]
    [Column("company")]
    public string? Company { get; set; }

    [MaxLength(50)]
    [Column("unit")]
    public string? Unit { get; set; }

    [Column("quantity")]
    public decimal Quantity { get; set; }

    [Column("unit_price")]
    public decimal UnitPrice { get; set; }

    [Column("expire_date")]
    public DateOnly? ExpireDate { get; set; }

    public ICollection<MedicineSale> Sales { get; set; } = new List<MedicineSale>();
}