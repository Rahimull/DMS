using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DMSAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddPrescriptionsItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PrescriptionItem_PrescriptionItem_PrescriptionItemId",
                table: "PrescriptionItem");

            migrationBuilder.DropIndex(
                name: "IX_PrescriptionItem_PrescriptionItemId",
                table: "PrescriptionItem");

            migrationBuilder.DropColumn(
                name: "PrescriptionItemId",
                table: "PrescriptionItem");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PrescriptionItemId",
                table: "PrescriptionItem",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PrescriptionItem_PrescriptionItemId",
                table: "PrescriptionItem",
                column: "PrescriptionItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_PrescriptionItem_PrescriptionItem_PrescriptionItemId",
                table: "PrescriptionItem",
                column: "PrescriptionItemId",
                principalTable: "PrescriptionItem",
                principalColumn: "Id");
        }
    }
}
