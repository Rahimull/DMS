using DMS.Modules.Finances.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Finances.Configurations;

public class TaxConfiguration : IEntityTypeConfiguration<Tax>
{
    public void Configure(EntityTypeBuilder<Tax> builder)
    {
        builder.ToTable("taxes");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("tax_ID");

        builder.Property(x => x.Percentage)
            .HasColumnType("decimal(5,2)");
    }
}