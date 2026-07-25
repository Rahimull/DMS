using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DMSAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddServiceRequirmentMap : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ServiceRequirementMaps",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    ServiceId = table.Column<int>(type: "INTEGER", nullable: false),
                    ServiceRequirmentId = table.Column<int>(type: "INTEGER", nullable: false),
                    DisplayOrder = table.Column<int>(type: "INTEGER", nullable: false),
                    IsRequired = table.Column<bool>(type: "INTEGER", nullable: false),
                    IsActive = table.Column<bool>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceRequirementMaps", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ServiceRequirementMaps_service_requirements_ServiceRequirmentId",
                        column: x => x.ServiceRequirmentId,
                        principalTable: "service_requirements",
                        principalColumn: "requirement_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ServiceRequirementMaps_services_ServiceId",
                        column: x => x.ServiceId,
                        principalTable: "services",
                        principalColumn: "service_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServiceRequirementMaps_ServiceId",
                table: "ServiceRequirementMaps",
                column: "ServiceId");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceRequirementMaps_ServiceRequirmentId",
                table: "ServiceRequirementMaps",
                column: "ServiceRequirmentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceRequirementMaps");
        }
    }
}
