import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import StaffApi from "@/features/staff/api/StaffApi";
import { StaffColumns } from "@/features/staff/columns/StaffColumns";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import StaffForm from "@/features/staff/components/StaffForm";
import { StaffActionColumn } from "@/features/staff/columns/StaffActionColumn";

export default function ListStaff() {
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

  const [selectedStaff, setSelectedStaff] = useState(null);

  const messages = {
    create: "کارمند با موفقیت ثبت شد.",
    update: "اطلاعات کارمند با موفقیت ویرایش شد.",
    delete: "کارمند با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(StaffApi, messages, {useFormData:true});

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
  } = useLoadData(StaffApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  // Columns
  const columns = useMemo(
    () => [
      ...StaffColumns,

      StaffActionColumn({
        onView: (Staff) => {
          console.log("View:", Staff);
        },

        onEdit: (Staff) => {
          setSelectedStaff(Staff);
          console.log("Staff: ", Staff)
          curd.openEdit(Staff);
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
      <h2 className="text-3xl font-bold text-slate-800">مدیریت کارمند</h2>

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
            setSelectedStaff(null);
            curd.openCreate();
          }}
        >
          ثبت کارمند
          <Plus size={16} />
        </Button>
      </DataTableToolbar>

      <DataTable
        table={table}
        loading={loading}
        pageSize={pagination.pageSize}
      />

      <StaffForm CURD={curd} />
    </div>
  );
}
