namespace DMS.Features.Dashboard.DTOs;

public class RecentAppointmentDto
{
    public int Id { get; set; }

    public string Patient { get; set; } = string.Empty;

    public string Doctor { get; set; } = string.Empty;

    public DateTime? MeetDate { get; set; }

    public string? Status { get; set; } = string.Empty;
}