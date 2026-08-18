namespace DMS.Modules.Treatments.DTOs;
public class TreatmentplanDto
{
    public int? PatientId { get; set; }

    public int Installment { get; set; }

    public int Round { get; set; }

    public decimal Discount { get; set; }

    public decimal ServiceFee { get; set; }

    public decimal TotalFee { get; set; }

    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }

    public int? StaffId { get; set; }

    public string? Status { get; set; }

    public string? Details { get; set; }
}