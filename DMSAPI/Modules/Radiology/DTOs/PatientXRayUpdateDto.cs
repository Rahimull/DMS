using System.ComponentModel.DataAnnotations;
namespace DMS.Modules.Xrays.Dtos;

public class PatientXrayUpdateDto
{
    public int Id { get; set; }
    public int PatientId { get; set; }
  
    [Required]
    public string XrayName { get; set; } = null!;

    [MaxLength(200)]
    public string? Description { get; set; }
    public IFormFile? FilePath { get; set; }

}