using System.ComponentModel.DataAnnotations;
namespace DMS.Modules.Xrays.Dtos;

public class PatientXrayCreateDto
{
    public int PatientId { get; set; }
    public string? PatientName { get; set; }

    [Required]
    public string XrayName { get; set; } = null!;
    public string? Xraytype { get; set; }

    [MaxLength(200)]
    public string? Description { get; set; }

}