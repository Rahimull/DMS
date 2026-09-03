using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace DMS.Modules.Finances.Dtos;

public class ExpenseUpdateDto
{
    

    public int Id { get; set; }

    [Required]
    [MaxLength(150)]
    [Column("expense_name")]
    public string Name { get; set; } = null!;

}