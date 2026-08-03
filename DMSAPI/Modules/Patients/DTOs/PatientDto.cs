namespace DMS.Modules.Patients.DTOs;
public class PatientDto
{
    public int Id { get; set; } // bew

    public int StaffId { get; set; }
    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? FatherName { get; set; }

    public string Gender { get; set; } = "مرد";

    public int Age { get; set; } = 1;

    public string? MaritalStatus { get; set; }

    public string? Phone { get; set; }

    public DateOnly? RegistrationDate { get; set; }

    public string? BloodGroup { get; set; }

    public string? Address { get; set; }

    public decimal DueAmount { get; set; }
    public decimal PaidAmount { get; set; }
}