using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class Taxes : BaseEntity
{
    [Required]
    [MaxLength(150)]
    [Column("annual_income")]
    public decimal AnnualIncome { get; set; }
    [Column("tax_rate")]
    public decimal TaxRate { get; set; }
    [Required]
    [Column("total_annual_tax")]
    public decimal TotalAnnualTax { get; set; }
    [Required]
    [MaxLength(150)]
    [Column("TIN")]
    public string TIN { get; set; } = null!;
    [Required]
    [Column("tax_for_year")]
    public decimal TaxForYear { get; set; }

    public ICollection<TaxPayment> TaxPayments { get; set; } = new List<TaxPayment>();
}