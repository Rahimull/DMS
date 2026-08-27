
import {
    Badge,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";


export const UserColumns= [
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
  accessorKey: "fullName",
  meta: {sticky: "right"},

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نام  مکمل کاربر"
    />
  ),
 enableSorting:true,
},
 
  {
  accessorKey: "userName",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="کابر"
    />
  ),
},
 

  {
  accessorKey: "staffPosition",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نقش کارمند"
    />
  ),
},
  {
  accessorKey: "email",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="ایمیل ادرس"
    />
  ),
},

  {
      accessorKey: "isActive",
      header: ({column})=>(
        <DataTableColumnHeader
          column={column}
          title={"فعال"}
        />
      ),
      cell: ({ row }) => (
        <span
          className={
            row.original.isActive
              ? "text-green-600 font-medium"
              : "text-red-600 font-medium"
          }
        >
          {row.original.isActive ? "Active" : "Inactive"}
        </span>
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