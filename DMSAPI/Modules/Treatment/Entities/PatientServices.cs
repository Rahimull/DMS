using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Appointments.Entities;
using DMS.Modules.Patients.Entities;

using DMS.Shared.Common;

namespace DMS.Modules.Treatments.Entities;

public class PatientService : BaseEntity
{
    [Column("pat_ID")]
    public int PatientId { get; set; }

    [Column("apt_ID")]
    public int? AppointmentId { get; set; }

    [Column("tp_ID")]
    public int? TreatmentPlanId { get; set; }

    [Column("service_ID")]
    public int ServiceId { get; set; }

    [Column("service_date")]
    public DateOnly ServiceDate { get; set; }

    [Column("qty")]
    public int Quantity { get; set; } = 1;

    [Column("fee")]
    public decimal Fee { get; set; }

    [Column("discount")]
    public decimal Discount { get; set; }

    [Column("paid")]
    public decimal Paid { get; set; }

    [Column("remaining")]
    public decimal Remaining { get; set; }

    public Patient Patient { get; set; } = null!;

    public Appointment? Appointment { get; set; }

    public TreatmentPlan? TreatmentPlan { get; set; }

    public Service Service { get; set; } = null!;
}