
import {
    Badge,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const ConditionColumns= [
    
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
      title="نام عارضه"
    />
  ),
 enableSorting:true,
},
 
  {
  accessorKey: "description",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="توضیحات"
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