import { Badge, Eye, Pencil, Trash2 } from "lucide-react";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const LabColumns = [
  {
    accessorKey: "id",
   
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره " />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "name",
    meta: { sticky: "right" },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نام " />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "phone1",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره تماس " />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "phone2",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره تماس دوهم" />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ادرس" />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "labManger",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="مدیر لب" />
    ),
    enableSorting: true,
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
