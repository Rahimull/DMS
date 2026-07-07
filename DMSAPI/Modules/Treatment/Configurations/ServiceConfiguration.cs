using DMS.Modules.Treatments.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Treatments.Configurations;

public class ServiceConfiguration : IEntityTypeConfiguration<Service>
{
    public void Configure(EntityTypeBuilder<Service> builder)
    {
        builder.ToTable("services");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("service_ID");

        builder.Property(x => x.Name)
            .HasColumnName("service_name")
            .HasMaxLength(150)
            .IsRequired();

        builder.Property(x => x.Description)
            .HasColumnName("description")
            .HasMaxLength(500);

        builder.Property(x => x.Fee)
            .HasColumnName("fee")
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.Duration)
            .HasColumnName("duration");

        builder.Property(x => x.IsActive)
            .HasColumnName("is_active")
            .HasDefaultValue(true);
    }
}