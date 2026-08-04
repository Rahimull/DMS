namespace DMS.Modules.Finances.DTOs;
public class FeePaymentCreateDto
{
    public int? AppointmentId { get; set; }

    public int? StaffId { get; set; }

    public DateTime PaymentDate { get; set; }

    public decimal? PaidAmount { get; set; }

    public int? InstallmentCounter { get; set; }
}