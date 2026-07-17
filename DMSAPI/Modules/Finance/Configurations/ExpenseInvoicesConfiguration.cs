using DMS.Modules.Finances.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Finances.Configurations;

public class ExpenseInvoiceConfiguration : IEntityTypeConfiguration<ExpenseInvoice>
{
    public void Configure(EntityTypeBuilder<ExpenseInvoice> builder)
    {
        builder.ToTable("expense_invoices");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("exp_inv_ID");
        
        builder.HasOne(x => x.Staff)
            .WithMany(x => x.ExpenseInvoices)
            .HasForeignKey(x => x.StaffId);
    }
}