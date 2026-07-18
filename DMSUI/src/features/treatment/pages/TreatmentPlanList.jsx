import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";

import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import TreatmentPlanApi from "../api/TreatmentPlanApi";
import { TreatmentPlanColumns } from "../columns/TreatmentPlanColumns";
import { TreatmentPlanActionColumn } from "../columns/TreatmentPlanActionColumn";
import { useNavigate } from "react-router-dom";

export default function TreatmentPlanList() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const navigate = useNavigate();

  const filters = useMemo(
    () => ({
      status: filterStatus,
      fromDate,
      toDate,
    }),
    [filterStatus, fromDate, toDate],
  );

  const [selectedTreatmentPlan, setSelectedTreatmentPlan] = useState(null);

  const messages = {
    create: "لیست پلان ها با موفقیت ثبت شد.",
    update: "اطلاعات لیست پلان ها با موفقیت ویرایش شد.",
    delete: "لیست پلان ها با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(TreatmentPlanApi, messages, {useFormData:false});

  const {
    data,
    totalCount,
    pagination,
    setPagination,
    sorting,
    setSorting,
    search,
    setSearch,
    setRefreshKey,
    loading,
  } = useLoadData(TreatmentPlanApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  console.log("Data: ", data);

  // Columns
  const columns = useMemo(
    () => [
      ...TreatmentPlanColumns,

      TreatmentPlanActionColumn({
        onView: (TreatmentPlan) => {
          console.log("View:", TreatmentPlan);
        },

        onEdit: (row) => { navigate(`/treatmentPlan/update/${row.id}`);
        },

        onDelete: (id) => {
          curd.handleDelete(id);
        },
      }),
    ],
    [curd],
  );

  // Table
  const table = useReactTable({
    data,
    columns,

    getCoreRowModel: getCoreRowModel(),

    manualPagination: true,
    manualSorting: true,

    pageCount: Math.ceil(totalCount / pagination.pageSize),

    state: {
      pagination,
      sorting,
    },

    onPaginationChange: setPagination,

    onSortingChange: (updater) => {
      setSorting(updater);

      setPagination((prev) => ({
        ...prev,
        pageIndex: 0,
      }));
    },
  });

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-800">مدیریت لیست پلان ها</h2>

      <DataTableToolbar
        table={table}
        search={search}
        onSearchChange={setSearch}
        onRefresh={() => {
          curd.setRefreshKey((x) => x + 1);
        }}
        onExport={() => console.log("Export")}
        onPrint={() => window.print()}
      >
        <Button
          size="sm"
          onClick={() => {
            setSelectedTreatmentPlan(null);
            curd.openCreate();
          }}
        >
          ثبت لیست پلان ها
          <Plus size={16} />
        </Button>
      </DataTableToolbar>

      <DataTable
        table={table}
        loading={loading}
        pageSize={pagination.pageSize}
      />

    </div>
  );
}
