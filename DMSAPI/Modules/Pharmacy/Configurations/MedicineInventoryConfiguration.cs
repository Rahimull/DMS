using DMS.Modules.Pharmacy.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Pharmacy.Configurations;

public class MedicineInventoryConfiguration : IEntityTypeConfiguration<MedicineInventory>
{
    public void Configure(EntityTypeBuilder<MedicineInventory> builder)
    {
        builder.ToTable("medicine_inventory");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("medicine_ID");

        builder.Property(x => x.Quantity)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.UnitPrice)
            .HasColumnType("decimal(18,2)");
    }
}