using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Appointments.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Modules.Treatments.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class FeePayment : BaseEntity
{
    [Column("apt_ID")]
    public int? AppointmentId { get; set; }

    [Column("tp_ID")]
    public int? TreatmentPlanId { get; set; }

    [Column("staff_ID")]
    public int StaffId { get; set; }

    [Column("amount")]
    public decimal Amount { get; set; }

    [Column("discount")]
    public decimal Discount { get; set; }

    [Column("remaining")]
    public decimal Remaining { get; set; }

    [Column("payment_date")]
    public DateOnly PaymentDate { get; set; }

    [MaxLength(50)]
    [Column("payment_type")]
    public string? PaymentType { get; set; }

    [MaxLength(100)]
    [Column("reference_no")]
    public string? ReferenceNo { get; set; }

    [MaxLength(500)]
    [Column("remarks")]
    public string? Remarks { get; set; }

    public Appointment? Appointment { get; set; }

    public TreatmentPlan? TreatmentPlan { get; set; }

    public Staff Staff { get; set; } = null!;
}