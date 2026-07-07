using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;
using DMS.Modules.Patients.Entities;

namespace DMS.Modules.Pharmacy.Entities;

public class MedicineSale : BaseEntity
{
    [Column("medicine_ID")]
    public int MedicineInventoryId { get; set; }

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

    public MedicineInventory MedicineInventory { get; set; } = null!;

    public Patient? Patient { get; set; }

    public Staff Staff { get; set; } = null!;
}