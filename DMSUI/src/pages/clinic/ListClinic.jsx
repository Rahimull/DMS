import { DataTable, DataTableToolbar } from "@/components/dataTable";
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

  const [selectedClinic, setSelectedClinic] = useState(null);

  const messages = {
    create: "کلینیک با موفقیت ثبت شد.",
    update: "اطلاعات کلینیک با موفقیت ویرایش شد.",
    delete: "کلینیک با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(ClinicApi, messages, {useFormData:false});

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
  } = useLoadData(ClinicApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  // Columns
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
    <div className="space-y-2">
      <DataTableToolbar
        title=" اطلاعات کلینیک"
        description="مشاهده و مدریت اطلاعات کلینیک"
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
            setSelectedClinic(null);
            curd.openCreate();
          }}
        >
          ثبت کلینیک
          <Plus size={16} />
        </Button>
      </DataTableToolbar>

      <DataTable
        table={table}
        loading={loading}
        pageSize={pagination.pageSize}
      />

      <ClinicForm CURD={curd} />
    </div>
  );
}
