namespace DMS.Shared.Common;

public abstract class BaseEntity
{
     // Primary Key
    public int Id { get; set; } = default;

    // Automatically set on insert
    public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;

    //  Soft Delete Flag
    public bool IsDeleted { get; set; } = false;
}