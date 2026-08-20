
using DMS.Modules.Staffs.Entities;
using DMS.Persistence;
using Microsoft.EntityFrameworkCore;

namespace DMSAPI.Data.Seed;

public static class StaffSeeder
{
    public static async Task SeedAsync(DMSContext context)
    {
        if (await context.Staffs.AnyAsync())
            return;

        var staffs = new List<Staff>
        {
            new Staff { Position = "Administration" },
            new Staff { Position = "Reception" },
            new Staff { Position = "Pharmacy" },
            new Staff { Position = "Laboratory" },
            new Staff { Position = "Radiology" },
            new Staff { Position = "Nursing" },
            new Staff { Position = "Finance" },
            new Staff { Position = "Store" }
        };

        await context.Staffs.AddRangeAsync(staffs);
        await context.SaveChangesAsync();
    }
}