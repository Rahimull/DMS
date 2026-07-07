using DMS.Modules.Treatments.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Treatments.Configurations;

public class RetreatmentConfiguration : IEntityTypeConfiguration<Retreatment>
{
    public void Configure(EntityTypeBuilder<Retreatment> builder)
    {
        builder.ToTable("retreatments");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("retreatment_ID");

        builder.HasOne(x => x.Patient)
            .WithMany()
            .HasForeignKey(x => x.PatientId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.Staff)
            .WithMany()
            .HasForeignKey(x => x.StaffId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}