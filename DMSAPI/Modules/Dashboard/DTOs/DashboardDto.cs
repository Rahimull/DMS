namespace DMS.Features.Dashboard.DTOs;

public class DashboardDto
{
    public DashboardStatsDto Stats { get; set; } = new();

    public List<RevenueDto> Revenue { get; set; } = [];

    public List<AppointmentStatusDto> Appointments { get; set; } = [];

    public List<RecentPatientDto> RecentPatients { get; set; } = [];

    public List<RecentAppointmentDto> RecentAppointments { get; set; } = [];

    public List<ActivityDto> Activities { get; set; } = [];
}