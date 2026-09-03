import {
  BadgeCheck,
  CalendarDays,
  DollarSign,
  DraftingCompass,
  FlaskConical,
  LucideStarOff,
  Package,
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

const formatPrice = (value) => {
  if (value === null || value === undefined) return "-";

  return `${Number(value).toLocaleString("fa-IR")} افغانی`;
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

  /* ================= PATIENT ================= */

 {
  accessorKey: "patientName",

  meta: {
    sticky: "right",
  },

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نام مریض"
    />
  ),

  enableSorting: false,

  cell: ({ row }) => {

    return (
      <div className="flex min-w-[180px] items-center gap-3">

        {/* Avatar */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-800 text-white shadow-md shadow-blue-500/20">
          <UserRound size={18} />
        </div>

        {/* Patient Information */}
        <div className="min-w-0">

          <p className="truncate font-bold text-slate-800">
            {row.original.patientName || "-"}
          </p>

          <p className="mt-0.5 text-xs text-slate-400">
            مریض
          </p>

        </div>

      </div>
    );
  },
},

  /* ================= MATERIAL ================= */

  {
    accessorKey: "material",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="مواد"
      />
    ),

    enableSorting: true,

    cell: ({ row }) => (
      <div className="flex items-center gap-2">

        <Package
          size={16}
          className="text-indigo-500"
        />

        <span className="font-medium text-slate-700">
          {row.original.material || "-"}
        </span>

      </div>
    ),
  },

  /* ================= LAB ================= */

  {
    accessorKey: "labName",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="لابراتوار"
      />
    ),

    enableSorting: true,

    cell: ({ row }) => (
      <div className="flex items-center gap-2">

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <FlaskConical size={16} />
        </div>

        <span className="font-semibold text-slate-700">
          {row.original.labName || "-"}
        </span>

      </div>
    ),
  },

  /* ================= DOCTOR ================= */

   {
  accessorKey: "staffName",

  header: ({ column }) => (
    <DataTableColumnHeader
      column={column}
      title="نام داکتر"
    />
  ),

  enableSorting: true,

  cell: ({ row }) => {
    return (
      <div className="flex min-w-[180px] items-center gap-3">

        {/* Avatar */}
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 via-green-400 to-indigo-900 text-white shadow-md shadow-blue-500/20">
          <UserCheck size={14} />
        </div>

        {/* staff Information */}
        <div className="min-w-0">

          <p className="truncate font-bold text-slate-800">
            {row.original.staffName || "-"}
          </p>

          <p className="mt-0.5 text-xs text-slate-400">
            داکتر مسول
          </p>

        </div>

      </div>
    );
  },
},


  /* ================= CASE TYPE ================= */

  {
    accessorKey: "caseType",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="نوع مورد"
      />
    ),

    enableSorting: true,

    cell: ({ row }) => (
      <span className="inline-flex rounded-lg bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
        {row.original.caseType || "-"}
      </span>
    ),
  },

  /* ================= STATUS ================= */

  {
    accessorKey: "caseStatus",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="وضعیت"
      />
    ),

    enableSorting: true,

    cell: ({ row }) => {
      const status = row.original.caseStatus;

      return (
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ring-inset ${getStatusStyle(
            status
          )}`}
        >
          <BadgeCheck size={14} />

          {status || "نامشخص"}
        </span>
      );
    },
  },

  /* ================= DATE SENT ================= */

  {
    accessorKey: "dateSent",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تاریخ ارسال"
      />
    ),

    enableSorting: true,

    cell: ({ row }) => (
      <div className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-600">

        <CalendarDays
          size={16}
          className="text-blue-500"
        />

        {formatDate(row.original.dateSent)}

      </div>
    ),
  },

  /* ================= DATE RECEIVED ================= */

  {
    accessorKey: "dateReceived",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تاریخ دریافت"
      />
    ),

    enableSorting: true,

    cell: ({ row }) => (
      <div className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-600">

        <CalendarDays
          size={16}
          className="text-emerald-500"
        />

        {formatDate(row.original.dateReceived)}

      </div>
    ),
  },

  /* ================= QUANTITY ================= */

  {
    accessorKey: "quantity",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تعداد"
      />
    ),

    enableSorting: true,

    cell: ({ row }) => (
      <div className="text-center">

        <span className="inline-flex min-w-10 items-center justify-center rounded-lg bg-slate-100 px-3 py-1 font-bold text-slate-700">
          {row.original.quantity ?? 0}
        </span>

      </div>
    ),
  },

  /* ================= UNIT PRICE ================= */

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
      <div className="flex items-center gap-1.5 whitespace-nowrap font-semibold text-slate-700">

        <DollarSign
          size={15}
          className="text-blue-500"
        />

        {formatPrice(row.original.unitPrice)}

      </div>
    ),
  },

  /* ================= TOTAL PRICE ================= */

  {
    accessorKey: "totalPrice",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="قیمت مجموعی"
      />
    ),

    enableSorting: true,

    cell: ({ row }) => (
      <div className="whitespace-nowrap">

        <span className="rounded-lg bg-gradient-to-l from-blue-50 to-indigo-50 px-3 py-1.5 text-sm font-black text-blue-700">

          {formatPrice(row.original.totalPrice)}

        </span>

      </div>
    ),
  },

  /* ================= OTHER SERVICES ================= */

  {
    accessorKey: "otherServiceDetails",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="جزئیات خدمات دیگر"
      />
    ),

    enableSorting: false,

    cell: ({ row }) => (
      <p
        className="max-w-[250px] truncate text-sm text-slate-500"
        title={row.original.otherServiceDetails}
      >
        {row.original.otherServiceDetails || "-"}
      </p>
    ),
  },

  /* ================= CREATED AT ================= */

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