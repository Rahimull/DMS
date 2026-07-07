using DMS.Modules.Labs.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Labs.Configurations;

public class LabCaseConfiguration : IEntityTypeConfiguration<LabCase>
{
    public void Configure(EntityTypeBuilder<LabCase> builder)
    {
        builder.ToTable("lab_cases");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("case_ID");

        builder.Property(x => x.Fee)
            .HasColumnType("decimal(18,2)");

        builder.HasOne(x => x.Lab)
            .WithMany(x => x.LabCases)
            .HasForeignKey(x => x.LabId)
            .OnDelete(DeleteBehavior.Restrict);

        builder.HasOne(x => x.Patient)
            .WithMany()
            .HasForeignKey(x => x.PatientId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}