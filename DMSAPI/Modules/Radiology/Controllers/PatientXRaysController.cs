using AutoMapper;
using DMS.Modules.Xrays.Dtos;
using DMS.Modules.Xrays.Entities;
using DMS.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Radiology.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PatientXRayController : ControllerBase
{
    private readonly DMSContext _context;
    private readonly IMapper _mapper;
    private readonly IWebHostEnvironment _environment;

    public PatientXRayController(
        DMSContext context,
        IMapper mapper,
        IWebHostEnvironment environment)
    {
        _context = context;
        _mapper = mapper;
        _environment = environment;
    }

    // =========================================================
    // GET ALL
    // =========================================================

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var data = await _context.PatientXrays
            .Include(x => x.Patient)
            .ToListAsync();

        return Ok(_mapper.Map<List<PatientXrayDto>>(data));
    }

    // =========================================================
    // GET BY ID
    // =========================================================

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var entity = await _context.PatientXrays
            .Include(x => x.Patient)
            .FirstOrDefaultAsync(x => x.Id == id);

        if (entity == null)
            return NotFound();

        return Ok(_mapper.Map<PatientXrayDto>(entity));
    }

    // =========================================================
    // CREATE
    // =========================================================

    [HttpPost]
    public async Task<IActionResult> Create(
        [FromForm] PatientXrayCreateDto dto)
    {
        // بررسی بیمار
        var patientExists = await _context.Patients
            .AnyAsync(x => x.Id == dto.PatientId);

        if (!patientExists)
        {
            return BadRequest(new
            {
                message = $"Patient with Id {dto.PatientId} does not exist."
            });
        }

        // ایجاد Entity
        var entity = new PatientXray
        {
            PatientId = dto.PatientId,
            XrayName = dto.XrayName,
            Description = dto.Description
        };

        // ذخیره فایل
        if (dto.FilePath != null && dto.FilePath.Length > 0)
        {
            entity.FilePath = await SaveFile(dto.FilePath);
        }

        _context.PatientXrays.Add(entity);

        await _context.SaveChangesAsync();

        // دریافت مجدد همراه Patient
        var result = await _context.PatientXrays
            .Include(x => x.Patient)
            .FirstAsync(x => x.Id == entity.Id);

        return Ok(_mapper.Map<PatientXrayDto>(result));
    }

    // =========================================================
    // UPDATE
    // =========================================================

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(
        int id,
        [FromForm] PatientXrayUpdateDto dto)
    {
        // پیدا کردن رکورد
        var entity = await _context.PatientXrays
            .FirstOrDefaultAsync(x => x.Id == id);

        if (entity == null)
            return NotFound(new
            {
                message = $"X-Ray with Id {id} not found."
            });

        // بررسی بیمار
        var patientExists = await _context.Patients
            .AnyAsync(x => x.Id == dto.PatientId);

        if (!patientExists)
        {
            return BadRequest(new
            {
                message = $"Patient with Id {dto.PatientId} does not exist."
            });
        }

        // نگهداری مسیر فایل قبلی
        var oldFilePath = entity.FilePath;

        // بروزرسانی اطلاعات
        entity.PatientId = dto.PatientId;
        entity.XrayName = dto.XrayName;
        entity.Description = dto.Description;

        // اگر فایل جدید ارسال شده باشد
        if (dto.FilePath != null && dto.FilePath.Length > 0)
        {
            entity.FilePath = await SaveFile(dto.FilePath);

            // حذف فایل قبلی
            DeleteFile(oldFilePath);
        }

        await _context.SaveChangesAsync();

        // دریافت اطلاعات به‌روز همراه Patient
        var result = await _context.PatientXrays
            .Include(x => x.Patient)
            .FirstAsync(x => x.Id == entity.Id);

        return Ok(_mapper.Map<PatientXrayDto>(result));
    }

    // =========================================================
    // DELETE
    // =========================================================

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var entity = await _context.PatientXrays
            .FirstOrDefaultAsync(x => x.Id == id);

        if (entity == null)
            return NotFound();

        // حذف فایل
        DeleteFile(entity.FilePath);

        // حذف رکورد
        _context.PatientXrays.Remove(entity);

        await _context.SaveChangesAsync();

        return NoContent();
    }

    // =========================================================
    // SAVE FILE
    // =========================================================

    private async Task<string> SaveFile(IFormFile file)
    {
        var uploadPath = Path.Combine(
            _environment.ContentRootPath,
            "wwwroot",
            "uploads",
            "xrays"
        );

        Directory.CreateDirectory(uploadPath);

        var extension = Path.GetExtension(file.FileName);

        var fileName = $"{Guid.NewGuid()}{extension}";

        var physicalPath = Path.Combine(
            uploadPath,
            fileName
        );

        await using var stream = new FileStream(
            physicalPath,
            FileMode.Create
        );

        await file.CopyToAsync(stream);

        return $"/uploads/xrays/{fileName}";
    }

    // =========================================================
    // DELETE FILE
    // =========================================================

    private void DeleteFile(string? filePath)
    {
        if (string.IsNullOrWhiteSpace(filePath))
            return;

        var physicalPath = Path.Combine(
            _environment.ContentRootPath,
            "wwwroot",
            filePath.TrimStart('/')
                .Replace(
                    "/",
                    Path.DirectorySeparatorChar.ToString()
                )
        );

        if (System.IO.File.Exists(physicalPath))
        {
            System.IO.File.Delete(physicalPath);
        }
    }
}