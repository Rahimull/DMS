using DMS.Modules.Finances.DTOs;
using DMS.Modules.Finances.Entities;
using DMS.Persistence;
using DMS.Shared.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;

namespace DMS.Modules.Finances.Controllers;

[Route("api/[controller]")]
public class FeePaymentController : BaseController<FeePayment>
{
    public FeePaymentController(DMSContext context)
        : base(context)
    {
    }


    [HttpPost("createPayment")]
    public async Task<IActionResult> CreatePayment([FromBody] FeePaymentCreateDto dto)
    {
        var appointment = await _context.Appointments.Include(a => a.FeePayments).FirstOrDefaultAsync(a => a.Id == dto.AppointmentId);

        if(appointment == null) return BadRequest("Appointment not found");

        var previousPaid = appointment.FeePayments.Sum(x => x.PaidAmount ?? 0);

        var totalPaid = previousPaid + (dto.PaidAmount ?? 0);
        var dueAmount = appointment.TotalFee - totalPaid;
        var installmentCounter = appointment.FeePayments.Count + 1;

        if(dueAmount < 0) return BadRequest("مبلغ پرداخت بیشتر از باقی مانده است");

        var payment = new FeePayment
        {
            AppointmentId = dto.AppointmentId,
            StaffId = dto.StaffId,
            PaymentDate = DateTime.UtcNow,
            PaidAmount = dto.PaidAmount,
            InstallmentCounter = installmentCounter,
            DueAmount = dueAmount,
            WholeFeePaid = dueAmount == 0 ? 1: 0
        };

        _context.FeePayments.Add(payment);
        await _context.SaveChangesAsync();
        return Ok(payment);
    } 
}