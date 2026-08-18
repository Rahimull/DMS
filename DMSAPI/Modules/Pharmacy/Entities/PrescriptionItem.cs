using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Pharmacy.Entities;

public class PrescriptionItem : BaseEntity
{
    [Column("prescription_id")]
    public int PrescriptionId { get; set; }

    [Column("medicine_inventory_id")]
    public int MedicineInventoryId { get; set; }

    [MaxLength(100)]
    [Column("dosage")]
    public string? Dosage { get; set; }

    [MaxLength(100)]
    [Column("frequency")]
    public string? Frequency { get; set; }

    [MaxLength(100)]
    [Column("duration")]
    public string? Duration { get; set; }

    [MaxLength(50)]
    [Column("route")]
    public string? Route { get; set; }

    [MaxLength(500)]
    [Column("instructions")]
    public string? Instructions { get; set; }

    [Column("quantity")]
    public decimal Quantity { get; set; }

    [MaxLength(500)]
    [Column("notes")]
    public string? Notes { get; set; }


    // Navigation
    public Prescription? Prescription { get; set; }

    public MedicineInventory? MedicineInventory { get; set; }

   
}