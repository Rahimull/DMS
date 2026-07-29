import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";
import { PatientActionColumn } from "./PatientActionColumn";

const dateFormat = (value) => {
  if (!value) return "-";

  return new Date(value).toLocaleDateString("fa-AF");
};

export const PatientColumns = ({ onView, onEdit, onDelete }) => [
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
