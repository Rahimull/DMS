
import {
    Badge,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const TreatmentPlanColumns= [
    
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
  accessorKey: "patientId",
  meta: {sticky: "right"},

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نام مریض"
    />
  ),
 enableSorting:true,
},
 
  {
  accessorKey: "staffId",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نام داکتر"
    />
  ),
},
 

  {
  accessorKey: "startDate",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="تاریخ شروع"
    />
  ),
  cell: ({row})=> new Date(row.original.startDate).toLocaleDateString("fa-AF")
},
  {
  accessorKey: "endDate",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="تاریخ ختم"
    />
  ),
  cell: ({row})=> new Date(row.original.startDate).toLocaleDateString("fa-AF")
},
{
  accessorKey: "installments",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="قسط"
    />
  ),
},
{
  accessorKey: "round",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="دوره"
    />
  ),
},
{
  accessorKey: "status",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="حالت"
    />
  ),
},
{
  accessorKey: "discount",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="تخفیف"
    />
  ),
},
{
  accessorKey: "notes",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="یاداشت"
    />
  ),
},
{
  accessorKey: "notification",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="تذکر"
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
    cell: ({row}) => new Date(row.original.createdAt).toLocaleDateString("fa-Af"),

  },


];