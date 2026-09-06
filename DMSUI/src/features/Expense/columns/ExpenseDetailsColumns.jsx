
import {
  CalendarDays,
  CircleDollarSign,
  ClipboardList,
  Hash,
  Package,
  Receipt,
  StickyNote,
  UserRound,
} from "lucide-react";

import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

/* =========================================================
   HELPERS
========================================================= */

const formatDate = (value) => {
  if (!value) return "-";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "-";

  return date.toLocaleDateString("fa-IR");
};

const formatCurrency = (value) => {
  if (value === null || value === undefined || value === "") {
    return "-";
  }

  return Number(value).toLocaleString("fa-IR");
};

/* =========================================================
   COLUMNS
========================================================= */

export const ExpenseDetailsColumns = [
  /* =======================================================
     ID
  ======================================================= */

  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="شماره"
      />
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-slate-500">
        <Hash className="h-4 w-4 text-slate-400" />
        {row.original.id}
      </div>
    ),
  },

  /* =======================================================
     EXPENSE NAME / ITEM
  ======================================================= */

  {
    accessorKey: "name",
    meta: {
      sticky: "right",
    },
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="نام مصرف"
      />
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className="flex min-w-[220px] items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-sm">
          <Receipt className="h-4.5 w-4.5" />
        </div>

        <div className="min-w-0">
          <p className="truncate font-semibold text-slate-800">
            {row.original.name || "-"}
          </p>

          <p className="mt-0.5 text-xs text-slate-400">
            مورد مصرف
          </p>
        </div>
      </div>
    ),
  },

  /* =======================================================
     EXPENSE TYPE
  ======================================================= */

  {
    accessorKey: "expenseName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="نوع مصرف"
      />
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className="flex items-center gap-2 whitespace-nowrap">
        <ClipboardList className="h-4 w-4 text-indigo-500" />

        <span className="font-medium text-slate-700">
          {row.original.expenseName || "-"}
        </span>
      </div>
    ),
  },

  /* =======================================================
     STAFF
  ======================================================= */

  {
    accessorKey: "staffName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="خریداری توسط"
      />
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className="flex items-center gap-2 whitespace-nowrap">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <UserRound className="h-4 w-4" />
        </div>

        <span className="text-sm font-medium text-slate-700">
          {row.original.staffName || "-"}
        </span>
      </div>
    ),
  },

  /* =======================================================
     QUANTITY
  ======================================================= */

  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="مقدار"
      />
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-center font-semibold text-slate-700">
        {formatCurrency(row.original.quantity)}
      </div>
    ),
  },

  /* =======================================================
     QUANTITY UNIT
  ======================================================= */

  {
    accessorKey: "quantityUnit",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="واحد"
      />
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <span className="inline-flex whitespace-nowrap rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
        {row.original.quantityUnit || "-"}
      </span>
    ),
  },

  /* =======================================================
     UNIT PRICE
  ======================================================= */

  {
    accessorKey: "unitPrice",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="قیمت واحد"
      />
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5 whitespace-nowrap font-medium text-slate-700">
        <CircleDollarSign className="h-4 w-4 text-amber-500" />

        <span>
          {formatCurrency(row.original.unitPrice)}
        </span>
      </div>
    ),
  },

  /* =======================================================
     TOTAL
  ======================================================= */

  {
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="مجموع"
      />
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className="whitespace-nowrap">
        <span className="rounded-md bg-emerald-50 px-2.5 py-1.5 font-bold text-emerald-700">
          {formatCurrency(row.original.total)}
        </span>
      </div>
    ),
  },

  /* =======================================================
     NOTE
  ======================================================= */

  {
    accessorKey: "note",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="یادداشت"
      />
    ),
    enableSorting: false,
    cell: ({ row }) => (
      <div className="flex max-w-[220px] items-center gap-2">
        <StickyNote className="h-4 w-4 shrink-0 text-slate-400" />

        <span className="truncate text-sm text-slate-500">
          {row.original.note || "-"}
        </span>
      </div>
    ),
  },

  /* =======================================================
     CREATED AT
  ======================================================= */

  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تاریخ ثبت"
      />
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-500">
        <CalendarDays className="h-4 w-4 text-slate-400" />

        {formatDate(row.original.createdAt)}
      </div>
    ),
  },
];

