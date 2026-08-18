namespace DMS.Modules.Pharmacy.DTOs;

public class PrescriptionCreateDto
{
    public int PatientId { get; set; }

    public int StaffId { get; set; }

    public DateTime PrescriptionDate { get; set; }

    public string? Notes { get; set; }

    public List<PrescriptionItemCreateDto> Items { get; set; }
        = new();
}