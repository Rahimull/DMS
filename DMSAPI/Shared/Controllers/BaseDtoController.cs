using AutoMapper;
using DMS.Persistence;
using DMS.Shared.Common;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DMS.Models;

namespace DMS.Shared.Controllers;

[ApiController]
public abstract class BaseDtoController<TDto, TCreateDto, TUpdateDto, TEntity>
    : ControllerBase
    where TEntity : BaseEntity
    where TDto : class
    where TCreateDto : class
    where TUpdateDto : class
{
    protected readonly DMSContext _context;
    protected readonly DbSet<TEntity> _db;
    protected readonly IMapper _mapper;

    protected BaseDtoController(
        DMSContext context,
        IMapper mapper)
    {
        _context = context;
        _db = context.Set<TEntity>();
        _mapper = mapper;
    }


    #region Get Paged

    [HttpPost("paged")]
    public virtual async Task<IActionResult> GetPaged(
        [FromBody] QueryParams query)
    {
        IQueryable<TEntity> data =
            IncludeRelations(
                _db.AsNoTracking()
                   .Where(x => !x.IsDeleted)
            );

        // Search
        if (!string.IsNullOrWhiteSpace(query.Search?.SearchTerm))
        {
            data = ApplySearch(
                data,
                query.Search.SearchTerm
            );
        }

        // Default Sorting
        if (string.IsNullOrWhiteSpace(query.Sorting?.SortBy))
        {
            data = data.OrderByDescending(
                x => EF.Property<int>(x, "Id")
            );
        }

        // Custom Sorting
        if (!string.IsNullOrWhiteSpace(query.Sorting?.SortBy))
        {
            data = ApplySorting(
                data,
                query.Sorting.SortBy,
                query.Sorting.IsDescending
            );
        }

        // Total Count
        var totalCount = await data.CountAsync();

        // Paging
        var entities = await data
            .Skip(
                query.Pagination.PageIndex *
                query.Pagination.PageSize
            )
            .Take(query.Pagination.PageSize)
            .ToListAsync();

        // ENTITY → DTO
        var result = _mapper.Map<List<TDto>>(entities);

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


    #region Get By Id

    [HttpGet("{id:int}")]
    public virtual async Task<IActionResult> GetById(int id)
    {
        var entity = await IncludeRelations(_db.AsNoTracking())
            .FirstOrDefaultAsync(
                x => x.Id == id && !x.IsDeleted
            );

        if (entity == null)
            return NotFound();

        // ENTITY → DTO
        var dto = _mapper.Map<TDto>(entity);

        return Ok(dto);
    }

    #endregion


    #region Get All

    [HttpGet("getAll")]
    public virtual async Task<IActionResult> GetAll()
    {
        var entities = await IncludeRelations(
                _db.AsNoTracking()
                   .Where(x => !x.IsDeleted)
            )
            .ToListAsync();

        // ENTITY → DTO
        var result = _mapper.Map<List<TDto>>(entities);

        return Ok(result);
    }

    #endregion


    #region Create

    [HttpPost]
    public virtual async Task<IActionResult> Create(
        [FromBody] TCreateDto dto)
    {
        // CREATE DTO → ENTITY
        var entity = _mapper.Map<TEntity>(dto);

        await _db.AddAsync(entity);
        await _context.SaveChangesAsync();

        // ENTITY → DTO
        var result = _mapper.Map<TDto>(entity);

        return Ok(result);
    }

    #endregion


    #region Update

    [HttpPut("{id:int}")]
    public virtual async Task<IActionResult> Update(
        int id,
        [FromBody] TUpdateDto dto)
    {
        var entity = await _db.FindAsync(id);

        if (entity == null || entity.IsDeleted)
            return NotFound();

        // UPDATE DTO → EXISTING ENTITY
        _mapper.Map(dto, entity);

        await _context.SaveChangesAsync();

        // ENTITY → DTO
        var result = _mapper.Map<TDto>(entity);

        return Ok(result);
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


    #region Search

    protected virtual IQueryable<TEntity> ApplySearch(
        IQueryable<TEntity> query,
        string search)
    {
        return query;
    }

    #endregion


    #region Sorting

    protected virtual IQueryable<TEntity> ApplySorting(
        IQueryable<TEntity> query,
        string sortBy,
        bool isDescending)
    {
        var property = typeof(TEntity)
            .GetProperties()
            .FirstOrDefault(p =>
                string.Equals(
                    p.Name,
                    sortBy,
                    StringComparison.OrdinalIgnoreCase
                )
            );

        if (property == null)
            return query;

        return isDescending
            ? query.OrderByDescending(
                x => EF.Property<object>(x, property.Name)
            )
            : query.OrderBy(
                x => EF.Property<object>(x, property.Name)
            );
    }

    #endregion


    #region Include Relations

    protected virtual IQueryable<TEntity> IncludeRelations(
        IQueryable<TEntity> query)
    {
        return query;
    }

    #endregion
}