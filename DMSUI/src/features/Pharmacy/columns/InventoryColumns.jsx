import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

export const InventoryColumns = [
  {
    accessorKey: "id",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="شماره"
      />
    ),
  },

  {
    accessorKey: "name1",
    meta: { sticky: "right" },

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="نام دوا"
      />
    ),

    enableSorting: true,
  },

  {
    accessorKey: "name2",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="نام تجارتی"
      />
    ),
  },

  {
    accessorKey: "type",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="نوع"
      />
    ),
  },

  {
    accessorKey: "strength",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="قوت"
      />
    ),
  },

  {
    accessorKey: "qtyInStock",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="موجودی"
      />
    ),
  },

  {
    accessorKey: "dosage",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="دوز"
      />
    ),
  },

  {
    accessorKey: "unitPrice",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="قیمت واحد"
      />
    ),
  },

  {
    accessorKey: "issueDate",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تاریخ ورود"
      />
    ),

    cell: ({ row }) =>
      row.original.issueDate
        ? new Date(row.original.issueDate).toLocaleDateString("fa-IR")
        : "-",
  },

  {
    accessorKey: "expireDate",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تاریخ انقضا"
      />
    ),

    cell: ({ row }) =>
      row.original.expireDate
        ? new Date(row.original.expireDate).toLocaleDateString("fa-IR")
        : "-",
  },

  {
    accessorKey: "notes",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="یادداشت"
      />
    ),
  },

  {
    accessorKey: "createdAt",

    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="تاریخ ایجاد"
      />
    ),

    cell: ({ row }) =>
      row.original.createdAt
        ? new Date(row.original.createdAt).toLocaleDateString("fa-IR")
        : "-",
  },
];