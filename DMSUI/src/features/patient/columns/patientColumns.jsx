import { Badge, Eye, Pencil, Trash2 } from "lucide-react";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const PatientColumns = [
  {
    accessorKey: "firstName",
    meta: { sticky: "right" },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نام " />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تخلص " />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "fatherName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="اسم پدر " />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="جنسیت" />
    ),
  },
  {
    accessorKey: "age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="عمر" />
    ),
  },
  {
    accessorKey: "maritalStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="حالت مدنی" />
    ),
  },

  {
    accessorKey: "address",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ادرس بیمار" />
    ),
  },
  {
    accessorKey: "phone",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره تماس اصلی" />
    ),
  },
  {
    accessorKey: "registrationDate",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره تماس اصلی" />
    ),
  },
  {
    accessorKey: "bloodGroup",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title=" شماره تماس دوهم" />
    ),
  },

  {
    accessorKey: "sponsorBy",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ایمیل ادرس" />
    ),
  },
  {
    accessorKey: "createdAt",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تاریخ ایجاد" />
    ),
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleDateString("fa-IR"),
  },
];
