using DMS.Modules.Pharmacy.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DMS.Modules.Pharmacy.Configurations;

public class MedicineSaleConfiguration : IEntityTypeConfiguration<MedicineSale>
{
    public void Configure(EntityTypeBuilder<MedicineSale> builder)
    {
        builder.ToTable("medicine_sales");

        builder.HasKey(x => x.Id);

        builder.Property(x => x.Id)
            .HasColumnName("sale_ID");

        builder.Property(x => x.Quantity)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.UnitPrice)
            .HasColumnType("decimal(18,2)");

        builder.Property(x => x.Total)
            .HasColumnType("decimal(18,2)");

        builder.HasOne(x => x.MedicineInventory)
            .WithMany(x => x.Sales)
            .HasForeignKey(x => x.MedicineInventoryId);

        builder.HasOne(x => x.Patient)
            .WithMany()
            .HasForeignKey(x => x.PatientId);

        builder.HasOne(x => x.Staff)
            .WithMany()
            .HasForeignKey(x => x.StaffId);
    }
}