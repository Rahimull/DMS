using DMS.Features.Dashboard.DTOs;
using DMS.Features.Dashboard.Services;
using Microsoft.AspNetCore.Mvc;

namespace DMS.Features.Dashboard.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DashboardController : ControllerBase
{
    private readonly IDashboardService _service;

    public DashboardController(
        IDashboardService service)
    {
        _service = service;
    }

    // =====================================================
    // GET: api/Dashboard/dashboard
    // =====================================================

    [HttpGet("dashboard")]
    public async Task<IActionResult>
        GetDashboard()
    {
        var result =
            await _service.GetDashboardAsync();

        return Ok(new
        {
            success = true,
            data = result
        });
    }

    // =====================================================
    // GET: api/Dashboard/stats
    // =====================================================

    [HttpGet("stats")]
    public async Task<IActionResult>
        GetStats()
    {
        var result =
            await _service.GetStatsAsync();

        return Ok(new
        {
            success = true,
            data = result
        });
    }

    // =====================================================
    // GET: api/Dashboard/revenue
    // =====================================================

    [HttpGet("revenue")]
    public async Task<IActionResult>
        GetRevenue()
    {
        var result =
            await _service.GetRevenueAsync();

        return Ok(new
        {
            success = true,
            data = result
        });
    }

    // =====================================================
    // GET: api/Dashboard/appointments
    // =====================================================

    [HttpGet("appointments")]
    public async Task<IActionResult>
        GetAppointments()
    {
        var result =
            await _service.GetAppointmentsAsync();

        return Ok(new
        {
            success = true,
            data = result
        });
    }

    // =====================================================
    // GET: api/Dashboard/recent-patients
    // =====================================================

    [HttpGet("recent-patients")]
    public async Task<IActionResult>
        GetRecentPatients()
    {
        var result =
            await _service.GetRecentPatientsAsync();

        return Ok(new
        {
            success = true,
            data = result
        });
    }

    // =====================================================
    // GET: api/Dashboard/recent-appointments
    // =====================================================

    [HttpGet("recent-appointments")]
    public async Task<IActionResult>
        GetRecentAppointments()
    {
        var result =
            await _service.GetRecentAppointmentsAsync();

        return Ok(new
        {
            success = true,
            data = result
        });
    }

    // =====================================================
    // GET: api/Dashboard/activities
    // =====================================================

    [HttpGet("activities")]
    public async Task<IActionResult>
        GetActivities()
    {
        var result =
            await _service.GetActivitiesAsync();

        return Ok(new
        {
            success = true,
            data = result
        });
    }
}