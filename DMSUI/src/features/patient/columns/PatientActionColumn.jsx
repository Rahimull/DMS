import DataTableAction from "@/components/dataTable/DataTableAction";


export const PatientActionColumn = ({
  onView,
  onEdit,
  onDelete,
}) => ({
  id: "actions",

  header: () => (
    <div className="text-center">
      عملیات
    </div>
  ),

  enableSorting: false,
  enableHiding: false,

  meta: {
    sticky: "left",
    label: "عملیات",
  },

  size: 120,

  cell: ({ row }) => (
    <div className="flex justify-center">
      <DataTableAction
        row={row}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  ),
});