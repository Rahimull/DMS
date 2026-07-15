using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class PlanService : BaseEntity
{
    [Column("tp_ID")]
    public int TreatmentPlanId { get; set; }

    [Column("service_ID")]
    public int ServiceId { get; set; }

    [Column("service_fee")]
    public decimal ServiceFee { get; set; }=0;

    [Column("total_fee")]
    public decimal TotalFee { get; set; }=0;

    public TreatmentPlan? TreatmentPlan { get; set; }

    public Service? Service { get; set; }
}