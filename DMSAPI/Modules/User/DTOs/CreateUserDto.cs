using System.ComponentModel.DataAnnotations;

namespace DMSAPI.Modules.User.DTOs;

public class CreateUserDto
{
    [Required]
    public string FullName { get; set; } = null!;

    [Required]
    public string UserName { get; set; } = null!;

    [EmailAddress]
    public string? Email { get; set; }

    public string? PhoneNumber { get; set; }

    public int? StaffId { get; set; }

    [Required]
    public string Password { get; set; } = null!;

    public List<string> Roles { get; set; } = [];
}