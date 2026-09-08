import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";

import { ConditionColumns } from "@/features/condition/columns/ConditionColumns";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import ConditionForm from "@/features/condition/components/ConditionForm";
import { ConditionActionColumn } from "@/features/condition/columns/ConditionActionColumn";
import ConditionApi from "../api/ConditionApi";

export default function ListCondition() {
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

  const [selectedCondition, setSelectedCondition] = useState(null);

  const messages = {
    create: "تشخیص با موفقیت ثبت شد.",
    update: "اطلاعات تشخیص با موفقیت ویرایش شد.",
    delete: "تشخیص با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(ConditionApi, messages, {useFormData:false});

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
  } = useLoadData(ConditionApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  // Columns
  const columns = useMemo(
    () => [
      ...ConditionColumns,

      ConditionActionColumn({
        onView: (Condition) => {
          console.log("View:", Condition);
        },

        onEdit: (Condition) => {
          setSelectedCondition(Condition);
          curd.openEdit(Condition);
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
      <DataTableToolbar
        title="اطلاعات تشخیص"
        description="مدیریت و مشاهده اطلاعات تشخیص"
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
          variant="add"
          onClick={() => {
            setSelectedCondition(null);
            curd.openCreate();
          }}
        >
          ثبت تشخیص
          <Plus size={16} />
        </Button>
      </DataTableToolbar>

      <DataTable
        table={table}
        loading={loading}
        pageSize={pagination.pageSize}
      />

      <ConditionForm CURD={curd} />
    </div>
  );
}
