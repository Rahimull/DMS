using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Shared.Common;

namespace DMS.Modules.Finances.Entities;

public class ClassRevenue : BaseEntity
{

    [MaxLength(100)]
    [Column("student_firstname")]
    public string? FirstName { get; set; }
    [MaxLength(100)]
    [Column("student_lastname")]
    public string? LastName { get; set; }
    [MaxLength(100)]
    [Column("student_fathername")]
    public string? FaterName { get; set; }
    [MaxLength(100)]
    [Column("teacher_fullname")]
    public string? TeacherFullName { get; set; }
    [MaxLength(100)]
    [Column("subject")]
    public string? Subject { get; set; }


    [Column("reg_date")]
    public DateOnly? RegisterDate { get; set; }


    [Column("total_fee")]
    public decimal TotalFee { get; set; }
    [Column("amount_received")]
    public decimal AmountReceived { get; set; }
    [Column("amount_due")]
    public decimal AmountDue { get; set; }

    [MaxLength(300)]
    [Column("notes")]
    public string? Notes { get; set; }


    [Column("invoice_ID")]
    public int InvoiceId { get; set; }
}