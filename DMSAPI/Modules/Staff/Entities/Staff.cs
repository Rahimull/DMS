using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DMS.Modules.Appointments.Entities;
using DMS.Modules.Finances.Entities;
using DMS.Modules.Inventory.Entities;
using DMS.Modules.Labs.Entities;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Pharmacy.Entities;
using DMS.Modules.Treatments.Entities;
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
    public decimal? Salary { get; set; }

    [Column("prepayment")]
    public decimal? Prepayment { get; set; }

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

    [NotMapped]
    public IFormFile? PhotoFile { get; set; }

    [Column("contract_file")]
    public byte[]? ContractFile { get; set; }

    [NotMapped]
    public IFormFile? ContractFileUpload { get; set; }

    [MaxLength(500)]
    [Column("address")]
    public string? Address { get; set; }

    [MaxLength(20)]
    [Column("file_type")]
    public string? FileType { get; set; }

    // Navigation Properties

    public ICollection<TreatmentPlan> TreatmentPlans { get; set; } = new List<TreatmentPlan>();
    public ICollection<Patient> Patients { get; set; } = new List<Patient>();

     public ICollection<Retreatment> Retreatments { get; set; } = new List<Retreatment>();

      public ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
      public ICollection<LabCase> LabCases { get; set; } = new List<LabCase>();

       public ICollection<LabPayment> Payments { get; set; } = new List<LabPayment>();

        public ICollection<FeePayment> FeePayments { get; set; } = new List<FeePayment>();

        public ICollection<TaxPayment> TaxPayments { get; set; } = new List<TaxPayment>();


        public ICollection<MedicineSale> MedicineSales { get; set; } = new List<MedicineSale>();
        public ICollection<ExpenseDetail> ExpenseDetails { get; set; } = new List<ExpenseDetail>();
        public ICollection<ExpenseInvoice> ExpenseInvoices { get; set; } = new List<ExpenseInvoice>();
        public ICollection<SupplySale> SupplySales { get; set; } = new List<SupplySale>();
       
}