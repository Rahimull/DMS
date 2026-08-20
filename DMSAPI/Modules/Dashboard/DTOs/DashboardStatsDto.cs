namespace DMS.Features.Dashboard.DTOs;

public class DashboardStatsDto
{
    public decimal MonthlyRevenue { get; set; }

    public int TotalPatients { get; set; }

    public int MonthlyAppointments { get; set; }

    public int CompletedTreatments { get; set; }

    public decimal RevenueChange { get; set; }

    public decimal PatientChange { get; set; }

    public decimal AppointmentChange { get; set; }

    public decimal TreatmentChange { get; set; }
}
