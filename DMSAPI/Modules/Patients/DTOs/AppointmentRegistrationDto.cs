namespace DMS.Modules.Patients.DTOs;


public class AppointmentRegistrationsDto
{
    public AppointmentDto Appointment { get; set; } = new();

    public ConditionSectionDto Conditions { get; set; } = new();

    public ServiceSectionDto Services { get; set; } = new();

    public PaymentDto Payment { get; set; } = new();
}