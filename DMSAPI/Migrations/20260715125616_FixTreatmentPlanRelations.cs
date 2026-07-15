using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DMSAPI.Migrations
{
    /// <inheritdoc />
    public partial class FixTreatmentPlanRelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_patient_services_service_requirements_ServiceRequirementId",
                table: "patient_services");

            migrationBuilder.DropForeignKey(
                name: "FK_patients_staff_staff_ID",
                table: "patients");

            migrationBuilder.DropForeignKey(
                name: "FK_treatment_plans_patients_patient_ID",
                table: "treatment_plans");

            migrationBuilder.RenameColumn(
                name: "ServiceRequirementId",
                table: "patient_services",
                newName: "TreatmentPlanId1");

            migrationBuilder.RenameIndex(
                name: "IX_patient_services_ServiceRequirementId",
                table: "patient_services",
                newName: "IX_patient_services_TreatmentPlanId1");

            migrationBuilder.AlterColumn<decimal>(
                name: "fee",
                table: "services",
                type: "decimal(18,2)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AddColumn<int>(
                name: "AppointmentId1",
                table: "retreatments",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PatientId1",
                table: "retreatments",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StaffId1",
                table: "retreatments",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TreatmentPlanId1",
                table: "plan_services",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "AppointmentId1",
                table: "patient_services",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PatientId1",
                table: "patient_services",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ServiceRequirementId1",
                table: "patient_services",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PatientId1",
                table: "condition_details",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PatientId1",
                table: "appointments",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ServiceId1",
                table: "appointments",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "StaffId1",
                table: "appointments",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_AppointmentId1",
                table: "retreatments",
                column: "AppointmentId1");

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_Damage_service_ID",
                table: "retreatments",
                column: "Damage_service_ID");

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_PatientId1",
                table: "retreatments",
                column: "PatientId1");

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_StaffId1",
                table: "retreatments",
                column: "StaffId1");

            migrationBuilder.CreateIndex(
                name: "IX_plan_services_TreatmentPlanId1",
                table: "plan_services",
                column: "TreatmentPlanId1");

            migrationBuilder.CreateIndex(
                name: "IX_patient_services_AppointmentId1",
                table: "patient_services",
                column: "AppointmentId1");

            migrationBuilder.CreateIndex(
                name: "IX_patient_services_PatientId1",
                table: "patient_services",
                column: "PatientId1");

            migrationBuilder.CreateIndex(
                name: "IX_patient_services_ser_req_ID",
                table: "patient_services",
                column: "ser_req_ID");

            migrationBuilder.CreateIndex(
                name: "IX_patient_services_ServiceRequirementId1",
                table: "patient_services",
                column: "ServiceRequirementId1");

            migrationBuilder.CreateIndex(
                name: "IX_condition_details_PatientId1",
                table: "condition_details",
                column: "PatientId1");

            migrationBuilder.CreateIndex(
                name: "IX_appointments_PatientId1",
                table: "appointments",
                column: "PatientId1");

            migrationBuilder.CreateIndex(
                name: "IX_appointments_ServiceId1",
                table: "appointments",
                column: "ServiceId1");

            migrationBuilder.CreateIndex(
                name: "IX_appointments_StaffId1",
                table: "appointments",
                column: "StaffId1");

            migrationBuilder.AddForeignKey(
                name: "FK_appointments_patients_PatientId1",
                table: "appointments",
                column: "PatientId1",
                principalTable: "patients",
                principalColumn: "pat_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_appointments_services_ServiceId1",
                table: "appointments",
                column: "ServiceId1",
                principalTable: "services",
                principalColumn: "service_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_appointments_staff_StaffId1",
                table: "appointments",
                column: "StaffId1",
                principalTable: "staff",
                principalColumn: "staff_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_condition_details_patients_PatientId1",
                table: "condition_details",
                column: "PatientId1",
                principalTable: "patients",
                principalColumn: "pat_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_patient_services_appointments_AppointmentId1",
                table: "patient_services",
                column: "AppointmentId1",
                principalTable: "appointments",
                principalColumn: "apt_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_patient_services_patients_PatientId1",
                table: "patient_services",
                column: "PatientId1",
                principalTable: "patients",
                principalColumn: "pat_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_patient_services_service_requirements_ServiceRequirementId1",
                table: "patient_services",
                column: "ServiceRequirementId1",
                principalTable: "service_requirements",
                principalColumn: "requirement_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_patient_services_service_requirements_ser_req_ID",
                table: "patient_services",
                column: "ser_req_ID",
                principalTable: "service_requirements",
                principalColumn: "requirement_ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_patient_services_treatment_plans_TreatmentPlanId1",
                table: "patient_services",
                column: "TreatmentPlanId1",
                principalTable: "treatment_plans",
                principalColumn: "tp_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_patients_staff_staff_ID",
                table: "patients",
                column: "staff_ID",
                principalTable: "staff",
                principalColumn: "staff_ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_plan_services_treatment_plans_TreatmentPlanId1",
                table: "plan_services",
                column: "TreatmentPlanId1",
                principalTable: "treatment_plans",
                principalColumn: "tp_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_retreatments_appointments_AppointmentId1",
                table: "retreatments",
                column: "AppointmentId1",
                principalTable: "appointments",
                principalColumn: "apt_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_retreatments_patients_PatientId1",
                table: "retreatments",
                column: "PatientId1",
                principalTable: "patients",
                principalColumn: "pat_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_retreatments_services_Damage_service_ID",
                table: "retreatments",
                column: "Damage_service_ID",
                principalTable: "services",
                principalColumn: "service_ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_retreatments_staff_StaffId1",
                table: "retreatments",
                column: "StaffId1",
                principalTable: "staff",
                principalColumn: "staff_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_treatment_plans_patients_patient_ID",
                table: "treatment_plans",
                column: "patient_ID",
                principalTable: "patients",
                principalColumn: "pat_ID",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_appointments_patients_PatientId1",
                table: "appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_appointments_services_ServiceId1",
                table: "appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_appointments_staff_StaffId1",
                table: "appointments");

            migrationBuilder.DropForeignKey(
                name: "FK_condition_details_patients_PatientId1",
                table: "condition_details");

            migrationBuilder.DropForeignKey(
                name: "FK_patient_services_appointments_AppointmentId1",
                table: "patient_services");

            migrationBuilder.DropForeignKey(
                name: "FK_patient_services_patients_PatientId1",
                table: "patient_services");

            migrationBuilder.DropForeignKey(
                name: "FK_patient_services_service_requirements_ServiceRequirementId1",
                table: "patient_services");

            migrationBuilder.DropForeignKey(
                name: "FK_patient_services_service_requirements_ser_req_ID",
                table: "patient_services");

            migrationBuilder.DropForeignKey(
                name: "FK_patient_services_treatment_plans_TreatmentPlanId1",
                table: "patient_services");

            migrationBuilder.DropForeignKey(
                name: "FK_patients_staff_staff_ID",
                table: "patients");

            migrationBuilder.DropForeignKey(
                name: "FK_plan_services_treatment_plans_TreatmentPlanId1",
                table: "plan_services");

            migrationBuilder.DropForeignKey(
                name: "FK_retreatments_appointments_AppointmentId1",
                table: "retreatments");

            migrationBuilder.DropForeignKey(
                name: "FK_retreatments_patients_PatientId1",
                table: "retreatments");

            migrationBuilder.DropForeignKey(
                name: "FK_retreatments_services_Damage_service_ID",
                table: "retreatments");

            migrationBuilder.DropForeignKey(
                name: "FK_retreatments_staff_StaffId1",
                table: "retreatments");

            migrationBuilder.DropForeignKey(
                name: "FK_treatment_plans_patients_patient_ID",
                table: "treatment_plans");

            migrationBuilder.DropIndex(
                name: "IX_retreatments_AppointmentId1",
                table: "retreatments");

            migrationBuilder.DropIndex(
                name: "IX_retreatments_Damage_service_ID",
                table: "retreatments");

            migrationBuilder.DropIndex(
                name: "IX_retreatments_PatientId1",
                table: "retreatments");

            migrationBuilder.DropIndex(
                name: "IX_retreatments_StaffId1",
                table: "retreatments");

            migrationBuilder.DropIndex(
                name: "IX_plan_services_TreatmentPlanId1",
                table: "plan_services");

            migrationBuilder.DropIndex(
                name: "IX_patient_services_AppointmentId1",
                table: "patient_services");

            migrationBuilder.DropIndex(
                name: "IX_patient_services_PatientId1",
                table: "patient_services");

            migrationBuilder.DropIndex(
                name: "IX_patient_services_ser_req_ID",
                table: "patient_services");

            migrationBuilder.DropIndex(
                name: "IX_patient_services_ServiceRequirementId1",
                table: "patient_services");

            migrationBuilder.DropIndex(
                name: "IX_condition_details_PatientId1",
                table: "condition_details");

            migrationBuilder.DropIndex(
                name: "IX_appointments_PatientId1",
                table: "appointments");

            migrationBuilder.DropIndex(
                name: "IX_appointments_ServiceId1",
                table: "appointments");

            migrationBuilder.DropIndex(
                name: "IX_appointments_StaffId1",
                table: "appointments");

            migrationBuilder.DropColumn(
                name: "AppointmentId1",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "PatientId1",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "StaffId1",
                table: "retreatments");

            migrationBuilder.DropColumn(
                name: "TreatmentPlanId1",
                table: "plan_services");

            migrationBuilder.DropColumn(
                name: "AppointmentId1",
                table: "patient_services");

            migrationBuilder.DropColumn(
                name: "PatientId1",
                table: "patient_services");

            migrationBuilder.DropColumn(
                name: "ServiceRequirementId1",
                table: "patient_services");

            migrationBuilder.DropColumn(
                name: "PatientId1",
                table: "condition_details");

            migrationBuilder.DropColumn(
                name: "PatientId1",
                table: "appointments");

            migrationBuilder.DropColumn(
                name: "ServiceId1",
                table: "appointments");

            migrationBuilder.DropColumn(
                name: "StaffId1",
                table: "appointments");

            migrationBuilder.RenameColumn(
                name: "TreatmentPlanId1",
                table: "patient_services",
                newName: "ServiceRequirementId");

            migrationBuilder.RenameIndex(
                name: "IX_patient_services_TreatmentPlanId1",
                table: "patient_services",
                newName: "IX_patient_services_ServiceRequirementId");

            migrationBuilder.AlterColumn<decimal>(
                name: "fee",
                table: "services",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_patient_services_service_requirements_ServiceRequirementId",
                table: "patient_services",
                column: "ServiceRequirementId",
                principalTable: "service_requirements",
                principalColumn: "requirement_ID");

            migrationBuilder.AddForeignKey(
                name: "FK_patients_staff_staff_ID",
                table: "patients",
                column: "staff_ID",
                principalTable: "staff",
                principalColumn: "staff_ID",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_treatment_plans_patients_patient_ID",
                table: "treatment_plans",
                column: "patient_ID",
                principalTable: "patients",
                principalColumn: "pat_ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
