import DataTableAction from "@/components/dataTable/DataTableAction";


export const ConditionActionColumn = ({
  onView,
  onEdit,
  onDelete,
}) => ({

  id: "actions",

  header: "عملیات",
  meta: {sticky: "left"},

  cell: ({ row }) => (

    <DataTableAction

      row={row}

      onView={onView}

      onEdit={onEdit}

      onDelete={onDelete}

    />

  ),

});