import { DataTable, DataTablePagination, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import { patientColumns } from "@/features/patient/columns/patientColumns";
import { patients } from "@/features/patient/data/patients";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useState } from "react";




export default function ListPatient(){
    const [search, setSearch] = useState("");
    const table = useReactTable({
        data: patients,
        columns: patientColumns,
        getCoreRowModel: getCoreRowModel(),
    });



    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">مدیریت بیماران</h2>
            <DataTableToolbar 
                table={table}
                search={search}
                onSearchChange={setSearch}
                onRefresh={()=> console.log("Referesh")}
                onExport={()=> console.log("Export")}
                onPrint={()=> window.print()}
            >
                <Button 
                    size={"sm"}
                    variant={"default"}
                >
                     ثبت بیمار <Plus size={16} />
                </Button>
           </DataTableToolbar>


           <div className="space-y-4">
            {/* <DataTable 
                columns={patientColumns}
                data={patients}
                search={search}
            /> */}

            <DataTable 
                columns={patientColumns}
                data={patients}
                search={search}
            />
           <DataTablePagination table={table} />
           </div>
        </div>
    );
}