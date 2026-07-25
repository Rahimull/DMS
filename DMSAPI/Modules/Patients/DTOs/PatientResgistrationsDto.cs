

namespace DMS.Modules.Patients.DTOs;

public class PatientRegistrationDto
{
    public PatientDto Patient { get; set; } = new();

    public ConditionSectionDto Conditions { get; set; } = new();

    public ServiceSectionDto Services { get; set; } = new();

    public PaymentDto Payment { get; set; } = new();
}