using DMS.Modules.Pharmacy.DTOs;
using DMS.Modules.Pharmacy.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Pharmacy.Controllers;

[Route("api/[controller]")]
public class PrescriptionController : BaseController<Prescription>
{
    public PrescriptionController(DMSContext context)
        : base(context)
    {
    }

    // ==========================================
    // CREATE PRESCRIPTION
    // ==========================================
    #region 
    [HttpPost("CreatePrescription")]
    public async Task<IActionResult> CreatePrescription([FromBody] PrescriptionCreateDto dto)
    {
        if (dto == null)
            return BadRequest("اطلاعات نسخه ارسال نشده است.");

        if (dto.PatientId <= 0)
            return BadRequest("مریض مشخص نشده است.");

        if (dto.StaffId <= 0)
            return BadRequest("داکتر مشخص نشده است.");

        if (dto.Items == null || dto.Items.Count == 0)
            return BadRequest("حداقل یک دوا باید انتخاب شود.");

        await using var transaction = await _context.Database.BeginTransactionAsync();

        try
        {
            // ==========================================
            // 1. Check Patient
            // ==========================================

            var patientExists = await _context.Patients
                .AnyAsync(x => x.Id == dto.PatientId);

            if (!patientExists)
                return NotFound("مریض موجود نیست.");


            // ==========================================
            // 2. Check Staff
            // ==========================================

            var staffExists = await _context.Staffs.AnyAsync(x => x.Id == dto.StaffId);

            if (!staffExists)
                return NotFound("داکتر موجود نیست.");

            // ==========================================
            // 3. Create Prescription
            // ==========================================

            var prescription = new Prescription
            {
                PatientId = dto.PatientId,
                StaffId = dto.StaffId,
                PrescriptionDate = dto.PrescriptionDate == default ? DateTime.UtcNow : dto.PrescriptionDate,
                Notes = ""
            };

            _context.Prescriptions.Add(prescription);

            await _context.SaveChangesAsync();

            // ==========================================
            // 4. Add Prescription Items
            // ==========================================

            foreach (var item in dto.Items)
            {
                var medicineExists = await _context.MedicineInventories
                    .AnyAsync(x => x.Id == item.MedicineInventoryId && !x.IsDeleted);

                if (!medicineExists)
                {
                    throw new Exception($"دوا با ID {item.MedicineInventoryId} موجود نیست.");
                }

                var prescriptionItem = new PrescriptionItem
                {
                    PrescriptionId = prescription.Id,
                    MedicineInventoryId = item.MedicineInventoryId,
                    Dosage = item.Dosage,
                    Frequency = item.Frequency,
                    Duration = item.Duration,
                    Route = item.Route,
                    Instructions = item.Instructions,
                    Quantity = item.Quantity,
                    Notes = item.Notes
                };
                prescription.Notes += prescriptionItem.Notes;

                _context.PrescriptionItems.Add(prescriptionItem);
            }

            await _context.SaveChangesAsync();

            // ==========================================
            // 5. Commit
            // ==========================================

            await transaction.CommitAsync();

            return Ok(new
            {
                success = true,
                message = "نسخه با موفقیت ثبت شد.",
                prescriptionId = prescription.Id
            });
        }
        catch (Exception ex)
        {
            await transaction.RollbackAsync();

            return BadRequest(new
            {
                success = false,
                message = ex.Message,
                innerException = ex.InnerException?.Message
            });
        }

    }
    #endregion


     #region Include Relations
    protected override IQueryable<Prescription> IncludeRelations(IQueryable<Prescription> query)
    {
        return query
            .Include(x => x.PrescriptionItem).ThenInclude(x=>x.MedicineInventory)
            .Include(x => x.Staff)
            .Include(x => x.Patient);
    }

    #endregion


}