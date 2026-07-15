using DMS.Modules.Patients.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Patients.Configurations;

public class PatientConfiguration : IEntityTypeConfiguration<Patient>
{
    public void Configure(EntityTypeBuilder<Patient> builder)
    {
        builder.ToTable("patients");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("pat_ID");

        builder.Property(x => x.FileId)
            .HasColumnName("file_ID")
            .HasMaxLength(50);

        builder.Property(x => x.CustomerPatientId)
            .HasColumnName("cust_pat_ID");

        builder.Property(x => x.StaffId)
            .HasColumnName("staff_ID")
            .IsRequired();

        builder.Property(x => x.FirstName)
            .HasColumnName("firstname")
            .HasMaxLength(100);

        builder.Property(x => x.FatherName)
            .HasColumnName("fathername")
            .HasMaxLength(100);

        builder.Property(x => x.LastName)
            .HasColumnName("lastname")
            .HasMaxLength(100);

        builder.Property(x => x.Gender)
            .HasColumnName("sex")
            .HasMaxLength(10)
            .IsRequired();

        builder.Property(x => x.Age)
            .HasColumnName("age");

        builder.Property(x => x.MaritalStatus)
            .HasColumnName("marital_status")
            .HasMaxLength(30);

        builder.Property(x => x.Phone)
            .HasColumnName("phone")
            .HasMaxLength(20);

        builder.Property(x => x.RegistrationDate)
            .HasColumnName("reg_date");

        builder.Property(x => x.BloodGroup)
            .HasColumnName("blood_group")
            .HasMaxLength(10);

        builder.Property(x => x.Address)
            .HasColumnName("address")
            .HasMaxLength(500);

        builder.Property(x => x.Photo)
            .HasColumnName("photo");

        builder.Property(x => x.SponsorBy)
            .HasColumnName("sponsor_by")
            .HasMaxLength(200);

        builder.HasOne(x => x.Staff)
            .WithMany(x => x.Patients)
            .HasForeignKey(x => x.StaffId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}