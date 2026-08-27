using DMSAPI.Modules.User.DTOs;
using DMSAPI.Modules.User.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using DMSAPI.Modules.User.Entities;
using DMS.Models;
using DMS.Persistence;
using Microsoft.EntityFrameworkCore;

namespace DMSAPI.Modules.User.Controllers;

[ApiController]
[Route("api/users")]
[Authorize(Roles = "Admin")]
public class UserController : ControllerBase
{
    private readonly IUserService _service;
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<IdentityRole<int>> _roleManager;
    private readonly DMSContext _context;
    private readonly DbSet<AppUser> _db;

    public UserController(
        IUserService service,
        UserManager<AppUser> userManager,
        RoleManager<IdentityRole<int>> roleManager,
        DMSContext context)
    {
        _service = service;
        _userManager = userManager;
        _roleManager = roleManager;
        _context = context;
        _db = context.Set<AppUser>();
    }

    #region  ================= GET ALL =================
    [HttpGet]
    public async Task<IActionResult> GetUsers([FromQuery] UserQueryParams query)
        => Ok(await _service.GetUsersAsync(query));
    #endregion

    #region     // ================= GET PAGED =================
    [HttpPost("paged")]
    public async Task<IActionResult> GetPaged([FromBody] QueryParams query)
    {
        IQueryable<AppUser> data = InludeRelations(_db.AsNoTracking());
        System.Console.WriteLine("App Users Data:   ", data);

        // SEARCH
        if (!string.IsNullOrWhiteSpace(query.Search?.SearchTerm))
        {
            data = ApplySearch(data, query.Search.SearchTerm);
        }

        // DEFAULT SORTING (lastest first)
        if (string.IsNullOrWhiteSpace(query.Sorting?.SortBy))
        {
            var createdAtProperty = typeof(AppUser).GetProperty("CreatedAt");

            if (createdAtProperty != null)
            {
                data = data.OrderByDescending(x => EF.Property<int>(x, "Id"));
            }
            else
            {
                data = data.OrderByDescending(x => EF.Property<int>(x, "Id"));
            }

        }

        // CUSTOM SORTING
        if (!string.IsNullOrWhiteSpace(query.Sorting?.SortBy))
        {
            data = ApplySorting(
                data,
                query.Sorting.SortBy,
                query.Sorting.IsDescending
            );
        }

        // TOTAL COUNT 
        var totalCount = await data.CountAsync();

        // PAGING
        var result = await data
            .Skip(query.Pagination.PageIndex * query.Pagination.PageSize)
            .Take(query.Pagination.PageSize)
            .ToListAsync();

        return Ok(new
        {
            success = true,
            data = new
            {
                data = result,
                totalCount
            }
        });


    }

    #endregion

    #region  ================= GET BY ID =================
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
        => Ok(await _service.GetByIdAsync(id));
    #endregion
    #region ================= CREATE =================
    [HttpPost]
    public async Task<IActionResult> Create(CreateUserDto dto)
    {
        await _service.CreateUserAsync(dto);
        return Ok("User created successfully");
    }
    #endregion
    #region  ================= UPDATE =================
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, UpdateUserDto dto)
    {
        await _service.UpdateUserAsync(id, dto);
        return Ok("User updated successfully");
    }
    #endregion
    #region  ================= DELETE =================
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _service.DeleteUserAsync(id);
        return Ok("User deleted successfully");
    }
    #endregion
    #region  ================= CHANGE STATUS =================
    [HttpPut("{id}/toggleStatus")]
    public async Task<IActionResult> ChangeStatus(int id)
    {
        var result = await _service.ChangeStatusAsync(id);
        return Ok(result);
    }
    #endregion
    #region  ================= GET USER ROLES =================
    [HttpGet("{id}/roles")]
    public async Task<IActionResult> GetUserRoles(int id)
    {
        var user = await _userManager.FindByIdAsync(id.ToString());
        if (user == null) return NotFound("User not found");

        var roles = await _userManager.GetRolesAsync(user);

        return Ok(roles);
    }
    #endregion
    #region  ================= ASSIGN ROLES =================
    [HttpPost("{id}/roles")]
    public async Task<IActionResult> AssignRoles(int id, [FromBody] AssignRoleDto dto)
    {
        var user = await _userManager.FindByIdAsync(id.ToString());
        if (user == null) return NotFound("User not found");

        var currentRoles = await _userManager.GetRolesAsync(user);

        await _userManager.RemoveFromRolesAsync(user, currentRoles);

        var roles = _roleManager.Roles
            .Where(r => dto.RoleIds.Contains(r.Id))
            .Select(r => r.Name!)
            .ToList();

        var result = await _userManager.AddToRolesAsync(user, roles);

        if (!result.Succeeded)
            return BadRequest(result.Errors);

        return Ok("Roles updated successfully");
    }
    #endregion

    #region ================= USER RELATION  =================
    protected IQueryable<AppUser> InludeRelations(IQueryable<AppUser> query)
    {
        return query;
    }

    #endregion

    #region Search
    protected IQueryable<AppUser> ApplySearch(IQueryable<AppUser> query, string search)
    {
        return query;
    }
    #endregion


    #region  Sortings
    protected IQueryable<AppUser> ApplySorting(
    IQueryable<AppUser> query,
    string sortBy,
    bool isDescending)
    {
        var property = typeof(AppUser)
            .GetProperties()
            .FirstOrDefault(p =>
                string.Equals(
                    p.Name,
                    sortBy,
                    StringComparison.OrdinalIgnoreCase
                ));

        if (property == null)
            return query;

        return isDescending
            ? query.OrderByDescending(x => EF.Property<object>(x, property.Name))
            : query.OrderBy(x => EF.Property<object>(x, property.Name));
    }


    #endregion


}