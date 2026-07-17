using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class Expense : BaseEntity
{
    [Required]
    [MaxLength(150)]
    [Column("expense_name")]
    public string Name { get; set; } = null!;

    public ICollection<ExpenseDetail> ExpenseDetail { get; set; } = new List<ExpenseDetail>();
}