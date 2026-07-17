using DMS.Modules.Labs.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Labs.Configurations;

public class LabConfiguration : IEntityTypeConfiguration<Lab>
{
    public void Configure(EntityTypeBuilder<Lab> builder)
    {
        builder.ToTable("labs");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("lab_ID");

        builder.Property(x => x.Name)
            .HasColumnName("lab_name")
            .HasMaxLength(150)
            .IsRequired();

        builder.Property(x => x.Address)
            .HasColumnName("address")
            .HasMaxLength(500);
    }
}