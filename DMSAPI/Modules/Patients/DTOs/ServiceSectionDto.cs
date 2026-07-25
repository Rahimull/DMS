namespace DMS.Modules.Patients.DTOs;
public class ServiceSectionDto
{
    public AppointmentDto Appointment { get; set; } = new();

    public List<PatientServiceDto> PatientServices { get; set; } = new();
}