import { Badge, Eye, Pencil, Trash2 } from "lucide-react";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const StaffColumns = [
  {
    accessorKey: "firstName",
    meta: { sticky: "right" },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="اسم " />
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
    accessorKey: "hireDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title=" تاریخ مقرر" />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "position",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="بست" />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "salary",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title=" معاش" />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "prepayment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title=" پیش پرداخت" />
    ),
    enableSorting: true,
  },

  {
    accessorKey: "address",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ادرس " />
    ),
  },

  {
    accessorKey: "phone",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره تماس " />
    ),
  },
  {
    accessorKey: "familyPhone1",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title=" شماره تماس فامیلی اول" />
    ),
  },
  {
    accessorKey: "familyPhone2",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title=" شماره تماس فامیلی دوهم" />
    ),
  },

  {
    accessorKey: "contractFile",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="فایل قرارداد" />
    ),
  },
  {
    accessorKey: "fileType",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نوعیت فایل" />
    ),
  },
  {
    accessorKey: "photo",

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تصویر" />
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
