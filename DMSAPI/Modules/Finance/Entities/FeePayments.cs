using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Appointments.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Modules.Treatments.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class FeePayment : BaseEntity
{
    [Column("installment_counter")]
    public int InstallmentCounter { get; set; }

     [Required]
    [Column("payment_date")]
    public DateOnly PaymentDate { get; set; }
    [Column("paid_amount")]
    public decimal PaidAmount { get; set; }

    [Column("due_amount")]
    public decimal DueAmount { get; set; }

    [Column("whole_fee_paid")]
    public decimal WholeFeePaid { get; set; }
    [Column("apt_ID")]
    public int? AppointmentId { get; set; }

    [Column("tp_ID")]
    public int? TreatmentPlanId { get; set; }

    [Column("staff_ID")]
    public int StaffId { get; set; }

    public Appointment? Appointment { get; set; }

    public TreatmentPlan? TreatmentPlan { get; set; }

    public Staff Staff { get; set; } = null!;
}