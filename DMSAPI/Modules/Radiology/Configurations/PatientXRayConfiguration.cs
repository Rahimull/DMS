using DMS.Modules.Xrays.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Xrays.Configurations;

public class PatientXrayConfiguration : IEntityTypeConfiguration<PatientXray>
{
    public void Configure(EntityTypeBuilder<PatientXray> builder)
    {
        builder.ToTable("patient_xrays");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("xray_ID");

        builder.HasOne(x => x.Patient)
            .WithMany()
            .HasForeignKey(x => x.PatientId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}