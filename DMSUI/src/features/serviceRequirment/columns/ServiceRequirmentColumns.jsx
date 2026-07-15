
import {
    Badge,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const ServiceRequirmentColumns= [
    
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
  accessorKey: "requirmentName",
  meta: {sticky: "right"},

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نام نیازمندی خدامات"
    />
  ),
 enableSorting:true,
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