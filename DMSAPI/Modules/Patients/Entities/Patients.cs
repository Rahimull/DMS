using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Staffs.Entities;
using DMS.Shared.Common;
using Microsoft.EntityFrameworkCore;

namespace DMS.Modules.Patients.Entities;

[Index(nameof(FileId), IsUnique = true)]
[Index(nameof(Phone))]
public class Patient : BaseEntity
{
    [MaxLength(50)]
    [Column("file_ID")]
    public string? FileId { get; set; }

    [Column("cust_pat_ID")]
    public int? CustomerPatientId { get; set; }

    [Required]
    [Column("staff_ID")]
    public int StaffId { get; set; }

    [MaxLength(100)]
    [Column("firstname")]
    public string? FirstName { get; set; }

    [MaxLength(100)]
    [Column("fathername")]
    public string? FatherName { get; set; }

    [MaxLength(100)]
    [Column("lastname")]
    public string? LastName { get; set; }

    [Required]
    [MaxLength(10)]
    [Column("sex")]
    public string Gender { get; set; } = null!;

    [Column("age")]
    public int Age { get; set; }

    [MaxLength(30)]
    [Column("marital_status")]
    public string? MaritalStatus { get; set; }

    [Phone]
    [MaxLength(20)]
    [Column("phone")]
    public string? Phone { get; set; }

    [Required]
    [Column("reg_date")]
    public DateOnly RegistrationDate { get; set; }

    [MaxLength(10)]
    [Column("blood_group")]
    public string? BloodGroup { get; set; }

    [MaxLength(500)]
    [Column("address")]
    public string? Address { get; set; }

    [Column("photo")]
    public byte[]? Photo { get; set; }

    [MaxLength(200)]
    [Column("sponsor_by")]
    public string? SponsorBy { get; set; }

    // Navigation Property

    public Staff Staff { get; set; } = null!;
}