using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Pharmacy.Entities;

public class Prescription : BaseEntity
{
    public int PatientId { get; set; }
 
    public int StaffId { get; set; }

    public DateTime PrescriptionDate { get; set; }

    [MaxLength(500)]
    public string? Notes { get; set; }

    // Navigation
    public Patient? Patient { get; set; }

    public Staff? Staff { get; set; }

    public ICollection<PrescriptionItem> PrescriptionItem { get; set; }
        = new List<PrescriptionItem>();
}