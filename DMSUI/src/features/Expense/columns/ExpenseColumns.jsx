import {
  BadgeCheck,
  CalendarDays,
  DollarSign,
  DraftingCompass,
  FlaskConical,
  LucideStarOff,
  Package,
  Receipt,
  User2,
  UserCheck,
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

const getStatusStyle = (status) => {
  const normalizedStatus = String(status || "").toLowerCase();

  if (
    normalizedStatus.includes("completed") ||
    normalizedStatus.includes("done") ||
    normalizedStatus.includes("تکمیل")
  ) {
    return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
  }

  if (
    normalizedStatus.includes("pending") ||
    normalizedStatus.includes("در انتظار")
  ) {
    return "bg-amber-50 text-amber-700 ring-amber-600/20";
  }

  if (
    normalizedStatus.includes("cancel") ||
    normalizedStatus.includes("لغو")
  ) {
    return "bg-red-50 text-red-700 ring-red-600/20";
  }

  return "bg-blue-50 text-blue-700 ring-blue-600/20";
};

/* =========================================================
   COLUMNS
========================================================= */

export const ExpenseColumns = [
  /* ================= ID ================= */

  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره" />
    ),

    enableSorting: true,

    cell: ({ row }) => (
      <div className="font-semibold text-slate-600">
        #{row.original.id}
      </div>
    ),
  },

  /* ================= NAME ================= */

 {
  accessorKey: "name",

  meta: {
    sticky: "right",
  },

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title=" نام مصرف"
    />
  ),

  enableSorting: false,

  cell: ({ row }) => {

    return (
      <div className="flex min-w-[180px] items-center gap-3">

        {/* Avatar */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-800 text-white shadow-md shadow-blue-500/20">
          <Receipt size={18} />
        </div>

        {/* Patient Information */}
        <div className="min-w-0">

          <p className="truncate font-bold text-slate-800">
            {row.original.name || "-"}
          </p>

          <p className="mt-0.5 text-xs text-slate-400">
            مصرف
          </p>

        </div>

      </div>
    );
  },
},
  /* ================= cREATED AT ================= */
  {
    accessorKey: "createdAt",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تاریخ ایجاد"
      />
    ),

    enableSorting: true,

    cell: ({ row }) => (
      <div className="whitespace-nowrap text-sm text-slate-500">
        {formatDate(row.original.createdAt)}
      </div>
    ),
  },
];