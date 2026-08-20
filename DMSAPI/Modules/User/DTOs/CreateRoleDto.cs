using System.ComponentModel.DataAnnotations;

namespace DMSAPI.Modules.User.DTOs;

public class CreateRoleDto
{
    [Required]
    [StringLength(50)]
    public string Name { get; set; } = string.Empty;
}