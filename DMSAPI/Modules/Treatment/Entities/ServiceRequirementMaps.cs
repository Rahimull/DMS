
using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class ServiceRequirementMap : BaseEntity
{

    public int ServiceId { get; set; }

    public int ServiceRequirmentId { get; set; }

    public int DisplayOrder { get; set; }
    public bool IsRequired { get; set; } = false;
    public bool IsActive { get; set; } = true;

    // Navigation Properties
    public ServiceRequirement ServiceRequirement { get; set; } = null!;
    public Service Service { get; set; } = null!;
}