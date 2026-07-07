using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class ExpenseInvoice : BaseEntity
{
    [MaxLength(100)]
    [Column("invoice_no")]
    public string? InvoiceNo { get; set; }

    [Column("invoice_date")]
    public DateOnly InvoiceDate { get; set; }

    [Column("total_amount")]
    public decimal TotalAmount { get; set; }

    public ICollection<ExpenseDetail> Details { get; set; } = new List<ExpenseDetail>();
}