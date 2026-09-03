namespace DMS.Modules.Finances.Dtos;

public class ExpenseDto
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;
    public DateTime CreatedAt { get; set; }

}