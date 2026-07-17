using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Modules.Treatments.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Labs.Entities;

public class LabCase : BaseEntity
{

    [MaxLength(150)]
    [Column("material")]
    public string? Material { get; set; }

    [Column("patient_ID")]
    public int PatientId { get; set; }
    [Column("lab_ID")]
    public int LabId { get; set; }
    [Column("staff_ID")]
    public int StaffId { get; set; }


    [Column("case_type")]
    public int CaseType { get; set; }

    [Column("case_status")]
    public string CaseStatus { get; set; } = null!;
    [Column("date_sent")]
    public DateOnly DateSent { get; set; }
    [Column("date_received")]
    public DateOnly DateReceived { get; set; }

    [Required]
     [Column("quantity")]
    public decimal Quantity { get; set; }
    [Required]
     [Column("unit_price")]
    public decimal UnitPrice { get; set; }
    [Required]
     [Column("total_price")]
    public decimal TotalPrice { get; set; }

   

    [MaxLength(200)]
    [Column("otherService_details")]
    public string? OtherServiceDetails { get; set; }
    [MaxLength(200)]
    [Column("notes")]
    public string? Notes { get; set; }

    public Lab? Lab { get; set; }

    public Patient? Patient { get; set; }
    public Staff? Staff { get; set; }
    public Service? Service { get; set; }

    public ICollection<LabPayment> Payments { get; set; } = new List<LabPayment>();
}