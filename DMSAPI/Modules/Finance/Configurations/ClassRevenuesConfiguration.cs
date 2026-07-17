using DMS.Modules.Finances.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Finances.Configurations;

public class ClassRevenueConfiguration : IEntityTypeConfiguration<ClassRevenue>
{
    public void Configure(EntityTypeBuilder<ClassRevenue> builder)
    {
        builder.ToTable("class_revenues");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("class_rev_ID");
    }
}