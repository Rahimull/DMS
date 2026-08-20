using DMS.Persistence;
using DMSAPI.Data.Seed;
using DMSAPI.Modules.User.Entities;
using Microsoft.AspNetCore.Identity;


namespace DMSAPI.Data;

public static class SeedRunner
{
    public static async Task RunAsync(IServiceProvider services)
    {
        var roleManager = services.GetRequiredService<RoleManager<IdentityRole<int>>>();
        var userManager = services.GetRequiredService<UserManager<AppUser>>();
        var context = services.GetRequiredService<DMSContext>();

        await RoleSeeder.SeedAsync(roleManager);
        await StaffSeeder.SeedAsync(context);
        await AdminSeeder.SeedAsync(userManager);
        await PermissionSeeder.SeedAsync(context);
    }
}