using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Appointments.Entities;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class Retreatment : BaseEntity
{
    [Column("pat_ID")]
    public int PatientId { get; set; }

    [Column("apt_ID")]
    public int AppointmentId { get; set; }

    [Column("help_service_ID")]
    public int HelpServiceId { get; set; }
    [Column("Damage_service_ID")]
    public int DamageServiceId { get; set; }

    [Column("staff_ID")]
    public int StaffId { get; set; }
    [Column("tp_ID")]
    public int TreatmentPlanId { get; set; }

    [Column("retreatment_date")]
    public DateOnly RetreatmentDate { get; set; }
    [Column("retreatment_cost")]
    public decimal RetreatmentCost { get; set; }
    [Column("retreatment_outcome")]
    public string RetreatmentOutcome { get; set; } = null!;

    [MaxLength(100)]
    [Column("reason")]
    public string? Reason { get; set; }

    [MaxLength(200)]
    [Column("outcome_details")]
    public string OutcomeDetails { get; set; } = null!;

    public Patient? Patient { get; set; }

    public Staff? Staff { get; set; }
    public Appointment? Appointment { get; set; }
    public Service? Service { get; set; }
    public TreatmentPlan? TreatmentPlan { get; set; }
}