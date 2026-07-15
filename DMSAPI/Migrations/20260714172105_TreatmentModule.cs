using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DMSAPI.Migrations
{
    /// <inheritdoc />
    public partial class TreatmentModule : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_service_requirements_services_service_ID",
                table: "service_requirements");

            migrationBuilder.DropIndex(
                name: "IX_service_requirements_service_ID",
                table: "service_requirements");

            migrationBuilder.DropColumn(
                name: "duration",
                table: "services");

            migrationBuilder.DropColumn(
                name: "is_active",
                table: "services");

            migrationBuilder.DropColumn(
                name: "quantity",
                table: "service_requirements");

            migrationBuilder.DropColumn(
                name: "service_ID",
                table: "service_requirements");

            migrationBuilder.DropColumn(
                name: "unit",
                table: "service_requirements");

            migrationBuilder.DropColumn(
                name: "notes",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "discount",
                table: "plan_services");

            migrationBuilder.DropColumn(
                name: "qty",
                table: "plan_services");

            migrationBuilder.DropColumn(
                name: "total",
                table: "plan_services");

            migrationBuilder.DropColumn(
                name: "unit_price",
                table: "plan_services");

            migrationBuilder.DropColumn(
                name: "discount",
                table: "patient_services");

            migrationBuilder.DropColumn(
                name: "fee",
                table: "patient_services");

            migrationBuilder.DropColumn(
                name: "paid",
                table: "patient_services");

            migrationBuilder.DropColumn(
                name: "remaining",
                table: "patient_services");

            migrationBuilder.DropColumn(
                name: "condition_date",
                table: "condition_details");

            migrationBuilder.RenameColumn(
                name: "item_name",
                table: "service_requirements",
                newName: "req_name");

            migrationBuilder.RenameColumn(
                name: "service_date",
                table: "patient_services",
                newName: "value");

            migrationBuilder.RenameColumn(
                name: "qty",
                table: "patient_services",
                newName: "ser_req_ID");

            migrationBuilder.RenameColumn(
                name: "tooth_no",
                table: "condition_details",
                newName: "result");

            migrationBuilder.AddColumn<int>(
                name: "Damage_service_ID",
                table: "retreatments",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ServiceId",
                table: "retreatments",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "apt_ID",
                table: "retreatments",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "help_service_ID",
                table: "retreatments",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "outcome_details",
                table: "retreatments",
                type: "TEXT",
                maxLength: 200,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<decimal>(
                name: "retreatment_cost",
                table: "retreatments",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "retreatment_outcome",
                table: "retreatments",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "tp_ID",
                table: "retreatments",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "service_fee",
                table: "plan_services",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "total_fee",
                table: "plan_services",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "ServiceRequirementId",
                table: "patient_services",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<DateOnly>(
                name: "diagnosis_date",
                table: "condition_details",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "severty",
                table: "condition_details",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_apt_ID",
                table: "retreatments",
                column: "apt_ID");

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_ServiceId",
                table: "retreatments",
                column: "ServiceId");

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_tp_ID",
                table: "retreatments",
                column: "tp_ID");

            migrationBuilder.CreateIndex(
                name: "IX_patient_services_ServiceRequirementId",
                table: "patient_services",
                column: "ServiceRequirementId");

            migrationBuilder.AddForeignKey(
                name: "FK_patient_services_service_requirements_ServiceRequirementId",
                table: "patient_services",
                column: "ServiceRequirementId",
                principalTable: "service_requirements",
                principalColumn: "requirement_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_retreatments_appointments_apt_ID",
                table: "retreatments",
                column: "apt_ID",
                principalTable: "appointments",
                principalColumn: "apt_ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_retreatments_services_ServiceId",
                table: "retreatments",
                column: "ServiceId",
                principalTable: "services",
                principalColumn: "service_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_retreatments_treatment_plans_tp_ID",
                table: "retreatments",
                column: "tp_ID",
                principalTable: "treatment_plans",
                principalColumn: "tp_ID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_patient_services_service_requirements_ServiceRequirementId",
                table: "patient_services");

            migrationBuilder.DropForeignKey(
                name: "FK_retreatments_appointments_apt_ID",
                table: "retreatments");

            migrationBuilder.DropForeignKey(
                name: "FK_retreatments_services_ServiceId",
                table: "retreatments");

            migrationBuilder.DropForeignKey(
                name: "FK_retreatments_treatment_plans_tp_ID",
                table: "retreatments");

            migrationBuilder.DropIndex(
                name: "IX_retreatments_apt_ID",
                table: "retreatments");

            migrationBuilder.DropIndex(
                name: "IX_retreatments_ServiceId",
                table: "retreatments");

            migrationBuilder.DropIndex(
                name: "IX_retreatments_tp_ID",
                table: "retreatments");

            migrationBuilder.DropIndex(
                name: "IX_patient_services_ServiceRequirementId",
                table: "patient_services");

            migrationBuilder.DropColumn(
                name: "Damage_service_ID",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "ServiceId",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "apt_ID",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "help_service_ID",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "outcome_details",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "retreatment_cost",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "retreatment_outcome",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "tp_ID",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "service_fee",
                table: "plan_services");

            migrationBuilder.DropColumn(
                name: "total_fee",
                table: "plan_services");

            migrationBuilder.DropColumn(
                name: "ServiceRequirementId",
                table: "patient_services");

            migrationBuilder.DropColumn(
                name: "diagnosis_date",
                table: "condition_details");

            migrationBuilder.DropColumn(
                name: "severty",
                table: "condition_details");

            migrationBuilder.RenameColumn(
                name: "req_name",
                table: "service_requirements",
                newName: "item_name");

            migrationBuilder.RenameColumn(
                name: "value",
                table: "patient_services",
                newName: "service_date");

            migrationBuilder.RenameColumn(
                name: "ser_req_ID",
                table: "patient_services",
                newName: "qty");

            migrationBuilder.RenameColumn(
                name: "result",
                table: "condition_details",
                newName: "tooth_no");

            migrationBuilder.AddColumn<int>(
                name: "duration",
                table: "services",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "is_active",
                table: "services",
                type: "INTEGER",
                nullable: false,
                defaultValue: true);

            migrationBuilder.AddColumn<decimal>(
                name: "quantity",
                table: "service_requirements",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "service_ID",
                table: "service_requirements",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "unit",
                table: "service_requirements",
                type: "TEXT",
                maxLength: 50,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "notes",
                table: "retreatments",
                type: "TEXT",
                maxLength: 1000,
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "discount",
                table: "plan_services",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "qty",
                table: "plan_services",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "total",
                table: "plan_services",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "unit_price",
                table: "plan_services",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "discount",
                table: "patient_services",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "fee",
                table: "patient_services",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "paid",
                table: "patient_services",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "remaining",
                table: "patient_services",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<DateOnly>(
                name: "condition_date",
                table: "condition_details",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.CreateIndex(
                name: "IX_service_requirements_service_ID",
                table: "service_requirements",
                column: "service_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_service_requirements_services_service_ID",
                table: "service_requirements",
                column: "service_ID",
                principalTable: "services",
                principalColumn: "service_ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
