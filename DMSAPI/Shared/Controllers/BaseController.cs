using DMS.Persistence;
using DMS.Shared.Common;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DMS.Models;

namespace DMS.Shared.Controllers;

[ApiController]
public abstract class BaseController<TEntity> : ControllerBase
    where TEntity : BaseEntity
{
    protected readonly DMSContext _context;
    protected readonly DbSet<TEntity> _db;

    protected BaseController(DMSContext context)
    {
        _context = context;
        _db = context.Set<TEntity>();
    }

    #region Get Paged

    [HttpPost("paged")]
    public virtual async Task<IActionResult> GetPaged([FromBody] QueryParams query)
    {
        IQueryable<TEntity> data = _db.AsNoTracking()
                                      .Where(x => !x.IsDeleted);

        // Search
        if (!string.IsNullOrWhiteSpace(query.Search?.SearchTerm))
        {
            var search = query.Search.SearchTerm.ToLower();

            data = data.Where(x =>
                EF.Property<string>(x, "Name").ToLower().Contains(search));
        }

        // Total Count
        var totalCount = await data.CountAsync();

        // Paging
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

    #region GetById

    [HttpGet("{id:int}")]
    public virtual async Task<IActionResult> GetById(int id)
    {
        var entity = await _db
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id && !x.IsDeleted);

        if (entity == null)
            return NotFound();

        return Ok(entity);
    }

    #endregion

    #region Create

    [HttpPost]
    public virtual async Task<IActionResult> Create([FromBody] TEntity entity)
    {
        await _db.AddAsync(entity);

        await _context.SaveChangesAsync();

        return Ok(entity);
    }

    #endregion

    #region Update

    [HttpPut("{id:int}")]
    public virtual async Task<IActionResult> Update(int id, [FromBody] TEntity entity)
    {
        if (id != entity.Id)
            return BadRequest();

        _db.Update(entity);

        await _context.SaveChangesAsync();

        return Ok(entity);
    }

    #endregion

    #region Delete

    [HttpDelete("{id:int}")]
    public virtual async Task<IActionResult> Delete(int id)
    {
        var entity = await _db.FindAsync(id);

        if (entity == null)
            return NotFound();

        entity.IsDeleted = true;

        await _context.SaveChangesAsync();

        return Ok();
    }

    #endregion
}