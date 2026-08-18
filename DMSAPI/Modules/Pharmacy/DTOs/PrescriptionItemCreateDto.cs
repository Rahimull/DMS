namespace DMS.Modules.Pharmacy.DTOs;

public class PrescriptionItemCreateDto
{
    public int MedicineInventoryId { get; set; }

    public string? Dosage { get; set; }

    public string? Frequency { get; set; }

    public string? Duration { get; set; }

    public string? Route { get; set; }

    public string? Instructions { get; set; }

    public decimal Quantity { get; set; }

    public string? Notes { get; set; }
}