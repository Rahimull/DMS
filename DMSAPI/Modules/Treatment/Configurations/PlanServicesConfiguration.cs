using DMS.Modules.Treatments.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Treatments.Configurations;

public class PlanServiceConfiguration : IEntityTypeConfiguration<PlanService>
{
    public void Configure(EntityTypeBuilder<PlanService> builder)
    {
        builder.ToTable("plan_services");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("ps_ID");

        builder.HasOne(x => x.TreatmentPlan)
            .WithMany()
            .HasForeignKey(x => x.TreatmentPlanId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.Service)
            .WithMany(x => x.PlanServices)
            .HasForeignKey(x => x.ServiceId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}