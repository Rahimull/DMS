import { Badge, Eye, Pencil, Trash2 } from "lucide-react";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const PatientColumns = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره " />
    ),
    enableSorting: true,
  },
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
      <DataTableColumnHeader column={column} title="تاریخ ثبت" />
    ),
    cell: ({row}) => new Date(row.original.registrationDate).toLocaleDateString("Fa-af"),
  },
  {
    accessorKey: "bloodGroup",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="گروپ خون" />
    ),
  },

   {
    accessorKey: "createdAt",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تاریخ ایجاد" />
    ),
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleDateString("fa-af"),
  },
];
