using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DMSAPI.Migrations
{
    /// <inheritdoc />
    public partial class FixClincTableFinaly : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_clinics_staff_StaffId",
                table: "clinics");

            migrationBuilder.DropForeignKey(
                name: "FK_clinics_staff_clinic_founder",
                table: "clinics");

            migrationBuilder.DropIndex(
                name: "IX_clinics_clinic_founder",
                table: "clinics");

            migrationBuilder.DropIndex(
                name: "IX_clinics_StaffId",
                table: "clinics");

            migrationBuilder.DropColumn(
                name: "StaffId",
                table: "clinics");

            migrationBuilder.DropColumn(
                name: "clinic_founder",
                table: "clinics");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StaffId",
                table: "clinics",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "clinic_founder",
                table: "clinics",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_clinics_clinic_founder",
                table: "clinics",
                column: "clinic_founder");

            migrationBuilder.CreateIndex(
                name: "IX_clinics_StaffId",
                table: "clinics",
                column: "StaffId");

            migrationBuilder.AddForeignKey(
                name: "FK_clinics_staff_StaffId",
                table: "clinics",
                column: "StaffId",
                principalTable: "staff",
                principalColumn: "staff_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_clinics_staff_clinic_founder",
                table: "clinics",
                column: "clinic_founder",
                principalTable: "staff",
                principalColumn: "staff_ID",
                onDelete: ReferentialAction.SetNull);
        }
    }
}
