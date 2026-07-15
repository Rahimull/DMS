using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class ServiceRequirement : BaseEntity
{

    [Required]
    [MaxLength(200)]
    [Column("req_name")]
    public string RequirmentName { get; set; } = null!;


    // Navigaton property
   public ICollection<PatientService> PatientServices { get; set; } = new List<PatientService>();

}