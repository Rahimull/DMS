using DMS.Modules.Treatments.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Treatments.Configurations;

public class ServiceRequirementConfiguration : IEntityTypeConfiguration<ServiceRequirement>
{
    public void Configure(EntityTypeBuilder<ServiceRequirement> builder)
    {
        builder.ToTable("service_requirements");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("requirement_ID");

       
    }
}