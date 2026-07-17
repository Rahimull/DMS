using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DMS.Modules.Appointments.Entities;

namespace DMS.Modules.Appointments.Configurations;

public class AppointmentConfiguration : IEntityTypeConfiguration<Appointment>
{
    public void Configure(EntityTypeBuilder<Appointment> builder)
    {
        builder.ToTable("appointments");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("apt_ID");

        builder.Property(x => x.Discount)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.ServiceFee)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.TotalFee)
            .HasColumnType("decimal(18,2)");

        builder.HasOne(x => x.Patient)
            .WithMany(x => x.Appointments)
            .HasForeignKey(x => x.PatientId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.Service)
            .WithMany(x => x.Appointments)
            .HasForeignKey(x => x.ServiceId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.HasOne(x => x.Staff)
            .WithMany(x => x.Appointments)
            .HasForeignKey(x => x.StaffId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}