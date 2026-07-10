import {
  DataTable,
  DataTableToolbar,
} from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import ClinicApi from "@/features/clinic/api/ClinicApi";
import { ClinicColumns } from "@/features/clinic/columns/ClinicColumns";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import ClinicForm from "@/features/clinic/components/ClinicForm";
import { ClinicActionColumn } from "@/features/clinic/columns/ClinicActionColumn";

export default function Listclinic() {
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

  // Edit and
  const [selectedClinic, setSelectedClinic] = useState(null);

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
  } = useLoadData(ClinicApi, { filters, refreshKey: curd.refreshKey });

  const table = useReactTable({
    data: data,
    columns: ClinicColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log("Data length: ", data.length)

  

  const columns = useMemo(
    () => [
      ...ClinicColumns,

      ClinicActionColumn({
        onView: (clinic) => {
          console.log("View:", clinic);
        },

        onEdit: (clinic) => {
          setSelectedClinic(clinic);
          curd.openEdit(clinic);
        },

        onDelete: (id) => {
          curd.handleDelete(id);
        },
      }),
    ],
    [curd],
  );

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-800">مدیریت کلینیک</h2>
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
          onClick={() => {
            setSelectedClinic(null);
            curd.openCreate();
          }}
        >
          ثبت کلینیک <Plus size={16} />
        </Button>
      </DataTableToolbar>

      <div className="space-y-4">
        <DataTable
          columns={columns}
          data={data}
          search={search}
        />
      </div>

      <ClinicForm CURD={curd} />
    </div>
  );
}
