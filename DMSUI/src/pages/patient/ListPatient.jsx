import {
  DataTable,
  DataTablePagination,
  DataTableToolbar,
} from "@/components/dataTable";
import FormModal from "@/components/modal/FormModal";
import { Button } from "@/components/ui/button";
import { patientColumns } from "@/features/patient/columns/patientColumns";
import { patients } from "@/features/patient/data/patients";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function ListPatient() {
  const [search, setSearch] = useState("");
  const table = useReactTable({
    data: patients,
    columns: patientColumns,
    getCoreRowModel: getCoreRowModel(),
  });



//   MODAL SECTION
const [open, setOpen] = useState(false);
const [editing, setediting] = useState(null);


const OpenModal = ()=>{
    setOpen(true);
}

const CloseModal = ()=>{
    setOpen(false);

}


const fields =[
      {
        name: "name",
        label: "Name [*,  🔑]",
        type: "text",
        required: true,
        maxLength: 100,
        placeholder:"Suppliers Name"
      },
      {
        name: "contactInfo",
        label: "Contact Information *",
        type: "text",
        placeholder: "Phone / Email",
        maxLength: 50,
        required: true,
      },
      {
        name: "address",
        label: "Address",
        type: "textarea",
      },
    ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-800">مدیریت بیماران</h2>
      <DataTableToolbar
        table={table}
        search={search}
        onSearchChange={setSearch}
        onRefresh={() => console.log("Referesh")}
        onExport={() => console.log("Export")}
        onPrint={() => window.print()}
      >
        <Button 
            size={"sm"} 
            variant={"default"} 
            onClick={()=> openModal()}
        >
          ثبت بیمار <Plus size={16} />
        </Button>
      </DataTableToolbar>

     

      <div className="space-y-4">
        <DataTable columns={patientColumns} data={patients} search={search} />
      </div>



       {/* <FormModal 
            open={()=> setOpen(true)}
            onClose={()=> setOpen(false)}
            fields={fields}
            title={editing ? "Edit Item" : "Add Item"}
            submitText={editing ? "Update Item" : "Add Item"}
       /> */}

      
    </div>
  );
}
