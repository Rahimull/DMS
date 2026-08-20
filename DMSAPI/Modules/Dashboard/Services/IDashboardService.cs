using DMS.Features.Dashboard.DTOs;

namespace DMS.Features.Dashboard.Services;

public interface IDashboardService
{
    Task<DashboardDto> GetDashboardAsync();

    Task<DashboardStatsDto> GetStatsAsync();

    Task<List<RevenueDto>> GetRevenueAsync();

    Task<List<AppointmentStatusDto>> GetAppointmentsAsync();

    Task<List<RecentPatientDto>> GetRecentPatientsAsync();

    Task<List<RecentAppointmentDto>> GetRecentAppointmentsAsync();

    Task<List<ActivityDto>> GetActivitiesAsync();
}