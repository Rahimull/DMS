using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class ExpenseInvoice : BaseEntity
{
    [MaxLength(100)]
    [Column("file_path")]
    public string FilePath { get; set; } = null!;

    [Column("created_by")]
    public int StaffId { get; set; }

    [Column("invoice_date")]
    public DateOnly InvoiceDate { get; set; }

    [Column("notes")]
    public string? Notes { get; set; }

    public Staff? Staff { get; set; }

    public ICollection<ExpenseDetail> Details { get; set; } = new List<ExpenseDetail>();
}