using DMS.Modules.Clinics.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Clinics.Configurations;

public class ClinicConfiguration : IEntityTypeConfiguration<Clinic>
{
    public void Configure(EntityTypeBuilder<Clinic> builder)
    {
        builder.ToTable("clinics");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
               .HasColumnName("clinic_ID");

        builder.Property(x => x.Name)
               .HasColumnName("clinic_name")
               .HasMaxLength(200)
               .IsRequired();

        builder.Property(x => x.Address)
               .HasColumnName("clinic_address")
               .HasMaxLength(500)
               .IsRequired();

        builder.Property(x => x.Phone1)
               .HasColumnName("clinic_phone1")
               .HasMaxLength(20);

        builder.Property(x => x.Phone2)
               .HasColumnName("clinic_phone2")
               .HasMaxLength(20);

        builder.Property(x => x.Email)
               .HasColumnName("clinic_email")
               .HasMaxLength(150);

        builder.Property(x => x.FounderId)
               .HasColumnName("clinic_founder");

        builder.Property(x => x.Logo)
               .HasColumnName("clinic_logo");

        builder.HasOne(x => x.Founder)
               .WithMany()
               .HasForeignKey(x => x.FounderId)
               .OnDelete(DeleteBehavior.SetNull);
    }
}