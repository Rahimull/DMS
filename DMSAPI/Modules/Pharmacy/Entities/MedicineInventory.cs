using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Pharmacy.Entities;

[Index(nameof(Name1), IsUnique = true)]
public class MedicineInventory : BaseEntity
{

    [MaxLength(150)]
    [Column("name1")]
    public string Name1 { get; set; } = null!;

    [MaxLength(100)]
    [Column("name2")]
    public string? Name2 { get; set; }

    [MaxLength(50)]
    [Column("type")]
    public string? Type { get; set; }
    [MaxLength(100)]
    [Column("strength")]
    public string? Strength { get; set; }

    [Column("qty_in_stock")]
    public int QtyInStock { get; set; }
    [Column("issue_date")]
    public DateOnly? IssueDate { get; set; }
    [Column("expire_date")]
    public DateOnly? ExpireDate { get; set; }
    [MaxLength(100)]
    [Column("dosage")]
    public string? Dosage { get; set; }
    [Column("unit_price")]
    public decimal UnitPrice { get; set; }

    [MaxLength(200)]
    [Column("notes")]
    public string? notes { get; set; }

    

    public ICollection<MedicineSale> Sales { get; set; } = new List<MedicineSale>();
}