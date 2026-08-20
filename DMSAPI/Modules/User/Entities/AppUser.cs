

using DMS.Modules.Staffs.Entities;
using DMSAPI.Modules.User.Entities;
using Microsoft.AspNetCore.Identity;


namespace DMSAPI.Modules.User.Entities;

public class AppUser : IdentityUser<int>
{
    public string FullName { get; set; } = null!;
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? LastLoginAt { get; set; }
    
    public int? StaffId { get; set; }
    public Staff? Staff { get; set; }
    public string? ProfileImage { get; set; }
    public ICollection<RefreshToken>? RefreshTokens { get; set; }
public ICollection<AuditLog>? AuditLogs { get; set; }
}