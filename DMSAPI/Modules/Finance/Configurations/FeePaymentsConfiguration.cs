using DMS.Modules.Finances.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Finances.Configurations;

public class FeePaymentConfiguration : IEntityTypeConfiguration<FeePayment>
{
    public void Configure(EntityTypeBuilder<FeePayment> builder)
    {
        builder.ToTable("fee_payments");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("payment_ID");

        builder.Property(x => x.Amount)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.Discount)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.Remaining)
            .HasColumnType("decimal(18,2)");

        builder.HasOne(x => x.Appointment)
            .WithMany()
            .HasForeignKey(x => x.AppointmentId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.TreatmentPlan)
            .WithMany()
            .HasForeignKey(x => x.TreatmentPlanId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.Staff)
            .WithMany()
            .HasForeignKey(x => x.StaffId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}