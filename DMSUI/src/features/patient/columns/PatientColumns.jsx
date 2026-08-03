import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";
import { PatientActionColumn } from "./PatientActionColumn";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import FeePaymentApi from "@/features/feePayment/api/FeePaymentApi";

const dateFormat = (value) => {
  if (!value) return "-";

  return new Date(value).toLocaleDateString("fa-AF");
};


export const PatientColumns = ({ onView, onEdit, onDelete, onOpenPyament }) => [
  {
    accessorKey: "id",

    meta: {
      label: "شماره",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره" />
    ),

    size: 80,

    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "firstName",

    meta: {
      label: "نام",
      sticky: "right",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نام" />
    ),

    enableSorting: true,
  },

  {
    accessorKey: "lastName",

    meta: {
      label: "تخلص",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تخلص" />
    ),
  },

  {
    accessorKey: "fatherName",

    meta: {
      label: "اسم پدر",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="اسم پدر" />
    ),
  },

  {
    accessorKey: "gender",

    meta: {
      label: "جنسیت",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="جنسیت" />
    ),

    cell: ({ row }) => (
      <span
        className="
        rounded-full
        bg-blue-50
        px-3
        py-1
        text-xs
        font-semibold
        text-blue-600
        "
      >
        {row.original.gender}
      </span>
    ),
  },

  {
    accessorKey: "age",

    meta: {
      label: "عمر",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="عمر" />
    ),
  },

  {
    accessorKey: "maritalStatus",

    meta: {
      label: "حالت مدنی",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="حالت مدنی" />
    ),
  },

  {
    accessorKey: "phone",

    meta: {
      label: "شماره تماس",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره تماس" />
    ),
  },

  {
    accessorKey: "address",

    meta: {
      label: "آدرس",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="آدرس" />
    ),
  },
  {
    accessorKey: "totalFee",
    id: "totalFee",

    accessorFn: (row) => {
      return row.appointments?.flatMap((a) => a.totalFee ?? 0)?.at(-1) ?? 0;
    },

    meta: {
      label: "مجموعه فیس ",
    },
    enableSorting: true,

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title=" مجموعه فیس" />
    ),
    cell: ({ row }) => {
      const amount = row.getValue("totalFee") ?? 0;
      return (
        <div className="text-center">
          <span
            className={`
          inline-flex
          items-center
          rounded-full
          px-3
          py-1
          text-xs
          font-bold bg-blue-100 text-blue-700
          
        `}
          >
            {Number(amount).toLocaleString("fa-AF")} افغانی
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "paidAmount",

    meta: {
      label: "پرداخت",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="پرداخت" />
    ),
    cell: ({ row }) => {
      const payment = row.original.appointments
        ?.flatMap((a) => a.feePayments ?? [])
        ?.at(-1);

      const amount = payment?.paidAmount ?? 0;

      return (
        <div className="text-center">
          <span
            className={`
          inline-flex
          items-center
          rounded-full
          px-3
          py-1
          text-xs
          font-bold
          ${
            amount > 0
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-100 text-slate-500"
          }
        `}
          >
            {amount.toLocaleString("fa-AF")} افغانی
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "dueAmount",

    meta: {
      label: "باقی مانده",
    },
    enableSorting: true,

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="باقی مانده" />
    ),
    cell: ({ row }) => {
      const payment = row.original.appointments
        ?.flatMap((a) => a.feePayments ?? [])
        ?.at(-1);

      const amount = payment?.dueAmount ?? 0;

      return (
        <div className="text-center">
          <button
            onClick={()=> onOpenPyament(row.original)}
            disabled={amount <= 0}
            className={`
              inline-flex
              items-center
              rounded-full
              px-3
              py-1
              text-xs
              font-bold
              transition
              ${
                amount > 0
                  ? "bg-red-600 text-red-100 cursor-pointer hover:bg-red-400"
                  : "bg-emerald-100 text-emerald-700"
              }
            `}
          >
            {amount.toLocaleString("fa-AF")} افغانی
          </button>
        </div>
      );
    },
  },

  {
    accessorKey: "bloodGroup",

    meta: {
      label: "گروپ خون",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="گروپ خون" />
    ),

    cell: ({ row }) => (
      <span
        className="
        rounded-full
        bg-red-50
        px-3
        py-1
        text-xs
        font-bold
        text-red-600
        "
      >
        {row.original.bloodGroup || "-"}
      </span>
    ),
  },

  {
    accessorKey: "registrationDate",

    meta: {
      label: "تاریخ ثبت",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تاریخ ثبت" />
    ),

    cell: ({ row }) => dateFormat(row.original.registrationDate),
  },

  {
    accessorKey: "createdAt",

    meta: {
      label: "تاریخ ایجاد",
    },

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تاریخ ایجاد" />
    ),

    cell: ({ row }) => dateFormat(row.original.createdAt),
  },

  PatientActionColumn({
    onView,
    onEdit,
    onDelete,
  }),
];
