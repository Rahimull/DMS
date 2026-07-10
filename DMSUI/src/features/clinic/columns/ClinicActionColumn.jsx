import DataTableAction from "@/components/dataTable/DataTableAction";


export const ClinicActionColumn = ({
  onView,
  onEdit,
  onDelete,
}) => ({

  id: "actions",

  header: "عملیات",

  cell: ({ row }) => (

    <DataTableAction

      row={row}

      onView={onView}

      onEdit={onEdit}

      onDelete={onDelete}

    />

  ),

});