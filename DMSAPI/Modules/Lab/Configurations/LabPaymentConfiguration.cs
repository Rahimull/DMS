using DMS.Modules.Labs.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Labs.Configurations;

public class LabPaymentConfiguration : IEntityTypeConfiguration<LabPayment>
{
    public void Configure(EntityTypeBuilder<LabPayment> builder)
    {
        builder.ToTable("lab_payments");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("payment_ID");

        builder.Property(x => x.Amount)
            .HasColumnType("decimal(18,2)");

        builder.HasOne(x => x.LabCase)
            .WithMany(x => x.Payments)
            .HasForeignKey(x => x.LabCaseId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.Staff)
            .WithMany()
            .HasForeignKey(x => x.StaffId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}