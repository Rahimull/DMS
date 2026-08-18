using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DMSAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddPrescriptions : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Prescription",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PatientId = table.Column<int>(type: "INTEGER", nullable: false),
                    StaffId = table.Column<int>(type: "INTEGER", nullable: false),
                    PrescriptionDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Notes = table.Column<string>(type: "TEXT", maxLength: 500, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prescription", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Prescription_patients_PatientId",
                        column: x => x.PatientId,
                        principalTable: "patients",
                        principalColumn: "pat_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Prescription_staff_StaffId",
                        column: x => x.StaffId,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PrescriptionItem",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    prescription_id = table.Column<int>(type: "INTEGER", nullable: false),
                    medicine_inventory_id = table.Column<int>(type: "INTEGER", nullable: false),
                    dosage = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    frequency = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    duration = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    route = table.Column<string>(type: "TEXT", maxLength: 50, nullable: true),
                    instructions = table.Column<string>(type: "TEXT", maxLength: 500, nullable: true),
                    quantity = table.Column<decimal>(type: "TEXT", nullable: false),
                    notes = table.Column<string>(type: "TEXT", maxLength: 500, nullable: true),
                    PrescriptionItemId = table.Column<int>(type: "INTEGER", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrescriptionItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PrescriptionItem_PrescriptionItem_PrescriptionItemId",
                        column: x => x.PrescriptionItemId,
                        principalTable: "PrescriptionItem",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_PrescriptionItem_Prescription_prescription_id",
                        column: x => x.prescription_id,
                        principalTable: "Prescription",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PrescriptionItem_medicine_inventory_medicine_inventory_id",
                        column: x => x.medicine_inventory_id,
                        principalTable: "medicine_inventory",
                        principalColumn: "med_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Prescription_PatientId",
                table: "Prescription",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_Prescription_StaffId",
                table: "Prescription",
                column: "StaffId");

            migrationBuilder.CreateIndex(
                name: "IX_PrescriptionItem_medicine_inventory_id",
                table: "PrescriptionItem",
                column: "medicine_inventory_id");

            migrationBuilder.CreateIndex(
                name: "IX_PrescriptionItem_prescription_id",
                table: "PrescriptionItem",
                column: "prescription_id");

            migrationBuilder.CreateIndex(
                name: "IX_PrescriptionItem_PrescriptionItemId",
                table: "PrescriptionItem",
                column: "PrescriptionItemId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PrescriptionItem");

            migrationBuilder.DropTable(
                name: "Prescription");
        }
    }
}
