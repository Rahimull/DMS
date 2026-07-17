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
            .HasColumnName("exp_detail_ID");


        builder.HasOne(x => x.Expense)
            .WithMany(x => x.ExpenseDetail)
            .HasForeignKey(x => x.ExpenseId);

        builder.HasOne(x => x.Staff)
            .WithMany(x => x.ExpenseDetails)
            .HasForeignKey(x => x.StaffId);

       
    }
}