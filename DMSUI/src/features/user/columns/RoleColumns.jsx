import {
    Badge,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";


export const RoleColumns= [
  {
    accessorKey: "id",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="شماره"
      />
    ),

  },
  {
  accessorKey: "name",
  meta: {sticky: "right"},

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نام صلاحیت"
    />
  ),
 enableSorting:true,
},
  {
  accessorKey: "normalizedName",
  meta: {sticky: "right"},

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نام نارمل شده"
    />
  ),
 enableSorting:true,
},
 
  {
  accessorKey: "userCount",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="تعداد کارمندان"
    />
  ),
},

  {
    accessorKey: "createdAt",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تاریخ ایجاد"
      />
    
    ),
    cell: ({row}) => new Date(row.original.createdAt).toLocaleDateString("fa-IR"),

  },


];