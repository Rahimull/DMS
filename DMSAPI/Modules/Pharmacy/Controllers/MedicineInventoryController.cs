using DMS.Modules.Pharmacy.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using DMS.Modules.Pharmacy.DTOs;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Pharmacy.Controllers;

[Route("api/[controller]")]
public class MedicineInventoryController : BaseController<MedicineInventory>
{
    public MedicineInventoryController(DMSContext context)
        : base(context)
    {
    }


    [HttpPost("CreateMedicine")]
public async Task<IActionResult> CreateMedicine([FromBody] MedicineInventoryCreateDto dto)
{
    if (dto == null)
        return BadRequest("اطلاعات دوا ارسال نشده است.");

    if (string.IsNullOrWhiteSpace(dto.Name1))
        return BadRequest("نام دوا ضروری است.");

    if (dto.QtyInStock < 0)
        return BadRequest("مقدار موجودی نمی‌تواند منفی باشد.");

    if (dto.UnitPrice < 0)
        return BadRequest("قیمت دوا نمی‌تواند منفی باشد.");

    if (dto.ExpireDate.HasValue &&
        dto.IssueDate.HasValue &&
        dto.ExpireDate < dto.IssueDate)
    {
        return BadRequest("تاریخ انقضا نمی‌تواند قبل از تاریخ ورود باشد.");
    }

    var exists = await _context.MedicineInventories
    .AnyAsync(x => x.Name1 == dto.Name1 && !x.IsDeleted);

    if (exists)
        return Conflict("این دوا قبلاً ثبت شده است.");

    var medicine = new MedicineInventory
    {
        Name1 = dto.Name1,
        Name2 = dto.Name2,
        Type = dto.Type,
        Strength = dto.Strength,
        QtyInStock = dto.QtyInStock,
        IssueDate = dto.IssueDate,
        ExpireDate = dto.ExpireDate,
        Dosage = dto.Dosage,
        UnitPrice = dto.UnitPrice,
        Notes = dto.Notes
    };

    _context.MedicineInventories.Add(medicine);

    await _context.SaveChangesAsync();

    return Ok(new
    {
        success = true,
        message = "دوا با موفقیت ثبت شد.",
        data = medicine
    });
}
}