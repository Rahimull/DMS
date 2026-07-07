using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class ExpenseDetail : BaseEntity
{
    [Column("expense_ID")]
    public int ExpenseId { get; set; }

    [Column("staff_ID")]
    public int StaffId { get; set; }

    [Column("amount")]
    public decimal Amount { get; set; }

    [Column("expense_date")]
    public DateOnly ExpenseDate { get; set; }

    [Column("invoice_ID")]
    public int? ExpenseInvoiceId { get; set; }

    public Expense Expense { get; set; } = null!;

    public Staff Staff { get; set; } = null!;

    public ExpenseInvoice? ExpenseInvoice { get; set; }
}