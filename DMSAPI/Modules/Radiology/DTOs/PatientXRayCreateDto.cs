using System.ComponentModel.DataAnnotations;
namespace DMS.Modules.Xrays.Dtos;

public class PatientXrayCreateDto
{
    public int PatientId { get; set; }

    [Required]
    public string XrayName { get; set; } = null!;
    public IFormFile? FilePath { get; set; }

    [MaxLength(200)]
    public string? Description { get; set; }

}