using DMS.Modules.Finances.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Finances.Configurations;

public class ExpenseDetailConfiguration : IEntityTypeConfiguration<ExpenseDetail>
{
    public void Configure(EntityTypeBuilder<ExpenseDetail> builder)
    {
        builder.ToTable("expense_detail");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("detail_ID");

        builder.Property(x => x.Amount)
            .HasColumnType("decimal(18,2)");

        builder.HasOne(x => x.Expense)
            .WithMany(x => x.Details)
            .HasForeignKey(x => x.ExpenseId);

        builder.HasOne(x => x.Staff)
            .WithMany()
            .HasForeignKey(x => x.StaffId);

        builder.HasOne(x => x.ExpenseInvoice)
            .WithMany(x => x.Details)
            .HasForeignKey(x => x.ExpenseInvoiceId);
    }
}