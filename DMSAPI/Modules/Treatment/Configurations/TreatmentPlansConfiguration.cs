using DMS.Modules.Treatments.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Treatments.Configurations;

public class TreatmentPlanConfiguration : IEntityTypeConfiguration<TreatmentPlan>
{
    public void Configure(EntityTypeBuilder<TreatmentPlan> builder)
    {
        builder.ToTable("treatment_plans");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("tp_ID");

        builder.Property(x => x.TotalFee)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.Discount)
            .HasColumnType("decimal(18,2)");
         // Patient -> TreatmentPlans
        builder.HasOne(x => x.Patient)
            .WithMany(x => x.TreatmentPlans)
            .HasForeignKey(x => x.PatientId)
            .OnDelete(DeleteBehavior.SetNull);


        // Staff -> TreatmentPlans
        builder.HasOne(x => x.Staff)
            .WithMany(x => x.TreatmentPlans)
            .HasForeignKey(x => x.StaffId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}