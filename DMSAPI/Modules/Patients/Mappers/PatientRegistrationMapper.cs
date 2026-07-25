using DMS.Modules.Patients.DTOs;
using DMS.Modules.Patients.Entities;

namespace DMS.Modules.Patients.Mappers;

public static class PatientRegistrationMapper
{
    public static Patient ToPatient(this PatientDto dto)
    {
        return new Patient
        {
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            FatherName = dto.FatherName,
            Gender = dto.Gender,
            Age = dto.Age,
            MaritalStatus = dto.MaritalStatus,
            Phone = dto.Phone,
            RegistrationDate = DateOnly.FromDateTime(DateTime.Today),
            BloodGroup = dto.BloodGroup,
            Address = dto.Address
        };
    }
}