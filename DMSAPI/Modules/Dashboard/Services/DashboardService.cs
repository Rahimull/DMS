using DMS.Features.Dashboard.DTOs;
using DMS.Persistence;
using Microsoft.EntityFrameworkCore;

namespace DMS.Features.Dashboard.Services;

public class DashboardService : IDashboardService
{
    private readonly DMSContext _context;

    public DashboardService(DMSContext context)
    {
        _context = context;
    }

    // =====================================================
    // DASHBOARD
    // =====================================================

    public async Task<DashboardDto> GetDashboardAsync()
    {
        var stats = await GetStatsAsync();
        var revenue = await GetRevenueAsync();
        var appointments = await GetAppointmentsAsync();
        var recentPatients = await GetRecentPatientsAsync();
        var recentAppointments = await GetRecentAppointmentsAsync();
        var activities = await GetActivitiesAsync();

        return new DashboardDto
        {
            Stats = stats,
            Revenue = revenue,
            Appointments = appointments,
            RecentPatients = recentPatients,
            RecentAppointments = recentAppointments,
            Activities = activities
        };
    }

// =====================================================
// STATS
// =====================================================

public async Task<DashboardStatsDto> GetStatsAsync()
{
    var today = DateTime.Today;

    // Current month
    var startOfMonth = new DateTime(
        today.Year,
        today.Month,
        1);

    var startOfNextMonth = startOfMonth.AddMonths(1);

    // Revenue of current month
    var monthlyRevenue = await _context.FeePayments
        .Where(x =>
            x.PaymentDate >= startOfMonth &&
            x.PaymentDate < startOfNextMonth)
        .SumAsync(x => (decimal?)x.PaidAmount) ?? 0;

    // Total patients
    var totalPatients = await _context.Patients
        .CountAsync();

    // Appointments of current month
    var monthlyAppointments = await _context.Appointments
        .CountAsync(x =>
            x.MeetDate >= startOfMonth &&
            x.MeetDate < startOfNextMonth);

    // Completed treatments of current month
    var completedTreatments = await _context.Appointments
        .CountAsync(x =>
            x.Status == "Completed" &&
            x.MeetDate >= startOfMonth &&
            x.MeetDate < startOfNextMonth);

    return new DashboardStatsDto
    {
        MonthlyRevenue = monthlyRevenue,

        TotalPatients = totalPatients,

        MonthlyAppointments = monthlyAppointments,

        CompletedTreatments = completedTreatments,

        RevenueChange = 0,

        PatientChange = 0,

        AppointmentChange = 0,

        TreatmentChange = 0
    };
}

    // =====================================================
    // REVENUE
    // =====================================================

    public async Task<List<RevenueDto>> GetRevenueAsync()
    {
        var startDate = DateTime.Today.AddMonths(-5);

        var payments = await _context.FeePayments
            .Where(x =>
                x.PaymentDate >= startDate)
            .ToListAsync();

        var result = payments
            .GroupBy(x => new
            {
                x.PaymentDate.Year,
                x.PaymentDate.Month
            })
            .OrderBy(x => x.Key.Year)
            .ThenBy(x => x.Key.Month)
            .Select(x => new RevenueDto
            {
                Month = GetAfghanMonth(
                    x.Key.Month),

                Income = x.Sum(y => (decimal?)y.PaidAmount)
            })
            .ToList();

        return result;
    }

    // =====================================================
    // APPOINTMENT STATUS
    // =====================================================

public async Task<List<AppointmentStatusDto>> GetAppointmentsAsync()
{
    var currentYear = DateTime.Today.Year;

    var startOfLastYear = new DateTime(currentYear - 1, 1, 1);
    var startOfNextYear = new DateTime(currentYear + 1, 1, 1);

    var appointments = await _context.Appointments
        .Where(x =>
            x.MeetDate >= startOfLastYear &&
            x.MeetDate < startOfNextYear)
        .ToListAsync();

    return appointments
        .GroupBy(x => x.Status)
        .Select(x => new AppointmentStatusDto
        {
            Name = GetAppointmentStatusName(x.Key),
            Value = x.Count()
        })
        .ToList();
}

    // =====================================================
    // RECENT PATIENTS
    // =====================================================

    public async Task<List<RecentPatientDto>> GetRecentPatientsAsync()
    {
        return await _context.Patients
            .OrderByDescending(x => x.CreatedAt)
            .Take(5)
            .Select(x => new RecentPatientDto
            {
                Id = x.Id,

                FirstName = x.FirstName,

                LastName = x.LastName,

                Phone = x.Phone,

                Status = x.IsDeleted
                    ? "Inactive"
                    : "Active",

                CreatedAt = x.CreatedAt
            })
            .ToListAsync();
    }

    // =====================================================
    // RECENT APPOINTMENTS
    // =====================================================

    public async Task<List<RecentAppointmentDto>>
        GetRecentAppointmentsAsync()
    {
        return await _context.Appointments
            .Include(x => x.Patient)
            .Include(x => x.Staff)
            .OrderByDescending(x => x.MeetDate)
            .Take(5)
            .Select(x => new RecentAppointmentDto
            {
                Id = x.Id,
                Patient = x.Patient.FirstName + " " + x.Patient.LastName,
                Doctor = x.Staff != null ? x.Staff.FirstName + " " + x.Staff.LastName : string.Empty,
                MeetDate = x.MeetDate,

                Status = x.Status
            })
            .ToListAsync();
    }

    // =====================================================
    // ACTIVITIES
    // =====================================================

    public async Task<List<ActivityDto>>
        GetActivitiesAsync()
    {
        var activities = new List<ActivityDto>();

        var patients = await _context.Patients
            .OrderByDescending(x => x.CreatedAt)
            .Take(5)
            .Select(x => new ActivityDto
            {
                Id = x.Id,

                Type = "patient",

                Title = "بیمار جدید ثبت شد",

                Description =
                    x.FirstName +
                    " " +
                    x.LastName,

                CreatedAt = x.CreatedAt
            })
            .ToListAsync();

        activities.AddRange(patients);

        return activities
            .OrderByDescending(x => x.CreatedAt)
            .Take(10)
            .ToList();
    }

    // =====================================================
    // HELPERS
    // =====================================================

    private static string GetAfghanMonth(
        int month)
    {
        return month switch
        {
            1 => "حمل",
            2 => "ثور",
            3 => "جوزا",
            4 => "سرطان",
            5 => "اسد",
            6 => "سنبله",
            7 => "میزان",
            8 => "عقرب",
            9 => "قوس",
            10 => "جدی",
            11 => "دلو",
            12 => "حوت",
            _ => "-"
        };
    }

    private static string GetAppointmentStatusName(
        string? status)
    {
        return status?.ToLower() switch
        {
            "completed" => "تکمیل شده",

            "pending" => "در انتظار",

            "inprogress" => "در حال درمان",

            "cancelled" => "لغو شده",

            _ => status ?? "-"
        };
    }
}