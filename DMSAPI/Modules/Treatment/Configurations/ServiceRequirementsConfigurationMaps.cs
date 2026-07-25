using DMS.Modules.Treatments.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Treatments.Configurations;

public class ServiceRequirementConfigurationMap : IEntityTypeConfiguration<ServiceRequirementMap>
{
    public void Configure(EntityTypeBuilder<ServiceRequirementMap> builder)
    {
        builder.ToTable("ServiceRequirementMaps");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("Id");

     builder.HasOne(x => x.Service)
            .WithMany(x => x.ServiceRequirementMaps)
            .HasForeignKey(x => x.ServiceId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.ServiceRequirement)
            .WithMany(x => x.ServiceRequirementMaps)
            .HasForeignKey(x => x.ServiceRequirmentId)
            .OnDelete(DeleteBehavior.Restrict);

       
    }
}