using DMS.Modules.Pharmacy.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Pharmacy.Configurations;

public class PrescriptionConfiguration : IEntityTypeConfiguration<Prescription>
{
    public void Configure(EntityTypeBuilder<Prescription> builder)
    {
        builder.ToTable("Prescription");

        builder.HasKey(x => x.Id);


        builder.HasOne(x => x.Patient)
            .WithMany(x => x.Prescriptions)
            .HasForeignKey(x => x.PatientId);

    
        builder.HasOne(x => x.Staff)
            .WithMany(x => x.Prescriptions)
            .HasForeignKey(x => x.StaffId);
    }
}