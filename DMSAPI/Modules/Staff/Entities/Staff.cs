using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Clinics.Entities;
using DMS.Shared.Common;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Staffs.Entities;

[Index(nameof(Phone), IsUnique = true)]
[Index(nameof(TazkiraId), IsUnique = true)]
public class Staff : BaseEntity
{
    [Required, MaxLength(100)]
    [Column("firstname")]
    public string FirstName { get; set; } = null!;

    [Required, MaxLength(100)]
    [Column("lastname")]
    public string LastName { get; set; } = null!;

    [Column("hire_date")]
    public DateOnly? HireDate { get; set; }

    [MaxLength(100)]
    [Column("position")]
    public string? Position { get; set; }

    [Column("salary")]
    public decimal Salary { get; set; }

    [Column("prepayment")]
    public decimal Prepayment { get; set; }

    [Required, Phone, MaxLength(20)]
    [Column("phone")]
    public string Phone { get; set; } = null!;

    [Required, MaxLength(20)]
    [Column("family_phone1")]
    public string FamilyPhone1 { get; set; } = null!;

    [MaxLength(20)]
    [Column("family_phone2")]
    public string? FamilyPhone2 { get; set; }

    [MaxLength(30)]
    [Column("tazkira_ID")]
    public string? TazkiraId { get; set; }

    [Column("photo")]
    public byte[]? Photo { get; set; }

    [Column("contract_file")]
    public byte[]? ContractFile { get; set; }

    [MaxLength(500)]
    [Column("address")]
    public string? Address { get; set; }

    [MaxLength(20)]
    [Column("file_type")]
    public string? FileType { get; set; }

    // Navigation Properties

    public ICollection<Clinic> Clinics { get; set; } = new List<Clinic>();
}