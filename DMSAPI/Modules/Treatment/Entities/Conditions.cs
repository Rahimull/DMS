using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class Condition : BaseEntity
{
    [Required]
    [MaxLength(150)]
    [Column("condition_name")]
    public string Name { get; set; } = null!;

    [MaxLength(500)]
    [Column("description")]
    public string? Description { get; set; }

    public ICollection<ConditionDetail> ConditionDetails { get; set; } = new List<ConditionDetail>();
}