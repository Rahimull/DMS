using DMS.Modules.Treatments.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Treatments.Configurations;

public class PatientServiceConfiguration : IEntityTypeConfiguration<PatientService>
{
    public void Configure(EntityTypeBuilder<PatientService> builder)
    {
        builder.ToTable("patient_services");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("patient_service_ID");

        builder.Property(x => x.Fee)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.Discount)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.Paid)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.Remaining)
            .HasColumnType("decimal(18,2)");

        builder.HasOne(x => x.Patient)
            .WithMany()
            .HasForeignKey(x => x.PatientId);

        builder.HasOne(x => x.Appointment)
            .WithMany()
            .HasForeignKey(x => x.AppointmentId);

        builder.HasOne(x => x.TreatmentPlan)
            .WithMany()
            .HasForeignKey(x => x.TreatmentPlanId);

        builder.HasOne(x => x.Service)
            .WithMany(x => x.PatientServices)
            .HasForeignKey(x => x.ServiceId);
    }
}