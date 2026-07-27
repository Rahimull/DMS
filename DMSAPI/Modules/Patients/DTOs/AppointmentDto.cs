namespace DMS.Modules.Patients.DTOs;
public class AppointmentDto
{
    public int? PatientId { get; set; }

    public int? ServiceId { get; set; }

    public int Installment { get; set; }

    public int Round { get; set; }

    public decimal Discount { get; set; }

    public decimal ServiceFee { get; set; }

    public decimal TotalFee { get; set; }

    public DateTime? MeetDate { get; set; }

    public int? StaffId { get; set; }

    public string? Status { get; set; }

    public string? Details { get; set; }
}