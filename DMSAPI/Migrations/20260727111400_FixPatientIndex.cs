using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DMSAPI.Migrations
{
    /// <inheritdoc />
    public partial class FixPatientIndex : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_patients_firstname",
                table: "patients",
                column: "firstname");

            migrationBuilder.CreateIndex(
                name: "IX_patients_lastname",
                table: "patients",
                column: "lastname");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_patients_firstname",
                table: "patients");

            migrationBuilder.DropIndex(
                name: "IX_patients_lastname",
                table: "patients");
        }
    }
}
