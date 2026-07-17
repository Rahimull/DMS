using DMS.Modules.Inventory.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Inventory.Configurations;

public class SupplySaleConfiguration : IEntityTypeConfiguration<SupplySale>
{
    public void Configure(EntityTypeBuilder<SupplySale> builder)
    {
        builder.ToTable("supplies_sales");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("ssale_ID");

        builder.HasOne(x => x.SupplyInventory)
            .WithMany(x => x.Sales)
            .HasForeignKey(x => x.SupplyInventoryId);

        builder.HasOne(x => x.Patient)
            .WithMany(x=> x.SupplySales)
            .HasForeignKey(x => x.PatientId);

        builder.HasOne(x => x.Staff)
            .WithMany(x => x.SupplySales)
            .HasForeignKey(x => x.StaffId);
    }
}