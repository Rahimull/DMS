import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";


import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";

import InventoryApi from "../api/InventoryApi";
import InventoryForm from "../form/InventoryForm";
import { InventoryColumns } from "../columns/InventoryColumns";
import { InventoryActionColumn } from "../columns/InventoryActionColumn";


export default function ListInventory() {
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

  const [selectedInventory, setSelectedInventory] = useState(null);

  const messages = {
    create: "خدامات با موفقیت ثبت شد.",
    update: "اطلاعات خدامات با موفقیت ویرایش شد.",
    delete: "خدامات با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(InventoryApi, messages, {useFormData:false});

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
  } = useLoadData(InventoryApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  // Columns
  const columns = useMemo(
    () => [
      ...InventoryColumns,

      InventoryActionColumn({
        onView: (Inventory) => {
          console.log("View:", Inventory);
        },

        onEdit: (Inventory) => {
          setSelectedInventory(Inventory);
          curd.openEdit(Inventory);
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
            setSelectedInventory(null);
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

      <InventoryForm CURD={curd} columns="2" />
    </div>
  );
}
