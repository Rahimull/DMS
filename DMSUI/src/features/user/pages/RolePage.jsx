import { useEffect, useState, useMemo } from "react";
import RoleModal from "./RoleModal";
import { toast } from "react-toastify";
import RolesApi from "../api/RolesApi";
import { Button } from "@/components/ui/button";
import RolePermissionModal from "./RolePermissionModal";
import { RoleColumns } from "../columns/RoleColumns";
import { RoleActionColumn } from "../columns/RoleActionColumn";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Plus } from "lucide-react";


const RolePage = () => {
  const [roles, setRoles] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openPermissionModal, setOpenPermissionModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
 
  const loadData = async () => {
    setLoading(true);
    try {
      const res = await RolesApi.getAll();
      setRoles(res.data ?? []);
      setLoading(false)
    } catch (err) {
      console.log(err);
    setLoading(true)
      toast.error("Failed to load roles");
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleCreate = () => {
    setSelectedRole(null);
    setOpenModal(true);
  };
  const handleCreatePermission = () => {
    setSelectedRole(null);
    setOpenPermissionModal(true);
  };

  const handleEdit = (row) => {
    setSelectedRole(row);
    setOpenModal(true);
  };


  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);


  const filters = useMemo(()=>
    ({
      status: filterStatus,
      fromDate,
      toDate,
    }),[filterStatus, fromDate, toDate]);

   const messages = {
    create: "صلاحیت با موفقیت ثبت شد.",
    update: "اطلاعات صلاحیت با موفقیت ویرایش شد.",
    delete: "صلاحیت با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(RolesApi, messages, {useFormData:false});

  const {
    data,
    totalCount,
    pagination,
    setPagination,
    sorting,
    setSorting,
    search,
    setSearch,
    setRefreshKey,
    loading,
    setLoading
  }=useLoadData(RolesApi,{filters, refreshKey: curd.refreshKey});

console.log("api data: ", data)
 
    const columns = useMemo(()=>[
      ...RoleColumns,
      RoleActionColumn({
        onEdit: (role)=>{
          setSelectedRole(role);
          handleEdit(role)
        },
        onDelete: (id)=>{curd.handleDelete(id);},
        onPermission: (role)=>{
          setSelectedRole(role);
          setOpenPermissionModal(true);
          console.log("OnPermissions: ", role)
      },
      })
    ],[curd]);
  
    const table = useReactTable({
      data,
      columns,
  
      getCoreRowModel: getCoreRowModel(),
  
      manualPagination: true,
      manualSorting: true,
  
      pageCount: Math.ceil(totalCount / pagination.pageSize),
  
      state: {
        pagination,
        sorting,
      },
      onPaginationChange: setPagination,
      onSortingChange: (updater)=>{
        setSorting(updater);
        setPagination((prev)=> ({
          ...prev,
          pageIndex: 0
        }));
      },
    });

 

  return (
    <div className="space-y-4">
     


      
        <DataTableToolbar
        title="مدیریت صلاحیت"
        description="لیست صلاحیت برای دندان"
        table={table}
        search={search}
        onSearchChange={setSearch}
        onRefresh={() => {curd.setRefreshKey((x) => x + 1);}}
        onExport={() =>console.log("Export")}
        onPrint={() =>window.print()}
      >
        <Button
          size="sm"
          variant="add"
          onClick={handleCreate}
          className="gap-1.5"
        >
          ثبت صلاحیت
          <Plus size={16} />
        </Button>

       
      </DataTableToolbar>

      <DataTable 
        table={table}
        loading={loading}
        pageSize={pagination.pageSize}
      />


      <RoleModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        role={selectedRole}
        onSuccess={loadData}
      />
      <RolePermissionModal
        open={openPermissionModal}
        onClose={() => setOpenPermissionModal(false)}
        role={selectedRole}
        onSuccess={loadData}
      />
    </div>
  );
};

export default RolePage;