using DMS.Modules.Staffs.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Modules.Staffs.Controllers;

[Route("api/[controller]")]
public class StaffController : BaseController<Staff>
{
    public StaffController(DMSContext context)
        : base(context)
    {
    }

    [HttpPost]
    public override async Task<IActionResult> Create([FromForm] Staff entity)
    {
        if (entity.PhotoFile != null)
        {
            using var ms = new MemoryStream();
            await entity.PhotoFile.CopyToAsync(ms);
            entity.Photo = ms.ToArray();
        }
        if (entity.ContractFileUpload != null)
        {
            using var ms = new MemoryStream();
            await entity.ContractFileUpload.CopyToAsync(ms);
            entity.ContractFile = ms.ToArray();
        }

        _db.Add(entity);
        await _context.SaveChangesAsync();
        return Ok(entity);
    }

    [HttpPut("{id}")]
    public override async Task<IActionResult> Update(
    int id,
    [FromForm] Staff entity)
    {
        var oldStaff = await _context.Staffs.FindAsync(id);

        if (oldStaff == null)
            return NotFound();


        oldStaff.FirstName = entity.FirstName;
        oldStaff.LastName = entity.LastName;
        oldStaff.Phone = entity.Phone;
        oldStaff.FamilyPhone1 = entity.FamilyPhone1;
        oldStaff.FamilyPhone2 = entity.FamilyPhone2;
        oldStaff.Address = entity.Address;
        oldStaff.Position = entity.Position;
        oldStaff.Salary = entity.Salary;


        if (entity.PhotoFile != null)
        {
            using var ms = new MemoryStream();
            await entity.PhotoFile.CopyToAsync(ms);
            oldStaff.Photo = ms.ToArray();
        }
        if (entity.ContractFileUpload != null)
        {
            using var ms = new MemoryStream();
            await entity.ContractFileUpload.CopyToAsync(ms);
            oldStaff.ContractFile = ms.ToArray();
        }


        await _context.SaveChangesAsync();

        return Ok(oldStaff);
    }
}