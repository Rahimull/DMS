using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class ExpenseDetail : BaseEntity
{
    [Column("exp_ID")]
    public int ExpenseId { get; set; }

    [Column("purchased_by")]
    public int StaffId { get; set; }


    [Required]
    [Column("item_name")]
    public string? ItemName { get; set; }


    [Required]
    [Column("quantity")]
    public int Quantity { get; set; }

    [Column("qty_unit")]
    public string? QuantityUnit { get; set; }

    [Required]
    [Column("unit_price")]
    public int UnitPrice { get; set; }
    [Column("total")]
    [Required]
    public Decimal Total { get; set; }

    [Column("purchase_date")]
    [Required]
    public DateOnly PurchaseDate { get; set; }

    [Column("invoice")]
    public string? Inoice { get; set; }
    [Column("note")]
    public string? Note { get; set; }

    public Expense Expense { get; set; } = null!;

    public Staff Staff { get; set; } = null!;

}