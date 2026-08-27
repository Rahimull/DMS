using DMS.Models;
using DMS.Persistence;
using DMSAPI.Modules.User.DTOs;
using DMSAPI.Modules.User.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMSAPI.Modules.User.Controllers;

[ApiController]
[Route("api/Roles")]
[Authorize(Roles = "Admin")]
public class RolesController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<IdentityRole<int>> _roleManager;
    private readonly DMSContext _context;
        private readonly DbSet<IdentityRole<int>> _db;

    public RolesController(
        RoleManager<IdentityRole<int>> roleManager,
        UserManager<AppUser> userManager,
        DMSContext context)
    {
        _roleManager = roleManager;
        _userManager = userManager;
        _context = context;
        _db=context.Set<IdentityRole<int>>();
    }




    #region     // ================= GET PAGED =================
    [HttpPost("paged")]
    public async Task<IActionResult> GetPaged([FromBody] QueryParams query)
    {
        IQueryable<IdentityRole<int>> data = _db.AsNoTracking();
        System.Console.WriteLine("App Users Data:   ", data);

        // SEARCH
        if (!string.IsNullOrWhiteSpace(query.Search?.SearchTerm))
        {
            data = ApplySearch(data, query.Search.SearchTerm);
        }

        // DEFAULT SORTING (lastest first)
        if (string.IsNullOrWhiteSpace(query.Sorting?.SortBy))
        {
            var createdAtProperty = typeof(IdentityRole<int>).GetProperty("CreatedAt");

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

        System.Console.WriteLine("============== User Count ==============");
        System.Console.WriteLine(totalCount);

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

    // ================= GET ALL =================
    [HttpGet("GetAll")]
    public async Task<IActionResult> GetRoles()
    {
        var roles = await _roleManager.Roles
            .AsNoTracking()
            .ToListAsync();

        var result = new List<RoleDto>();
        foreach(var role in roles)
        {
            var users = await _userManager
                .GetUsersInRoleAsync(role.Name!);
            result.Add(new RoleDto
            {
                Id = role.Id,
                Name = role.Name ?? "",
                UserCount = users.Count
            });
        }
        return Ok(result);
    }

    // ================= GET BY ID =================
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var role = await _roleManager.FindByIdAsync(id.ToString());

        if (role == null)
            return NotFound();

        var users = await _userManager.GetUsersInRoleAsync(role.Name!);

        return Ok(new RoleDto
        {
            Id = role.Id,
            Name = role.Name ?? "",
            UserCount = users.Count
        });
    }

    // ================= CREATE =================
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateRoleDto dto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        if (await _roleManager.RoleExistsAsync(dto.Name))
            return BadRequest("Role already exists");

        var result = await _roleManager.CreateAsync(
            new IdentityRole<int> { Name = dto.Name });

        if (!result.Succeeded)
            return BadRequest(result.Errors);

        return Ok("Role created successfully");
    }

    // ================= UPDATE =================
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] UpdateRoleDto dto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var role = await _roleManager.FindByIdAsync(id.ToString());

        if (role == null)
            return NotFound();

        var existingRole = await _roleManager.FindByNameAsync(dto.Name);

        if (existingRole != null && existingRole.Id != id)
            return BadRequest("Role name already exists");

        role.Name = dto.Name;

        var result = await _roleManager.UpdateAsync(role);

        if (!result.Succeeded)
            return BadRequest(result.Errors);

        return Ok("Role updated successfully");
    }

    // ================= DELETE =================
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var role = await _roleManager.FindByIdAsync(id.ToString());

        if (role == null)
            return NotFound();

        var users = await _userManager.GetUsersInRoleAsync(role.Name!);

        if (users.Any())
            return BadRequest("Cannot delete role because users are assigned");

        var result = await _roleManager.DeleteAsync(role);

        if (!result.Succeeded)
            return BadRequest(result.Errors);

        return Ok("Role deleted successfully");
    }

    // ================= ASSIGN ROLE TO USER =================
    [HttpPost("assign")]
    public async Task<IActionResult> AssignRoles([FromBody] AssignRoleDto dto)
    {
        var user = await _userManager.FindByIdAsync(dto.UserId.ToString());

        if (user == null)
            return NotFound("User not found");

        // remove all current roles
        var currentRoles = await _userManager.GetRolesAsync(user);
        await _userManager.RemoveFromRolesAsync(user, currentRoles);

        // get role names from ids
        var roles = _roleManager.Roles
            .Where(r => dto.RoleIds.Contains(r.Id))
            .Select(r => r.Name!)
            .ToList();

        // assign new roles
        await _userManager.AddToRolesAsync(user, roles);

        return Ok("Roles updated successfully");
    }
    // ================= ASSIGN PERMISSIONS TO ROLE =================
    [HttpPost("{id}/permissions")]
    public async Task<IActionResult> AssignPermissions(int id, [FromBody] AssignPermissionsDto dto)
    {
        if (id != dto.RoleId)
            return BadRequest("Role mismatch");

        var oldPermissions = _context.RolePermissions
            .Where(x => x.RoleId == id);

        _context.RolePermissions.RemoveRange(oldPermissions);

        var newPermissions = dto.PermissionIds.Select(pid => new RolePermission
        {
            RoleId = id,
            PermissionId = pid
        });

        await _context.RolePermissions.AddRangeAsync(newPermissions);
        await _context.SaveChangesAsync();

        return Ok("Permissions updated successfully");
    }

    // ================= GET ROLE PERMISSIONS =================
    [HttpGet("{id}/permissions")]
    public async Task<IActionResult> GetRolePermissions(int id)
    {
        var permissions = await _context.RolePermissions
            .Where(x => x.RoleId == id)
            .Select(x => x.PermissionId)
            .ToListAsync();

        System.Console.WriteLine("============= Permissions ================");
        System.Console.WriteLine(permissions);

        return Ok(permissions);
    }



    #region ================= USER RELATION  =================
    protected IQueryable<IdentityRole> InludeRelations(IQueryable<IdentityRole> query)
    {
        return query;
    }

    #endregion

    #region Search
    protected IQueryable<IdentityRole<int>> ApplySearch(IQueryable<IdentityRole<int>> query, string search)
    {
        return query.Where(x => x.Name != null && x.Name.Contains(search));
    }
    #endregion


    #region  Sortings
    protected IQueryable<IdentityRole<int>> ApplySorting(
        IQueryable<IdentityRole<int>> query,
        string sortBy,
        bool isDescending)
    {
        return sortBy.ToLower() switch
        {
            "id" => isDescending
                ? query.OrderByDescending(x => x.Id)
                : query.OrderBy(x => x.Id),

            "name" => isDescending
                ? query.OrderByDescending(x => x.Name)
                : query.OrderBy(x => x.Name),

            _ => query.OrderByDescending(x => x.Id)
        };
    }


    #endregion




}