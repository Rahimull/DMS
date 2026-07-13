
import {
    Badge,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const ClinicColumns= [
  {
  accessorKey: "name",
  meta: {sticky: "right"},

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نام کلینیک"
    />
  ),
 enableSorting:true,
},
 
  {
  accessorKey: "address",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="ادرس کلینیک"
    />
  ),
},
 

  {
  accessorKey: "phone1",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="شماره تماس اصلی"
    />
  ),
},
  {
  accessorKey: "phone2",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title=" شماره تماس دوهم"
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