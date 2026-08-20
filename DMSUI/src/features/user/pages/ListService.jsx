
import { useMemo, useState } from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTableToolbar } from "@/components/dataTable";

import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import ServiceApi from "../api/PermissionApi";
import ServiceForm from "@/features/service/components/ServiceForm";
import ServiceCardList from "@/features/service/components/ServiceCardList";

import { ServiceColumns } from "@/features/service/columns/ServiceColumns";
import { ServiceActionColumn } from "@/features/service/columns/ServiceActionColumn";

export default function ListService() {
  // ==========================================
  // Filters
  // ==========================================

  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [selectedService, setSelectedService] =
    useState(null);

  const filters = useMemo(
    () => ({
      status: filterStatus,
      fromDate,
      toDate,
    }),
    [filterStatus, fromDate, toDate]
  );

  // ==========================================
  // Messages
  // ==========================================

  const messages = {
    create: "خدمات با موفقیت ثبت شد.",
    update: "اطلاعات خدمات با موفقیت ویرایش شد.",
    delete: "خدمات با موفقیت حذف شد.",
  };

  // ==========================================
  // CRUD
  // ==========================================

  const curd = useCreatUpdateForm(
    ServiceApi,
    messages,
    {
      useFormData: false,
    }
  );

  // ==========================================
  // Load Data
  // ==========================================

  const {
    data = [],
    totalCount,
    pagination,
    setPagination,
    sorting,
    setSorting,
    search,
    setSearch,
    loading,
  } = useLoadData(ServiceApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  // ==========================================
  // Columns
  // ==========================================

  const columns = useMemo(
    () => [
      ...ServiceColumns,

      ServiceActionColumn({
        onView: (service) => {
          console.log("View:", service);
        },

        onEdit: (service) => {
          setSelectedService(service);
          curd.openEdit(service);
        },

        onDelete: (id) => {
          curd.handleDelete(id);
        },
      }),
    ],
    [curd]
  );

  // ==========================================
  // Table
  // فقط برای Toolbar
  // ==========================================

  const table = useReactTable({
    data,
    columns,

    getCoreRowModel:
      getCoreRowModel(),

    manualPagination: true,
    manualSorting: true,

    pageCount: Math.ceil(
      totalCount /
        pagination.pageSize
    ),

    state: {
      pagination,
      sorting,
    },

    onPaginationChange:
      setPagination,

    onSortingChange: (updater) => {
      setSorting(updater);

      setPagination((prev) => ({
        ...prev,
        pageIndex: 0,
      }));
    },
  });

  // ==========================================
  // Create
  // ==========================================

  const handleCreate = () => {
    setSelectedService(null);
    curd.openCreate();
  };

  // ==========================================
  // Edit
  // ==========================================

  const handleEdit = (service) => {
    setSelectedService(service);
    curd.openEdit(service);
  };

  // ==========================================
  // View
  // ==========================================

  const handleView = (service) => {
    console.log(
      "View Service:",
      service
    );
  };

  // ==========================================
  // Delete
  // ==========================================

  const handleDelete = (id) => {
    curd.handleDelete(id);
  };

  // ==========================================
  // Pagination
  // ==========================================

  const totalPages = Math.ceil(
    totalCount /
      pagination.pageSize
  );

  const currentPage =
    pagination.pageIndex + 1;

  const nextPage = () => {
    if (
      currentPage <
      totalPages
    ) {
      setPagination((prev) => ({
        ...prev,
        pageIndex:
          prev.pageIndex + 1,
      }));
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setPagination((prev) => ({
        ...prev,
        pageIndex:
          prev.pageIndex - 1,
      }));
    }
  };

  // ==========================================
  // Render
  // ==========================================

  return (
    <div
      className="space-y-6"
      dir="rtl"
    >
      {/* Header */}

      {/* Toolbar */}

      <DataTableToolbar
        title="مدیریت خدامات"
        description="لیست خدمات برای دندان"
        table={table}
        search={search}
        onSearchChange={setSearch}
        onRefresh={() => {
          curd.setRefreshKey(
            (x) => x + 1
          );
        }}
        onExport={() =>
          console.log("Export")
        }
        onPrint={() =>
          window.print()
        }
      >
        <Button
          size="sm"
          onClick={handleCreate}
          className="gap-1.5"
        >
          ثبت خدمات
          <Plus size={16} />
        </Button>
      </DataTableToolbar>

      {/* Service Cards */}

      <ServiceCardList
        services={data}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Pagination */}

      {!loading &&
        data.length > 0 &&
        totalPages > 1 && (
          <div
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
            "
          >
            <Button
              variant="outline"
              disabled={
                currentPage <= 1
              }
              onClick={
                previousPage
              }
            >
              قبلی
            </Button>

            <div className="text-sm text-slate-600">
              صفحه{" "}
              <span className="font-bold">
                {currentPage}
              </span>{" "}
              از{" "}
              <span className="font-bold">
                {totalPages}
              </span>
            </div>

            <Button
              variant="outline"
              disabled={
                currentPage >=
                totalPages
              }
              onClick={nextPage}
            >
              بعدی
            </Button>
          </div>
        )}

      {/* Form */}

      <ServiceForm
        CURD={curd}
      />
    </div>
  );
}

