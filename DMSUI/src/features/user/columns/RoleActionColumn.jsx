import DataTableAction from "@/components/dataTable/DataTableAction";


export const RoleActionColumn = ({
  onEdit,
  onDelete,
  onPermission,
}) => ({

  id: "actions",

  header: "عملیات",
  meta: {sticky: "left"},

  cell: ({ row }) => (

    <DataTableAction
      row={row}
      onEdit={onEdit}
      onDelete={onDelete}
      onPermission={onPermission}
      showPermission={true}
    />

  ),

});