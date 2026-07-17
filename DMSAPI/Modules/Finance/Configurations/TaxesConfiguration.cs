using DMS.Modules.Finances.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Finances.Configurations;

public class TaxConfiguration : IEntityTypeConfiguration<Taxes>
{
    public void Configure(EntityTypeBuilder<Taxes> builder)
    {
        builder.ToTable("taxes");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("tax_ID");
    }
}