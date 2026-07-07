using DMS.Modules.Treatments.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Treatments.Configurations;

public class ConditionDetailConfiguration : IEntityTypeConfiguration<ConditionDetail>
{
    public void Configure(EntityTypeBuilder<ConditionDetail> builder)
    {
        builder.ToTable("condition_details");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("condition_detail_ID");

        builder.HasOne(x => x.Condition)
            .WithMany(x => x.ConditionDetails)
            .HasForeignKey(x => x.ConditionId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.Patient)
            .WithMany()
            .HasForeignKey(x => x.PatientId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}