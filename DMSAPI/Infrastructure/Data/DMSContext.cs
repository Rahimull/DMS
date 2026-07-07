
using DMS.Modules.Appointments.Entities;
using DMS.Modules.Clinics.Entities;
using DMS.Modules.Finances.Entities;
using DMS.Modules.Inventory.Entities;
using DMS.Modules.Labs.Entities;
using DMS.Modules.Pharmacy.Entities;
using DMS.Modules.Patients.Entities;
using DMS.Modules.Staffs.Entities;
using DMS.Modules.Treatments.Entities;
using DMS.Modules.Xrays.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DMS.Persistence;

public class DMSContext : IdentityDbContext<ApplicationUser>
{
    public DMSContext(DbContextOptions<DMSContext> options)
        : base(options)
    {
    }

    #region Clinic
    public DbSet<Clinic> Clinics => Set<Clinic>();
    #endregion

    #region Staff
    public DbSet<Staff> Staffs => Set<Staff>();
    #endregion

    #region Patient
    public DbSet<Patient> Patients => Set<Patient>();
    #endregion

    #region Appointment
    public DbSet<Appointment> Appointments => Set<Appointment>();
    #endregion

    #region Service
    public DbSet<Service> Services => Set<Service>();
    public DbSet<ServiceRequirement> ServiceRequirements => Set<ServiceRequirement>();
    #endregion

    #region Treatment Plan
    public DbSet<TreatmentPlan> TreatmentPlans => Set<TreatmentPlan>();
    public DbSet<PlanService> PlanServices => Set<PlanService>();
    #endregion

    #region Patient Service
    public DbSet<PatientService> PatientServices => Set<PatientService>();
    #endregion

    #region Payment
    public DbSet<FeePayment> FeePayments => Set<FeePayment>();
    #endregion

    #region Xray
    public DbSet<PatientXray> PatientXrays => Set<PatientXray>();
    #endregion

    #region Condition
    public DbSet<Condition> Conditions => Set<Condition>();
    public DbSet<ConditionDetail> ConditionDetails => Set<ConditionDetail>();
    #endregion

    #region Retreatment
    public DbSet<Retreatment> Retreatments => Set<Retreatment>();
    #endregion

    #region Laboratory
    public DbSet<Lab> Labs => Set<Lab>();
    public DbSet<LabCase> LabCases => Set<LabCase>();
    public DbSet<LabPayment> LabPayments => Set<LabPayment>();
    #endregion

    #region Medical Supplies
    public DbSet<SupplyInventory> SupplyInventories => Set<SupplyInventory>();
    public DbSet<SupplySale> SupplySales => Set<SupplySale>();
    #endregion

    #region Pharmacy
    public DbSet<MedicineInventory> MedicineInventories => Set<MedicineInventory>();
    public DbSet<MedicineSale> MedicineSales => Set<MedicineSale>();
    #endregion

    #region Expenses
    public DbSet<Expense> Expenses => Set<Expense>();
    public DbSet<ExpenseDetail> ExpenseDetails => Set<ExpenseDetail>();
    public DbSet<ExpenseInvoice> ExpenseInvoices => Set<ExpenseInvoice>();
    #endregion

    #region Tax
    public DbSet<Tax> Taxes => Set<Tax>();
    public DbSet<TaxPayment> TaxPayments => Set<TaxPayment>();
    #endregion

    #region Revenue
    public DbSet<ClassRevenue> ClassRevenues => Set<ClassRevenue>();
    #endregion

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ApplyConfigurationsFromAssembly(typeof(DMSContext).Assembly);

        // Global Soft Delete Filter
        foreach (var entityType in builder.Model.GetEntityTypes())
        {
            if (typeof(DMS.Shared.Common.BaseEntity).IsAssignableFrom(entityType.ClrType))
            {
                var method = typeof(DMSContext)
                    .GetMethod(nameof(SetSoftDeleteFilter), System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static)!
                    .MakeGenericMethod(entityType.ClrType);

                method.Invoke(null, new object[] { builder });
            }
        }
    }

    private static void SetSoftDeleteFilter<TEntity>(ModelBuilder builder)
        where TEntity : DMS.Shared.Common.BaseEntity
    {
        builder.Entity<TEntity>().HasQueryFilter(x => !x.IsDeleted);
    }
}