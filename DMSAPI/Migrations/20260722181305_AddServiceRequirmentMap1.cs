using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DMSAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddServiceRequirmentMap1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "ServiceRequirementMaps");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "ServiceRequirementMaps",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
