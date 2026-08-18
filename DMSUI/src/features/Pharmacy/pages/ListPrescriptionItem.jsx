import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";


import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";

import PrescriptionItemApi from "../api/PerscriptionApi";
import PrescriptionItemForm from "../form/PrescirptionItemForm";
import { PrescriptionItemColumns } from "../columns/PrescriptionItemColumns";
import { PrescriptionItemActionColumn } from "../columns/PrescriptionItemActionColumn";


export default function ListPrescriptionItem() {
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

  const [selectedPrescriptionItem, setSelectedPrescriptionItem] = useState(null);

  const messages = {
    create: "خدامات با موفقیت ثبت شد.",
    update: "اطلاعات خدامات با موفقیت ویرایش شد.",
    delete: "خدامات با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(PrescriptionItemApi, messages, {useFormData:false});

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
  } = useLoadData(PrescriptionItemApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  // Columns
  const columns = useMemo(
    () => [
      ...PrescriptionItemColumns,

      PrescriptionItemActionColumn({
        onView: (PrescriptionItem) => {
          console.log("View:", PrescriptionItem);
        },

        onEdit: (PrescriptionItem) => {
          setSelectedPrescriptionItem(PrescriptionItem);
          curd.openEdit(PrescriptionItem);
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
            setSelectedPrescriptionItem(null);
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

      <PrescriptionItemForm CURD={curd} />
    </div>
  );
}
