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
    create: "گدام دارو با موفقیت ثبت شد.",
    update: "اطلاعات گدام دارو با موفقیت ویرایش شد.",
    delete: "گدام دارو با موفقیت حذف شد.",
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
      <DataTableToolbar
        title="اطلاعات گدام دارو"
        description="مدیریت و مشاهده گدام دارو"
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
            setSelectedInventory(null);
            curd.openCreate();
          }}
        >
          ثبت گدام دارو
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
