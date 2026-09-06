using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DMSAPI.Migrations
{
    /// <inheritdoc />
    public partial class updateExpenseDetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "item_name",
                table: "expense_detail");

            migrationBuilder.DropColumn(
                name: "purchase_date",
                table: "expense_detail");

            migrationBuilder.AddColumn<string>(
                name: "name",
                table: "expense_detail",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "name",
                table: "expense_detail");

            migrationBuilder.AddColumn<string>(
                name: "item_name",
                table: "expense_detail",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateOnly>(
                name: "purchase_date",
                table: "expense_detail",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));
        }
    }
}
