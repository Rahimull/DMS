using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class TaxPayment : BaseEntity
{
    [Column("tax_ID")]
    public int TaxesId { get; set; }
    [Column("paid_date")]
    public DateOnly PaidDate { get; set; }

    [Required]
    [Column("paid_by")]
    public int PaidBy { get; set; }

    [Required]
    [Column("paid_amount")]
    public decimal Amount { get; set; }
    [Required]
    [Column("due_paid")]
    public decimal DuePaid { get; set; }

    [MaxLength(200)]
    [Column("note")]
    public string? Note { get; set; }

    [Column("modified_at")]
    public DateOnly ModifiedAt { get; set; }

    public Taxes Taxes { get; set; } = null!;

    public Staff Staff { get; set; } = null!;
}