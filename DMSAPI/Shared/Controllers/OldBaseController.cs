using DMS.Persistence;
using DMS.Shared.Common;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DMS.Shared.Controllers;

[ApiController]
public abstract class OldBaseController<TEntity> : ControllerBase
    where TEntity : BaseEntity
{
    protected readonly DMSContext _context;
    protected readonly DbSet<TEntity> _db;

    protected OldBaseController(DMSContext context)
    {
        _context = context;
        _db = context.Set<TEntity>();
    }

    [HttpGet]
    public virtual async Task<IActionResult> GetAll()
    {
        return Ok(await _db.ToListAsync());
    }

    [HttpGet("{id:int}")]
    public virtual async Task<IActionResult> GetById(int id)
    {
        var entity = await _db.FindAsync(id);

        if (entity == null)
            return NotFound();

        return Ok(entity);
    }

    [HttpPost]
    public virtual async Task<IActionResult> Create(TEntity entity)
    {
        await _db.AddAsync(entity);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = entity.Id }, entity);
    }

    [HttpPut("{id:int}")]
    public virtual async Task<IActionResult> Update(int id, TEntity entity)
    {
        if (id != entity.Id)
            return BadRequest();

        _db.Update(entity);

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id:int}")]
    public virtual async Task<IActionResult> Delete(int id)
    {
        var entity = await _db.FindAsync(id);

        if (entity == null)
            return NotFound();

        entity.IsDeleted = true;

        await _context.SaveChangesAsync();

        return NoContent();
    }
}