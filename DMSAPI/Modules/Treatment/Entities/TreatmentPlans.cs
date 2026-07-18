using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Finances.Entities;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class TreatmentPlan : BaseEntity
{
    [Column("patient_ID")]
    public int? PatientId { get; set; }

    [Column("staff_ID")]
    public int? StaffId { get; set; }

    [Column("start_date")]
    public DateTime? StartDate { get; set; }

    [Column("end_date")]
    public DateTime? EndDate { get; set; }

    [Column("total_fee")]
    public decimal TotalFee { get; set; }=0;

    [Column("installments")]
    public int Installments { get; set; } = 1;

    [Column("round")]
    public int Round { get; set; } = 1;

    [MaxLength(50)]
    [Column("status")]
    public string? Status { get; set; }

    [Column("discount")]
    public decimal Discount { get; set; }=0;

    [MaxLength(1000)]
    [Column("notes")]
    public string? Notes { get; set; }

    [MaxLength(1000)]
    [Column("notification")]
    public string? Notification { get; set; }

    public Patient? Patient { get; set; }

    public Staff? Staff { get; set; }

    public ICollection<PatientService> PatientServices { get; set; } = new List<PatientService>();

    public ICollection<PlanService> PlanServices { get; set; } = new List<PlanService>();
    public ICollection<ConditionDetail> ConditionDetails { get; set; } = new List<ConditionDetail>();
    public ICollection<Retreatment> Retreatments { get; set; } = new List<Retreatment>();
     public ICollection<FeePayment> FeePayments { get; set; } = new List<FeePayment>();
}