using DMS.Modules.Finances.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Finances.Configurations;

public class TaxPaymentConfiguration : IEntityTypeConfiguration<TaxPayment>
{
    public void Configure(EntityTypeBuilder<TaxPayment> builder)
    {
        builder.ToTable("tax_payments");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("payment_ID");

        builder.Property(x => x.Amount)
            .HasColumnType("decimal(18,2)");

        builder.HasOne(x => x.Tax)
            .WithMany(x => x.Payments)
            .HasForeignKey(x => x.TaxId);

        builder.HasOne(x => x.Staff)
            .WithMany()
            .HasForeignKey(x => x.StaffId);
    }
}