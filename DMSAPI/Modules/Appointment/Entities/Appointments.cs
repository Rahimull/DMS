using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Modules.Treatments.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Appointments.Entities;

public class Appointment : BaseEntity
{
    [Required]
    [Column("pat_ID")]
    public int PatientId { get; set; }

    [Column("service_ID")]
    public int? ServiceId { get; set; }

    [Column("installment")]
    public int Installment { get; set; } = 1;

    [Required]
    [Column("round")]
    public int Round { get; set; } = 1;

    [Column("discount")]
    public decimal Discount { get; set; }

    [Column("service_fee")]
    public decimal ServiceFee { get; set; }

    [Column("total_fee")]
    public decimal TotalFee { get; set; }

    [Column("meet_date")]
    public DateTime? MeetDate { get; set; }

    [Column("staff_ID")]
    public int? StaffId { get; set; }

    [MaxLength(50)]
    [Column("status")]
    public string? Status { get; set; }

    [MaxLength(500)]
    [Column("notification")]
    public string? Notification { get; set; }

    [MaxLength(1000)]
    [Column("details")]
    public string? Details { get; set; }

    public Patient Patient { get; set; } = null!;

    public Service? Service { get; set; }

    public Staff? Staff { get; set; }
}