using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DMSAPI.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "class_revenues",
                columns: table => new
                {
                    class_rev_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    student_firstname = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    student_lastname = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    student_fathername = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    teacher_fullname = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    subject = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    reg_date = table.Column<DateOnly>(type: "TEXT", nullable: true),
                    total_fee = table.Column<decimal>(type: "TEXT", nullable: false),
                    amount_received = table.Column<decimal>(type: "TEXT", nullable: false),
                    amount_due = table.Column<decimal>(type: "TEXT", nullable: false),
                    notes = table.Column<string>(type: "TEXT", maxLength: 300, nullable: true),
                    invoice_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_class_revenues", x => x.class_rev_ID);
                });

            migrationBuilder.CreateTable(
                name: "clinics",
                columns: table => new
                {
                    clinic_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    clinic_name = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    clinic_address = table.Column<string>(type: "TEXT", maxLength: 500, nullable: false),
                    clinic_phone1 = table.Column<string>(type: "TEXT", maxLength: 20, nullable: true),
                    clinic_phone2 = table.Column<string>(type: "TEXT", maxLength: 20, nullable: true),
                    clinic_email = table.Column<string>(type: "TEXT", maxLength: 150, nullable: true),
                    clinic_logo = table.Column<byte[]>(type: "BLOB", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clinics", x => x.clinic_ID);
                });

            migrationBuilder.CreateTable(
                name: "conditions",
                columns: table => new
                {
                    condition_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    condition_name = table.Column<string>(type: "TEXT", maxLength: 150, nullable: false),
                    description = table.Column<string>(type: "TEXT", maxLength: 500, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_conditions", x => x.condition_ID);
                });

            migrationBuilder.CreateTable(
                name: "expenses",
                columns: table => new
                {
                    exp_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    expense_name = table.Column<string>(type: "TEXT", maxLength: 150, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_expenses", x => x.exp_ID);
                });

            migrationBuilder.CreateTable(
                name: "labs",
                columns: table => new
                {
                    lab_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    lab_name = table.Column<string>(type: "TEXT", maxLength: 150, nullable: false),
                    phone1 = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false),
                    phone2 = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false),
                    address = table.Column<string>(type: "TEXT", maxLength: 500, nullable: true),
                    lab_manager = table.Column<string>(type: "TEXT", maxLength: 150, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_labs", x => x.lab_ID);
                });

            migrationBuilder.CreateTable(
                name: "medicine_inventory",
                columns: table => new
                {
                    med_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name1 = table.Column<string>(type: "TEXT", maxLength: 150, nullable: false),
                    name2 = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    type = table.Column<string>(type: "TEXT", maxLength: 50, nullable: true),
                    strength = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    qty_in_stock = table.Column<int>(type: "INTEGER", nullable: false),
                    issue_date = table.Column<DateOnly>(type: "TEXT", nullable: true),
                    expire_date = table.Column<DateOnly>(type: "TEXT", nullable: true),
                    dosage = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    unit_price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    notes = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_medicine_inventory", x => x.med_ID);
                });

            migrationBuilder.CreateTable(
                name: "service_requirements",
                columns: table => new
                {
                    requirement_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    req_name = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_service_requirements", x => x.requirement_ID);
                });

            migrationBuilder.CreateTable(
                name: "services",
                columns: table => new
                {
                    service_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    service_name = table.Column<string>(type: "TEXT", maxLength: 150, nullable: false),
                    description = table.Column<string>(type: "TEXT", maxLength: 500, nullable: true),
                    fee = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_services", x => x.service_ID);
                });

            migrationBuilder.CreateTable(
                name: "staff",
                columns: table => new
                {
                    staff_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    firstname = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    lastname = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    hire_date = table.Column<DateOnly>(type: "TEXT", nullable: true),
                    position = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    salary = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    prepayment = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    phone = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false),
                    family_phone1 = table.Column<string>(type: "TEXT", maxLength: 20, nullable: false),
                    family_phone2 = table.Column<string>(type: "TEXT", maxLength: 20, nullable: true),
                    tazkira_ID = table.Column<string>(type: "TEXT", maxLength: 30, nullable: true),
                    photo = table.Column<byte[]>(type: "BLOB", nullable: true),
                    contract_file = table.Column<byte[]>(type: "BLOB", nullable: true),
                    address = table.Column<string>(type: "TEXT", maxLength: 500, nullable: true),
                    file_type = table.Column<string>(type: "TEXT", maxLength: 20, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_staff", x => x.staff_ID);
                });

            migrationBuilder.CreateTable(
                name: "supplies_inventory",
                columns: table => new
                {
                    supply_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(type: "TEXT", maxLength: 150, nullable: true),
                    qty_in_stock = table.Column<int>(type: "INTEGER", nullable: false),
                    unit_price = table.Column<decimal>(type: "decimal(18,2)", maxLength: 50, nullable: true),
                    description = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    reg_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_supplies_inventory", x => x.supply_ID);
                });

            migrationBuilder.CreateTable(
                name: "taxes",
                columns: table => new
                {
                    tax_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    annual_income = table.Column<decimal>(type: "TEXT", maxLength: 150, nullable: false),
                    tax_rate = table.Column<decimal>(type: "TEXT", nullable: false),
                    total_annual_tax = table.Column<decimal>(type: "TEXT", nullable: false),
                    TIN = table.Column<string>(type: "TEXT", maxLength: 150, nullable: false),
                    tax_for_year = table.Column<decimal>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_taxes", x => x.tax_ID);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RoleId = table.Column<string>(type: "TEXT", nullable: false),
                    ClaimType = table.Column<string>(type: "TEXT", nullable: true),
                    ClaimValue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    StaffId = table.Column<int>(type: "INTEGER", nullable: false),
                    UserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    PasswordHash = table.Column<string>(type: "TEXT", nullable: true),
                    SecurityStamp = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_staff_StaffId",
                        column: x => x.StaffId,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "expense_invoices",
                columns: table => new
                {
                    exp_inv_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    file_path = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    created_by = table.Column<int>(type: "INTEGER", nullable: false),
                    invoice_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    notes = table.Column<string>(type: "TEXT", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_expense_invoices", x => x.exp_inv_ID);
                    table.ForeignKey(
                        name: "FK_expense_invoices_staff_created_by",
                        column: x => x.created_by,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "patients",
                columns: table => new
                {
                    pat_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    file_ID = table.Column<string>(type: "TEXT", maxLength: 50, nullable: true),
                    cust_pat_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    staff_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    firstname = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    fathername = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    lastname = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    sex = table.Column<string>(type: "TEXT", maxLength: 10, nullable: false),
                    age = table.Column<int>(type: "INTEGER", nullable: false),
                    marital_status = table.Column<string>(type: "TEXT", maxLength: 30, nullable: true),
                    phone = table.Column<string>(type: "TEXT", maxLength: 20, nullable: true),
                    reg_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    blood_group = table.Column<string>(type: "TEXT", maxLength: 10, nullable: true),
                    address = table.Column<string>(type: "TEXT", maxLength: 500, nullable: true),
                    photo = table.Column<byte[]>(type: "BLOB", nullable: true),
                    sponsor_by = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_patients", x => x.pat_ID);
                    table.ForeignKey(
                        name: "FK_patients_staff_staff_ID",
                        column: x => x.staff_ID,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "tax_pay_ID",
                columns: table => new
                {
                    payment_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    tax_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    paid_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    paid_by = table.Column<int>(type: "INTEGER", nullable: false),
                    paid_amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    due_paid = table.Column<decimal>(type: "TEXT", nullable: false),
                    note = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    modified_at = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tax_pay_ID", x => x.payment_ID);
                    table.ForeignKey(
                        name: "FK_tax_pay_ID_staff_paid_by",
                        column: x => x.paid_by,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_tax_pay_ID_taxes_tax_ID",
                        column: x => x.tax_ID,
                        principalTable: "taxes",
                        principalColumn: "tax_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    ClaimType = table.Column<string>(type: "TEXT", nullable: true),
                    ClaimValue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "TEXT", nullable: false),
                    ProviderKey = table.Column<string>(type: "TEXT", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    RoleId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    LoginProvider = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Value = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "expense_detail",
                columns: table => new
                {
                    exp_detail_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    exp_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    purchased_by = table.Column<int>(type: "INTEGER", nullable: false),
                    item_name = table.Column<string>(type: "TEXT", nullable: false),
                    quantity = table.Column<int>(type: "INTEGER", nullable: false),
                    qty_unit = table.Column<string>(type: "TEXT", nullable: true),
                    unit_price = table.Column<int>(type: "INTEGER", nullable: false),
                    total = table.Column<decimal>(type: "TEXT", nullable: false),
                    purchase_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    invoice = table.Column<string>(type: "TEXT", nullable: true),
                    note = table.Column<string>(type: "TEXT", nullable: true),
                    ExpenseInvoiceId = table.Column<int>(type: "INTEGER", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_expense_detail", x => x.exp_detail_ID);
                    table.ForeignKey(
                        name: "FK_expense_detail_expense_invoices_ExpenseInvoiceId",
                        column: x => x.ExpenseInvoiceId,
                        principalTable: "expense_invoices",
                        principalColumn: "exp_inv_ID");
                    table.ForeignKey(
                        name: "FK_expense_detail_expenses_exp_ID",
                        column: x => x.exp_ID,
                        principalTable: "expenses",
                        principalColumn: "exp_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_expense_detail_staff_purchased_by",
                        column: x => x.purchased_by,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "appointments",
                columns: table => new
                {
                    apt_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    pat_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    service_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    installment = table.Column<int>(type: "INTEGER", nullable: false),
                    round = table.Column<int>(type: "INTEGER", nullable: false),
                    discount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    service_fee = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    total_fee = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    meet_date = table.Column<DateTime>(type: "TEXT", nullable: true),
                    staff_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    status = table.Column<string>(type: "TEXT", maxLength: 50, nullable: true),
                    notification = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    details = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_appointments", x => x.apt_ID);
                    table.ForeignKey(
                        name: "FK_appointments_patients_pat_ID",
                        column: x => x.pat_ID,
                        principalTable: "patients",
                        principalColumn: "pat_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_appointments_services_service_ID",
                        column: x => x.service_ID,
                        principalTable: "services",
                        principalColumn: "service_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_appointments_staff_staff_ID",
                        column: x => x.staff_ID,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "lab_cases",
                columns: table => new
                {
                    case_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    material = table.Column<string>(type: "TEXT", maxLength: 150, nullable: true),
                    patient_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    lab_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    staff_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    case_type = table.Column<int>(type: "INTEGER", nullable: false),
                    case_status = table.Column<string>(type: "TEXT", nullable: false),
                    date_sent = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    date_received = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    quantity = table.Column<decimal>(type: "TEXT", nullable: false),
                    unit_price = table.Column<decimal>(type: "TEXT", nullable: false),
                    total_price = table.Column<decimal>(type: "TEXT", nullable: false),
                    otherService_details = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    notes = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_lab_cases", x => x.case_ID);
                    table.ForeignKey(
                        name: "FK_lab_cases_labs_lab_ID",
                        column: x => x.lab_ID,
                        principalTable: "labs",
                        principalColumn: "lab_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_lab_cases_patients_patient_ID",
                        column: x => x.patient_ID,
                        principalTable: "patients",
                        principalColumn: "pat_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_lab_cases_services_case_type",
                        column: x => x.case_type,
                        principalTable: "services",
                        principalColumn: "service_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_lab_cases_staff_staff_ID",
                        column: x => x.staff_ID,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "medicine_sales",
                columns: table => new
                {
                    msale_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    med_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    patient_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    staff_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    qty_sold = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    sale_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    total_price = table.Column<decimal>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_medicine_sales", x => x.msale_ID);
                    table.ForeignKey(
                        name: "FK_medicine_sales_medicine_inventory_med_ID",
                        column: x => x.med_ID,
                        principalTable: "medicine_inventory",
                        principalColumn: "med_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_medicine_sales_patients_patient_ID",
                        column: x => x.patient_ID,
                        principalTable: "patients",
                        principalColumn: "pat_ID");
                    table.ForeignKey(
                        name: "FK_medicine_sales_staff_staff_ID",
                        column: x => x.staff_ID,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "patient_xrays",
                columns: table => new
                {
                    xray_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    pat_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    xray_name = table.Column<string>(type: "TEXT", maxLength: 150, nullable: false),
                    xray_type = table.Column<string>(type: "TEXT", nullable: false),
                    reg_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    description = table.Column<string>(type: "TEXT", maxLength: 200, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_patient_xrays", x => x.xray_ID);
                    table.ForeignKey(
                        name: "FK_patient_xrays_patients_pat_ID",
                        column: x => x.pat_ID,
                        principalTable: "patients",
                        principalColumn: "pat_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "supplies_sales",
                columns: table => new
                {
                    ssale_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    supply_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    patient_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    staff_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    qty_sold = table.Column<decimal>(type: "TEXT", nullable: false),
                    sale_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    total_price = table.Column<decimal>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_supplies_sales", x => x.ssale_ID);
                    table.ForeignKey(
                        name: "FK_supplies_sales_patients_patient_ID",
                        column: x => x.patient_ID,
                        principalTable: "patients",
                        principalColumn: "pat_ID");
                    table.ForeignKey(
                        name: "FK_supplies_sales_staff_staff_ID",
                        column: x => x.staff_ID,
                        principalTable: "staff",
                        principalColumn: "staff_ID");
                    table.ForeignKey(
                        name: "FK_supplies_sales_supplies_inventory_supply_ID",
                        column: x => x.supply_ID,
                        principalTable: "supplies_inventory",
                        principalColumn: "supply_ID");
                });

            migrationBuilder.CreateTable(
                name: "treatment_plans",
                columns: table => new
                {
                    tp_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    patient_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    staff_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    start_date = table.Column<DateOnly>(type: "TEXT", nullable: true),
                    end_date = table.Column<DateOnly>(type: "TEXT", nullable: true),
                    total_fee = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    installments = table.Column<int>(type: "INTEGER", nullable: false),
                    round = table.Column<int>(type: "INTEGER", nullable: false),
                    status = table.Column<string>(type: "TEXT", maxLength: 50, nullable: true),
                    discount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    notes = table.Column<string>(type: "TEXT", maxLength: 1000, nullable: true),
                    notification = table.Column<string>(type: "TEXT", maxLength: 1000, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_treatment_plans", x => x.tp_ID);
                    table.ForeignKey(
                        name: "FK_treatment_plans_patients_patient_ID",
                        column: x => x.patient_ID,
                        principalTable: "patients",
                        principalColumn: "pat_ID",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK_treatment_plans_staff_staff_ID",
                        column: x => x.staff_ID,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateTable(
                name: "lab_payments",
                columns: table => new
                {
                    lab_payment_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    lab_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    case_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    staff_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    payment_status = table.Column<int>(type: "INTEGER", nullable: false),
                    payment_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    amount_paid = table.Column<decimal>(type: "TEXT", nullable: false),
                    amount_due = table.Column<decimal>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_lab_payments", x => x.lab_payment_ID);
                    table.ForeignKey(
                        name: "FK_lab_payments_lab_cases_case_ID",
                        column: x => x.case_ID,
                        principalTable: "lab_cases",
                        principalColumn: "case_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_lab_payments_labs_lab_ID",
                        column: x => x.lab_ID,
                        principalTable: "labs",
                        principalColumn: "lab_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_lab_payments_staff_staff_ID",
                        column: x => x.staff_ID,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "condition_details",
                columns: table => new
                {
                    condition_detail_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    condition_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    pat_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    severty = table.Column<string>(type: "TEXT", nullable: true),
                    result = table.Column<int>(type: "INTEGER", nullable: false),
                    diagnosis_date = table.Column<DateOnly>(type: "TEXT", nullable: true),
                    TreatmentPlanId = table.Column<int>(type: "INTEGER", nullable: false),
                    notes = table.Column<string>(type: "TEXT", maxLength: 1000, nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_condition_details", x => x.condition_detail_ID);
                    table.ForeignKey(
                        name: "FK_condition_details_conditions_condition_ID",
                        column: x => x.condition_ID,
                        principalTable: "conditions",
                        principalColumn: "condition_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_condition_details_patients_pat_ID",
                        column: x => x.pat_ID,
                        principalTable: "patients",
                        principalColumn: "pat_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_condition_details_treatment_plans_TreatmentPlanId",
                        column: x => x.TreatmentPlanId,
                        principalTable: "treatment_plans",
                        principalColumn: "tp_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "fee_payments",
                columns: table => new
                {
                    payment_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    installment_counter = table.Column<int>(type: "INTEGER", nullable: false),
                    payment_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    paid_amount = table.Column<decimal>(type: "TEXT", nullable: false),
                    due_amount = table.Column<decimal>(type: "TEXT", nullable: false),
                    whole_fee_paid = table.Column<decimal>(type: "TEXT", nullable: false),
                    apt_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    tp_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    staff_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_fee_payments", x => x.payment_ID);
                    table.ForeignKey(
                        name: "FK_fee_payments_appointments_apt_ID",
                        column: x => x.apt_ID,
                        principalTable: "appointments",
                        principalColumn: "apt_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_fee_payments_staff_staff_ID",
                        column: x => x.staff_ID,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_fee_payments_treatment_plans_tp_ID",
                        column: x => x.tp_ID,
                        principalTable: "treatment_plans",
                        principalColumn: "tp_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "patient_services",
                columns: table => new
                {
                    patient_service_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    pat_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    apt_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    tp_ID = table.Column<int>(type: "INTEGER", nullable: true),
                    ser_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    req_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    value = table.Column<string>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_patient_services", x => x.patient_service_ID);
                    table.ForeignKey(
                        name: "FK_patient_services_appointments_apt_ID",
                        column: x => x.apt_ID,
                        principalTable: "appointments",
                        principalColumn: "apt_ID");
                    table.ForeignKey(
                        name: "FK_patient_services_patients_pat_ID",
                        column: x => x.pat_ID,
                        principalTable: "patients",
                        principalColumn: "pat_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_patient_services_service_requirements_req_ID",
                        column: x => x.req_ID,
                        principalTable: "service_requirements",
                        principalColumn: "requirement_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_patient_services_services_ser_ID",
                        column: x => x.ser_ID,
                        principalTable: "services",
                        principalColumn: "service_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_patient_services_treatment_plans_tp_ID",
                        column: x => x.tp_ID,
                        principalTable: "treatment_plans",
                        principalColumn: "tp_ID");
                });

            migrationBuilder.CreateTable(
                name: "plan_services",
                columns: table => new
                {
                    ps_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    tp_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    service_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    service_fee = table.Column<decimal>(type: "TEXT", nullable: false),
                    total_fee = table.Column<decimal>(type: "TEXT", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_plan_services", x => x.ps_ID);
                    table.ForeignKey(
                        name: "FK_plan_services_services_service_ID",
                        column: x => x.service_ID,
                        principalTable: "services",
                        principalColumn: "service_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_plan_services_treatment_plans_tp_ID",
                        column: x => x.tp_ID,
                        principalTable: "treatment_plans",
                        principalColumn: "tp_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "retreatments",
                columns: table => new
                {
                    retreatment_ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    pat_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    apt_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    help_service_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    Damage_service_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    staff_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    tp_ID = table.Column<int>(type: "INTEGER", nullable: false),
                    retreatment_date = table.Column<DateOnly>(type: "TEXT", nullable: false),
                    retreatment_cost = table.Column<decimal>(type: "TEXT", nullable: false),
                    retreatment_outcome = table.Column<string>(type: "TEXT", nullable: false),
                    reason = table.Column<string>(type: "TEXT", maxLength: 100, nullable: true),
                    outcome_details = table.Column<string>(type: "TEXT", maxLength: 200, nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "TEXT", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_retreatments", x => x.retreatment_ID);
                    table.ForeignKey(
                        name: "FK_retreatments_appointments_apt_ID",
                        column: x => x.apt_ID,
                        principalTable: "appointments",
                        principalColumn: "apt_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_retreatments_patients_pat_ID",
                        column: x => x.pat_ID,
                        principalTable: "patients",
                        principalColumn: "pat_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_retreatments_services_Damage_service_ID",
                        column: x => x.Damage_service_ID,
                        principalTable: "services",
                        principalColumn: "service_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_retreatments_staff_staff_ID",
                        column: x => x.staff_ID,
                        principalTable: "staff",
                        principalColumn: "staff_ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_retreatments_treatment_plans_tp_ID",
                        column: x => x.tp_ID,
                        principalTable: "treatment_plans",
                        principalColumn: "tp_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_appointments_pat_ID",
                table: "appointments",
                column: "pat_ID");

            migrationBuilder.CreateIndex(
                name: "IX_appointments_service_ID",
                table: "appointments",
                column: "service_ID");

            migrationBuilder.CreateIndex(
                name: "IX_appointments_staff_ID",
                table: "appointments",
                column: "staff_ID");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_StaffId",
                table: "AspNetUsers",
                column: "StaffId");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_clinics_clinic_email",
                table: "clinics",
                column: "clinic_email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_clinics_clinic_name",
                table: "clinics",
                column: "clinic_name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_condition_details_condition_ID",
                table: "condition_details",
                column: "condition_ID");

            migrationBuilder.CreateIndex(
                name: "IX_condition_details_pat_ID",
                table: "condition_details",
                column: "pat_ID");

            migrationBuilder.CreateIndex(
                name: "IX_condition_details_TreatmentPlanId",
                table: "condition_details",
                column: "TreatmentPlanId");

            migrationBuilder.CreateIndex(
                name: "IX_expense_detail_exp_ID",
                table: "expense_detail",
                column: "exp_ID");

            migrationBuilder.CreateIndex(
                name: "IX_expense_detail_ExpenseInvoiceId",
                table: "expense_detail",
                column: "ExpenseInvoiceId");

            migrationBuilder.CreateIndex(
                name: "IX_expense_detail_purchased_by",
                table: "expense_detail",
                column: "purchased_by");

            migrationBuilder.CreateIndex(
                name: "IX_expense_invoices_created_by",
                table: "expense_invoices",
                column: "created_by");

            migrationBuilder.CreateIndex(
                name: "IX_fee_payments_apt_ID",
                table: "fee_payments",
                column: "apt_ID");

            migrationBuilder.CreateIndex(
                name: "IX_fee_payments_staff_ID",
                table: "fee_payments",
                column: "staff_ID");

            migrationBuilder.CreateIndex(
                name: "IX_fee_payments_tp_ID",
                table: "fee_payments",
                column: "tp_ID");

            migrationBuilder.CreateIndex(
                name: "IX_lab_cases_case_type",
                table: "lab_cases",
                column: "case_type");

            migrationBuilder.CreateIndex(
                name: "IX_lab_cases_lab_ID",
                table: "lab_cases",
                column: "lab_ID");

            migrationBuilder.CreateIndex(
                name: "IX_lab_cases_patient_ID",
                table: "lab_cases",
                column: "patient_ID");

            migrationBuilder.CreateIndex(
                name: "IX_lab_cases_staff_ID",
                table: "lab_cases",
                column: "staff_ID");

            migrationBuilder.CreateIndex(
                name: "IX_lab_payments_case_ID",
                table: "lab_payments",
                column: "case_ID");

            migrationBuilder.CreateIndex(
                name: "IX_lab_payments_lab_ID",
                table: "lab_payments",
                column: "lab_ID");

            migrationBuilder.CreateIndex(
                name: "IX_lab_payments_staff_ID",
                table: "lab_payments",
                column: "staff_ID");

            migrationBuilder.CreateIndex(
                name: "IX_labs_lab_name",
                table: "labs",
                column: "lab_name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_medicine_inventory_name1",
                table: "medicine_inventory",
                column: "name1",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_medicine_sales_med_ID",
                table: "medicine_sales",
                column: "med_ID");

            migrationBuilder.CreateIndex(
                name: "IX_medicine_sales_patient_ID",
                table: "medicine_sales",
                column: "patient_ID");

            migrationBuilder.CreateIndex(
                name: "IX_medicine_sales_staff_ID",
                table: "medicine_sales",
                column: "staff_ID");

            migrationBuilder.CreateIndex(
                name: "IX_patient_services_apt_ID",
                table: "patient_services",
                column: "apt_ID");

            migrationBuilder.CreateIndex(
                name: "IX_patient_services_pat_ID",
                table: "patient_services",
                column: "pat_ID");

            migrationBuilder.CreateIndex(
                name: "IX_patient_services_req_ID",
                table: "patient_services",
                column: "req_ID");

            migrationBuilder.CreateIndex(
                name: "IX_patient_services_ser_ID",
                table: "patient_services",
                column: "ser_ID");

            migrationBuilder.CreateIndex(
                name: "IX_patient_services_tp_ID",
                table: "patient_services",
                column: "tp_ID");

            migrationBuilder.CreateIndex(
                name: "IX_patient_xrays_pat_ID",
                table: "patient_xrays",
                column: "pat_ID");

            migrationBuilder.CreateIndex(
                name: "IX_patients_file_ID",
                table: "patients",
                column: "file_ID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_patients_phone",
                table: "patients",
                column: "phone");

            migrationBuilder.CreateIndex(
                name: "IX_patients_staff_ID",
                table: "patients",
                column: "staff_ID");

            migrationBuilder.CreateIndex(
                name: "IX_plan_services_service_ID",
                table: "plan_services",
                column: "service_ID");

            migrationBuilder.CreateIndex(
                name: "IX_plan_services_tp_ID",
                table: "plan_services",
                column: "tp_ID");

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_apt_ID",
                table: "retreatments",
                column: "apt_ID");

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_Damage_service_ID",
                table: "retreatments",
                column: "Damage_service_ID");

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_pat_ID",
                table: "retreatments",
                column: "pat_ID");

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_staff_ID",
                table: "retreatments",
                column: "staff_ID");

            migrationBuilder.CreateIndex(
                name: "IX_retreatments_tp_ID",
                table: "retreatments",
                column: "tp_ID");

            migrationBuilder.CreateIndex(
                name: "IX_services_service_name",
                table: "services",
                column: "service_name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_staff_phone",
                table: "staff",
                column: "phone",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_staff_tazkira_ID",
                table: "staff",
                column: "tazkira_ID",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_supplies_inventory_name",
                table: "supplies_inventory",
                column: "name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_supplies_sales_patient_ID",
                table: "supplies_sales",
                column: "patient_ID");

            migrationBuilder.CreateIndex(
                name: "IX_supplies_sales_staff_ID",
                table: "supplies_sales",
                column: "staff_ID");

            migrationBuilder.CreateIndex(
                name: "IX_supplies_sales_supply_ID",
                table: "supplies_sales",
                column: "supply_ID");

            migrationBuilder.CreateIndex(
                name: "IX_tax_pay_ID_paid_by",
                table: "tax_pay_ID",
                column: "paid_by");

            migrationBuilder.CreateIndex(
                name: "IX_tax_pay_ID_tax_ID",
                table: "tax_pay_ID",
                column: "tax_ID");

            migrationBuilder.CreateIndex(
                name: "IX_treatment_plans_patient_ID",
                table: "treatment_plans",
                column: "patient_ID");

            migrationBuilder.CreateIndex(
                name: "IX_treatment_plans_staff_ID",
                table: "treatment_plans",
                column: "staff_ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "class_revenues");

            migrationBuilder.DropTable(
                name: "clinics");

            migrationBuilder.DropTable(
                name: "condition_details");

            migrationBuilder.DropTable(
                name: "expense_detail");

            migrationBuilder.DropTable(
                name: "fee_payments");

            migrationBuilder.DropTable(
                name: "lab_payments");

            migrationBuilder.DropTable(
                name: "medicine_sales");

            migrationBuilder.DropTable(
                name: "patient_services");

            migrationBuilder.DropTable(
                name: "patient_xrays");

            migrationBuilder.DropTable(
                name: "plan_services");

            migrationBuilder.DropTable(
                name: "retreatments");

            migrationBuilder.DropTable(
                name: "supplies_sales");

            migrationBuilder.DropTable(
                name: "tax_pay_ID");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "conditions");

            migrationBuilder.DropTable(
                name: "expense_invoices");

            migrationBuilder.DropTable(
                name: "expenses");

            migrationBuilder.DropTable(
                name: "lab_cases");

            migrationBuilder.DropTable(
                name: "medicine_inventory");

            migrationBuilder.DropTable(
                name: "service_requirements");

            migrationBuilder.DropTable(
                name: "appointments");

            migrationBuilder.DropTable(
                name: "treatment_plans");

            migrationBuilder.DropTable(
                name: "supplies_inventory");

            migrationBuilder.DropTable(
                name: "taxes");

            migrationBuilder.DropTable(
                name: "labs");

            migrationBuilder.DropTable(
                name: "services");

            migrationBuilder.DropTable(
                name: "patients");

            migrationBuilder.DropTable(
                name: "staff");
        }
    }
}
