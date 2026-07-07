using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Inventory.Entities;

public class SupplySale : BaseEntity
{
    [Column("item_ID")]
    public int SupplyInventoryId { get; set; }

    [Column("pat_ID")]
    public int? PatientId { get; set; }

    [Column("staff_ID")]
    public int StaffId { get; set; }

    [Column("qty")]
    public decimal Quantity { get; set; }

    [Column("unit_price")]
    public decimal UnitPrice { get; set; }

    [Column("total")]
    public decimal Total { get; set; }

    [Column("sale_date")]
    public DateOnly SaleDate { get; set; }

    public SupplyInventory SupplyInventory { get; set; } = null!;

    public Patient? Patient { get; set; }

    public Staff Staff { get; set; } = null!;
}