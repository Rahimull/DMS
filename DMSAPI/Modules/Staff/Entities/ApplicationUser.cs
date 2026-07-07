using DMS.Modules.Staffs.Entities;
using Microsoft.AspNetCore.Identity;

public class ApplicationUser : IdentityUser
{
    public int StaffId { get; set; }

    public Staff Staff { get; set; } = null!;
}