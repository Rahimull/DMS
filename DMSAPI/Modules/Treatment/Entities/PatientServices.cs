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

    [Column("ser_ID")]
    public int ServiceId { get; set; }
    [Column("req_ID")]
    public int ServiceRequirementId { get; set; }

    [Column("value")]
    public string Value { get; set; } = null!;


    public Patient? Patient { get; set; }

    public Appointment? Appointment { get; set; }

    public TreatmentPlan? TreatmentPlan { get; set; }

    public Service? Service { get; set; }
    public ServiceRequirement? ServiceRequirement { get; set; }
}