


using DMS.Modules.Appointments.Entities;
using DMS.Modules.Finances.Entities;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Treatments.Entities;

namespace DMS.Modules.Patients.Models;


public class PatientRegistration
{
    public Patient Patient { get; set; } = new();
    public Condition Conditions { get; set; } = new();
    public Service Services { get; set; } = new();
    public FeePayment Payment { get; set; } = new();
    public Appointment Appointment { get; set; } = new();
}