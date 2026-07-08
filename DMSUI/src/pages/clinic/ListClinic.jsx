import {
  DataTable,
  DataTablePagination,
  DataTableToolbar,
} from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import ClinicApi from "@/features/clinic/api/ClinicApi";
import { ClinicColumns } from "@/features/clinic/columns/ClinicColumns";
import { clinic } from "@/features/clinic/data/clinic";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";


import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import CreateClinic from "./CreateClinic";
import ClinicForm from "@/features/clinic/components/ClinicForm";

export default function Listclinic() {
  // const [search, setSearch] = useState("");
  const table = useReactTable({
    data: clinic,
    columns: ClinicColumns,
    getCoreRowModel: getCoreRowModel(),
  });



    // for load data
   // for load data
  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const filters = useMemo(
    () => ({
      status: filterStatus,
      fromDate,
      toDate,
    }),
    [filterStatus, fromDate, toDate],
  );


 const curd = useCreatUpdateForm(ClinicApi);

  const {
    data,
    totalCount,
    pagination,
    setPagination,
    sorting,
    setSorting,
    search,
    setSearch,
    dataLoading,
  } = useLoadData(ClinicApi, { filters, refreshKey:curd.refreshKey });


  console.log("Clinic Data: ",data);





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
            onClick={curd.openCreate}
        >
          ثبت بیمار <Plus size={16} />
        </Button>
      </DataTableToolbar>

     

      <div className="space-y-4">
        <DataTable columns={ClinicColumns} data={clinic} search={search} />
      </div>




    <ClinicForm  CURD={curd}/>
    </div>
  );
}
