import DataTableAction from "@/components/dataTable/DataTableAction";


export const UserActionColumn = ({
  onView,
  onEdit,
  onDelete,
  onRole,
  onPermission,
  onStatus,
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
      onRole={onRole}
      onPermission={onPermission}
      onStatus={onStatus}
      showRole={true}
      showPermission={true}
      showStatus={true}
      
    />

  ),

});