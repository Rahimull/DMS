import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const PrescriptionColumns = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="شماره"
      />
    ),
    enableSorting: true,
  },

  {
    accessorKey: "patient.name",
    meta: { sticky: "right" },

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="نام مریض"
      />
    ),

    cell: ({ row }) => {
      const patient = row.original.patient;

      return (
        patient?.fullName ||
        patient?.name ||
        `${patient?.firstName ?? ""} ${patient?.lastName ?? ""}`.trim() ||
        "-"
      );
    },

    enableSorting: false,
  },

  {
    accessorKey: "staff.name",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="داکتر"
      />
    ),

    cell: ({ row }) => {
      const staff = row.original.staff;

      return (
        staff?.fullName ||
        staff?.name ||
        `${staff?.firstName ?? ""} ${staff?.lastName ?? ""}`.trim() ||
        "-"
      );
    },

    enableSorting: false,
  },

  {
    accessorKey: "prescriptionDate",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تاریخ نسخه"
      />
    ),

    cell: ({ row }) => {
      const date = row.original.prescriptionDate;

      if (!date) return "-";

      return new Date(date).toLocaleDateString("fa-IR");
    },

    enableSorting: true,
  },

  {
    id: "itemsCount",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تعداد دوا"
      />
    ),

    cell: ({ row }) => {
      const items =
        row.original.prescriptionItems ??
        row.original.items ??
        [];

      return items.length;
    },

    enableSorting: false,
  },

  {
    accessorKey: "notes",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="توضیحات"
      />
    ),

    cell: ({ row }) =>
      row.original.notes || "-",
  },

  {
    accessorKey: "createdAt",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تاریخ ایجاد"
      />
    ),

    cell: ({ row }) => {
      const date = row.original.createdAt;

      if (!date) return "-";

      return new Date(date).toLocaleDateString("fa-IR");
    },

    enableSorting: true,
  },
];