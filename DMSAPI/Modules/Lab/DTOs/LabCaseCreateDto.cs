using System.ComponentModel.DataAnnotations;

namespace DMS.Modules.Labs.DTOs;

public class LabCaseCreateDto
{
    [MaxLength(150)]
    public string? Material { get; set; }


    // [Required(ErrorMessage = "انتخاب مریض الزامی است.")]
    public int? PatientId { get; set; }


    // [Required(ErrorMessage = "انتخاب لابراتوار الزامی است.")]
    public int? LabId { get; set; }


    // [Required(ErrorMessage = "انتخاب داکتر الزامی است.")]
    public int? StaffId { get; set; }


    public int? CaseType { get; set; }


    [Required(ErrorMessage = "وضعیت کیس الزامی است.")]
    [MaxLength(50)]
    public string CaseStatus { get; set; } = "Pending";


    public DateTime? DateSent { get; set; }


    public DateTime? DateReceived { get; set; }


    [Required(ErrorMessage = "مقدار الزامی است.")]
    [Range(0.01, double.MaxValue, ErrorMessage = "مقدار باید بیشتر از صفر باشد.")]
    public decimal Quantity { get; set; }


    [Required(ErrorMessage = "قیمت واحد الزامی است.")]
    [Range(0, double.MaxValue, ErrorMessage = "قیمت واحد معتبر نیست.")]
    public decimal UnitPrice { get; set; }


    [Required(ErrorMessage = "قیمت مجموعی الزامی است.")]
    [Range(0, double.MaxValue, ErrorMessage = "قیمت مجموعی معتبر نیست.")]
    public decimal TotalPrice { get; set; }


    [MaxLength(200)]
    public string? OtherServiceDetails { get; set; }


    [MaxLength(500)]
    public string? Notes { get; set; }
}

