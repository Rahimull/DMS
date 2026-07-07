using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class PlanService : BaseEntity
{
    [Column("tp_ID")]
    public int TreatmentPlanId { get; set; }

    [Column("service_ID")]
    public int ServiceId { get; set; }

    [Column("qty")]
    public int Quantity { get; set; } = 1;

    [Column("unit_price")]
    public decimal UnitPrice { get; set; }

    [Column("discount")]
    public decimal Discount { get; set; }

    [Column("total")]
    public decimal Total { get; set; }

    public TreatmentPlan TreatmentPlan { get; set; } = null!;

    public Service Service { get; set; } = null!;
}