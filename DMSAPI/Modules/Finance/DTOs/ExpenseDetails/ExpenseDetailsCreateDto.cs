
using DMS.Modules.Finances.Entities;
using DMS.Modules.Staffs.Entities;


namespace DMS.Modules.Finances.Dtos;

public class ExpenseDetailsCreateDto
{

    public int ExpenseId { get; set; }
    public string? ExpenseName { get; set; }
    public int StaffId { get; set; }
    public string? StaffName { get; set; }
    public string? Name { get; set; }
    public int? Quantity { get; set; }

    public string? QuantityUnit { get; set; }

    public decimal? UnitPrice { get; set; }
    public decimal? Total { get; set; }
    public string? Invoice { get; set; }
    public string? Note { get; set; }

}