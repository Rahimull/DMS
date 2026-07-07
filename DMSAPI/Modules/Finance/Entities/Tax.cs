using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class Tax : BaseEntity
{
    [Required]
    [MaxLength(150)]
    [Column("tax_name")]
    public string Name { get; set; } = null!;

    [Column("percentage")]
    public decimal Percentage { get; set; }

    [MaxLength(500)]
    [Column("description")]
    public string? Description { get; set; }

    public ICollection<TaxPayment> Payments { get; set; } = new List<TaxPayment>();
}