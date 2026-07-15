import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";

import { ServiceRequirmentColumns } from "@/features/serviceRequirment/columns/ServiceRequirmentColumns";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import ServiceRequirmentForm from "@/features/serviceRequirment/components/ServiceRequirmentForm";
import { ServiceRequirmentActionColumn } from "@/features/serviceRequirment/columns/ServiceRequirmentActionColumn";
import ServiceRequirmentApi from "../api/ServiceRequirmentApi";

export default function ListServiceRequirment() {
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

  const [selectedServiceRequirment, setSelectedServiceRequirment] = useState(null);

  const messages = {
    create: "خدامات با موفقیت ثبت شد.",
    update: "اطلاعات خدامات با موفقیت ویرایش شد.",
    delete: "خدامات با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(ServiceRequirmentApi, messages, {useFormData:false});

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
  } = useLoadData(ServiceRequirmentApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  // Columns
  const columns = useMemo(
    () => [
      ...ServiceRequirmentColumns,

      ServiceRequirmentActionColumn({
        onView: (ServiceRequirment) => {
          console.log("View:", ServiceRequirment);
        },

        onEdit: (ServiceRequirment) => {
          setSelectedServiceRequirment(ServiceRequirment);
          curd.openEdit(ServiceRequirment);
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
      <h2 className="text-3xl font-bold text-slate-800">مدیریت خدامات</h2>

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
            setSelectedServiceRequirment(null);
            curd.openCreate();
          }}
        >
          ثبت خدامات
          <Plus size={16} />
        </Button>
      </DataTableToolbar>

      <DataTable
        table={table}
        loading={loading}
        pageSize={pagination.pageSize}
      />

      <ServiceRequirmentForm CURD={curd} />
    </div>
  );
}
