using DMS.Modules.Staffs.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Staffs.Configurations;

public class StaffConfiguration : IEntityTypeConfiguration<Staff>
{
    public void Configure(EntityTypeBuilder<Staff> builder)
    {
        builder.ToTable("staff");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("staff_ID");

        builder.Property(x => x.FirstName)
            .HasColumnName("firstname")
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(x => x.LastName)
            .HasColumnName("lastname")
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(x => x.HireDate)
            .HasColumnName("hire_date");

        builder.Property(x => x.Position)
            .HasColumnName("position")
            .HasMaxLength(100);

        builder.Property(x => x.Salary)
            .HasColumnName("salary")
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.Prepayment)
            .HasColumnName("prepayment")
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.Phone)
            .HasColumnName("phone")
            .HasMaxLength(20)
            .IsRequired();

        builder.Property(x => x.FamilyPhone1)
            .HasColumnName("family_phone1")
            .HasMaxLength(20)
            .IsRequired();

        builder.Property(x => x.FamilyPhone2)
            .HasColumnName("family_phone2")
            .HasMaxLength(20);

        builder.Property(x => x.TazkiraId)
            .HasColumnName("tazkira_ID")
            .HasMaxLength(30);

        builder.Property(x => x.Photo)
            .HasColumnName("photo");

        builder.Property(x => x.ContractFile)
            .HasColumnName("contract_file");

        builder.Property(x => x.Address)
            .HasColumnName("address")
            .HasMaxLength(500);

        builder.Property(x => x.FileType)
            .HasColumnName("file_type")
            .HasMaxLength(20);
    }
}