using System.ComponentModel.DataAnnotations;

namespace DMS.Modules.Pharmacy.DTOs;

public class MedicineInventoryCreateDto
{
    [Required]
    [MaxLength(150)]
    public string Name1 { get; set; } = null!;

    [MaxLength(100)]
    public string? Name2 { get; set; }

    [MaxLength(50)]
    public string? Type { get; set; }

    [MaxLength(100)]
    public string? Strength { get; set; }

    public int QtyInStock { get; set; }

    public DateOnly? IssueDate { get; set; }

    public DateOnly? ExpireDate { get; set; }

    [MaxLength(100)]
    public string? Dosage { get; set; }

    public decimal UnitPrice { get; set; }

    [MaxLength(200)]
    public string? Notes { get; set; }
}