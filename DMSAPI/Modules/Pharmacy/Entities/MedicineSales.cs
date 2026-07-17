using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;
using DMS.Modules.Patients.Entities;

namespace DMS.Modules.Pharmacy.Entities;

public class MedicineSale : BaseEntity
{
    [Column("med_ID")]
    public int MedicineInventoryId { get; set; }

    [Column("patient_ID")]
    public int? PatientId { get; set; }

    [Column("staff_ID")]
    public int StaffId { get; set; }
     

    [Column("qty_sold")]
    public decimal Quantity { get; set; }
    [Column("sale_date")]
    public DateOnly SaleDate { get; set; }

    [Column("total_price")]
    public decimal TotalPrice { get; set; }

   

    public MedicineInventory? MedicineInventory { get; set; }

    public Patient? Patient { get; set; }

    public Staff? Staff { get; set; }
}