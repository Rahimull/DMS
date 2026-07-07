using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Labs.Entities;

public class LabPayment : BaseEntity
{
    [Column("case_ID")]
    public int LabCaseId { get; set; }

    [Column("staff_ID")]
    public int StaffId { get; set; }

    [Column("amount")]
    public decimal Amount { get; set; }

    [Column("payment_date")]
    public DateOnly PaymentDate { get; set; }

    [MaxLength(100)]
    [Column("reference_no")]
    public string? ReferenceNo { get; set; }

    [MaxLength(500)]
    [Column("remarks")]
    public string? Remarks { get; set; }

    public LabCase LabCase { get; set; } = null!;

    public Staff Staff { get; set; } = null!;
}