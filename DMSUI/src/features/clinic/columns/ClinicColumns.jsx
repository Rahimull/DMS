
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

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نام کلینیک"
    />
  ),
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
    accessorKey: "founderId",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تمویل کننده"
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

  },

  // {
  //   id: "actions",

  //   header: "عملیات",

  //   cell: () => (

  //     <div className="flex gap-2">

  //       <button className="rounded-lg p-2 hover:bg-slate-100">

  //         <Eye size={18} />

  //       </button>

  //       <button 
  //         className="rounded-lg p-2 hover:bg-blue-100 text-blue-600"
  //         onClick={()=> console.log("Edit")}
        
  //       >

  //         <Pencil size={18} />

  //       </button>

  //       <button className="rounded-lg p-2 hover:bg-red-100 text-red-600">

  //         <Trash2 size={18} />

  //       </button>

  //     </div>

  //   ),
  // },
];