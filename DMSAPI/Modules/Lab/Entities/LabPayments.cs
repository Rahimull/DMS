using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Labs.Entities;

public class LabPayment : BaseEntity
{
    [Column("lab_ID")]
    public int LabId { get; set; }

    [Column("case_ID")]
    public int LabCaseId { get; set; }

    [Column("staff_ID")]
    public int StaffId { get; set; }

    [Column("payment_status")]
    public int PaymentStatus { get; set; }

    [Column("payment_date")]
    public DateOnly PaymentDate { get; set; }

    [Column("amount_paid")]
    public decimal AmountPaid { get; set; }
    [Column("amount_due")]
    public decimal AmountDue { get; set; }

    public LabCase? LabCase { get; set; } = null!;

    public Staff? Staff { get; set; } = null!;
    public Lab? Lab { get; set; }
}