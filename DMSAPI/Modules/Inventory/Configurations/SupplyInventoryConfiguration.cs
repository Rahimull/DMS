using DMS.Modules.Inventory.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Inventory.Configurations;

public class SupplyInventoryConfiguration : IEntityTypeConfiguration<SupplyInventory>
{
    public void Configure(EntityTypeBuilder<SupplyInventory> builder)
    {
        builder.ToTable("supplies_inventory");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("item_ID");

        builder.Property(x => x.Quantity)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.UnitPrice)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.ReorderLevel)
            .HasColumnType("decimal(18,2)");
    }
}