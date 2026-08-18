using DMS.Modules.Pharmacy.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Pharmacy.Configurations;

public class PrescriptionItemConfiguration : IEntityTypeConfiguration<PrescriptionItem>
{
    public void Configure(EntityTypeBuilder<PrescriptionItem> builder)
    {
        builder.ToTable("PrescriptionItem");

        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.MedicineInventory)
            .WithMany(x => x.PrescriptionItem)
            .HasForeignKey(x => x.MedicineInventoryId);

        builder.HasOne(x => x.Prescription)
            .WithMany(x => x.PrescriptionItem)
            .HasForeignKey(x => x.PrescriptionId);
    }
}