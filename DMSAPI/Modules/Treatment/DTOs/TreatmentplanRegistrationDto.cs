using DMS.Modules.Patients.DTOs;

namespace DMS.Modules.Treatments.DTOs;


public class TreatmentplanRegistrationsDto
{ 
    public PatientCreateDto Patient { get; set; } = new();
    public TreatmentplanDto Treatmentplan { get; set; } = new();

    public ConditionSectionDto Conditions { get; set; } = new();
    public List<PatientServiceDto> PatientServices { get; set; } = new();


    public PaymentDto Payment { get; set; } = new();
}