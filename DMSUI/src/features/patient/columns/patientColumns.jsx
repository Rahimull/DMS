
import {
    Badge,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const patientColumns= [
  {
  accessorKey: "patientCode",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="کد بیمار"
    />
  ),
},
 

  {
    id:"fullName",

    header:({column})=>(
        <DataTableColumnHeader
            column={column}
            title="نام بیمار"
        />
    ),

    accessorFn:(row)=>
        `${row.firstName} ${row.lastName}`,

    filterFn:"includesString",

    cell:({row})=>{

        const patient=row.original;

        return(

            <div>

                <p className="font-semibold">

                    {patient.firstName} {patient.lastName}

                </p>

                <p className="text-xs text-slate-500">

                    {patient.gender}

                </p>

            </div>

        );

    }

},

  {
  accessorKey: "phone",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="شماره تماس"
    />
  ),
},

  {
    accessorKey: "doctor",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="داکتر"
      />
    ),
  },

  {
    accessorKey: "status",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="وضعیت"
      />
    ),

    cell: ({ getValue }) => {

      const status = getValue();

      return (
        <Badge
        //   variant={
        //     status === "Active"
        //       ? "default"
        //       : "secondary"
        //   }
        >
          {status}
        </Badge>
      );
    },
  },

  {
    id: "actions",

    header: "عملیات",

    cell: () => (

      <div className="flex gap-2">

        <button className="rounded-lg p-2 hover:bg-slate-100">

          <Eye size={18} />

        </button>

        <button className="rounded-lg p-2 hover:bg-blue-100 text-blue-600">

          <Pencil size={18} />

        </button>

        <button className="rounded-lg p-2 hover:bg-red-100 text-red-600">

          <Trash2 size={18} />

        </button>

      </div>

    ),
  },
];