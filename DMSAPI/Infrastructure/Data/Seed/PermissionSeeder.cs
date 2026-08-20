using DMS.Persistence;
using DMSAPI.Modules.User.Entities;
using Microsoft.EntityFrameworkCore;

namespace DMSAPI.Data.Seed;
public static class PermissionSeeder
{
    public static async Task SeedAsync(DMSContext context)
    {
        if (await context.Permissions.AnyAsync())
            return;

        var permissions = new List<Permission>
        {
            new Permission { Name = "user.create" },
            new Permission { Name = "user.update" },
            new Permission { Name = "user.delete" },
            new Permission { Name = "role.assign" }
        };

        await context.Permissions.AddRangeAsync(permissions);
        await context.SaveChangesAsync();
    }
}