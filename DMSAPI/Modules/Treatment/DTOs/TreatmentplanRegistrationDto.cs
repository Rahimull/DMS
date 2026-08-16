using DMS.Modules.Patients.DTOs;

namespace DMS.Modules.Treatments.DTOs;


public class TreatmentplanRegistrationsDto
{
    public TreatmentplanDto Treatmentplan { get; set; } = new();

    public ConditionSectionDto Conditions { get; set; } = new();

    public ServiceSectionDto Services { get; set; } = new();

    public PaymentDto Payment { get; set; } = new();
}