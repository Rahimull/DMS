using DMS.Modules.Finances.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Finances.Configurations;

public class TaxPaymentConfiguration : IEntityTypeConfiguration<TaxPayment>
{
    public void Configure(EntityTypeBuilder<TaxPayment> builder)
    {
        builder.ToTable("tax_pay_ID");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("payment_ID");

        builder.Property(x => x.Amount)
            .HasColumnType("decimal(18,2)");

        builder.HasOne(x => x.Taxes)
            .WithMany(x => x.TaxPayments)
            .HasForeignKey(x => x.TaxesId)
            .OnDelete(DeleteBehavior.Restrict);
        builder.HasOne(x => x.Staff)
            .WithMany(x => x.TaxPayments)
            .HasForeignKey(x => x.PaidBy)
            .OnDelete(DeleteBehavior.Restrict);

    }
}