using System.ComponentModel.DataAnnotations;
namespace DMS.Modules.Xrays.Dtos;

public class PatientXrayDto
{
    public int Id { get; set; }
    public int PatientId { get; set; }
    public string? PatientName { get; set; }

    [Required]
    public string XrayName { get; set; } = null!;

    [MaxLength(200)]
    public string? Description { get; set; }
    public string? FilePath { get; set; }
    public DateTime CreatedAt { get; set; }

}