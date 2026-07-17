using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Inventory.Entities;

public class SupplySale : BaseEntity
{
    [Column("supply_ID")]
    public int? SupplyInventoryId { get; set; }

    [Column("patient_ID")]
    public int? PatientId { get; set; }

    [Column("staff_ID")]
    public int? StaffId { get; set; }

    [Column("qty_sold")]
    public decimal QuantitySold { get; set; }
    [Column("sale_date")]
    public DateOnly SaleDate { get; set; }

    [Column("total_price")]
    public decimal TotalPrice { get; set; }

    

    public SupplyInventory? SupplyInventory { get; set; }

    public Patient? Patient { get; set; }

    public Staff? Staff { get; set; }
}