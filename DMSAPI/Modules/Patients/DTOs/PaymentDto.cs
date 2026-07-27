namespace DMS.Modules.Patients.DTOs;
public class PaymentDto
{
    public decimal TotalFee { get; set; }

    public decimal Discount { get; set; }

    public decimal PaidAmount { get; set; }
    public decimal DueAmount { get; set; }
}