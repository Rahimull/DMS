using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using DMSAPI.Modules.Auth.DTOs;
using DMSAPI.Modules.Auth.Services;
using DMSAPI.Modules.User.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DMSAPI.Modules.Auth.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly JwtService _jwtService;

    public AuthController(
        UserManager<AppUser> userManager,
        JwtService jwtService)
    {
        _userManager = userManager;
        _jwtService = jwtService;
    }

    // ==========================================
    // Login
    // ==========================================

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto dto)
    {
        var user = await _userManager.FindByNameAsync(dto.UserName);

        if (user == null ||
            !await _userManager.CheckPasswordAsync(user, dto.Password))
        {
            return Unauthorized("Invalid credentials");
        }

        if (!user.IsActive)
        {
            return Unauthorized("User is inactive");
        }

        var token = await _jwtService.GenerateToken(user);

        var roles = await _userManager.GetRolesAsync(user);

        return Ok(new
        {
            token,
            user = new
            {
                user.Id,
                user.FullName,
                user.UserName,
                user.Email,
                user.StaffId,
                user.IsActive,
                roles
            }
        });
    }


    // ==========================================
    // Current User
    // ==========================================

    [Authorize]
    [HttpGet("me")]
    public async Task<IActionResult> Me()
    {
        var userIdClaim =
            User.FindFirst(JwtRegisteredClaimNames.Sub)?.Value
            ?? User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        if (string.IsNullOrEmpty(userIdClaim))
            return Unauthorized();

        if (!int.TryParse(userIdClaim, out var userId))
            return Unauthorized();

        var user = await _userManager.FindByIdAsync(userId.ToString());

        if (user == null)
            return NotFound(new
            {
                message = "User not found"
            });

        if (!user.IsActive)
            return Unauthorized(new
            {
                message = "User is inactive"
            });

        var roles = await _userManager.GetRolesAsync(user);

        return Ok(new
        {
            id = user.Id,
            fullName = user.FullName,
            userName = user.UserName,
            email = user.Email,
            staffId = user.StaffId,
            isActive = user.IsActive,
            profileImage = user.ProfileImage,
            roles
        });
    }


    // ==========================================
    // Admin Test
    // ==========================================

    [Authorize(Roles = "Admin")]
    [HttpGet("admin-only")]
    public IActionResult AdminOnly()
    {
        return Ok("Welcome Admin");
    }
}