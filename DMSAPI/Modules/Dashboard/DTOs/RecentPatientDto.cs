namespace DMS.Features.Dashboard.DTOs;

public class RecentPatientDto
{
    public int Id { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; } 

    public string? Phone { get; set; }

    public string? Status { get; set; }

    public DateTime? CreatedAt { get; set; }
}