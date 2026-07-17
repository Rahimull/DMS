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
            .HasColumnName("lab_payment_ID");


        builder.HasOne(x => x.LabCase)
            .WithMany(x => x.Payments)
            .HasForeignKey(x => x.LabCaseId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.Staff)
            .WithMany(x => x.Payments)
            .HasForeignKey(x => x.StaffId)
            .OnDelete(DeleteBehavior.Restrict);
        builder.HasOne(x => x.Lab)
            .WithMany(x => x.Payments)
            .HasForeignKey(x => x.LabId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}