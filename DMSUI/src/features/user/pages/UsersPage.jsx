import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import UserModal from "./UserModal";
import UserRoleModal from "./UserRoleModel";
import UserApi from "../api/UserApi";
import RolePermissionModal from "./RolePermissionModal";
import { DataTable, DataTableToolbar } from "@/components/dataTable";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";
import { UserColumns } from "../columns/UserColumns";
import { UserActionColumn } from "../columns/UserActionColumn";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";

// بعداً می‌سازیم
// import UserModal from "../components/UserModal";

const UserPage = () => {
//   const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openRoleModal, setOpenRoleModal] = useState(false);
  const [openPermModal, setOpenPermModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  // Tempratry state
  const [users, setUsers] = useState([]);

  const filters = useMemo(()=>
    ({
      status: filterStatus,
      fromDate,
      toDate,
    }),[filterStatus, fromDate, toDate]);


  
   const messages = {
    create: "خدامات با موفقیت ثبت شد.",
    update: "اطلاعات خدامات با موفقیت ویرایش شد.",
    delete: "خدامات با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(UserApi, messages, {useFormData:false});

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
  }=useLoadData(UserApi,{filters, refreshKey: curd.refreshKey});




  const handleCreate = () => {
    setSelectedUser(null);
    setOpenModal(true);
  };
  const handleAssignRole = (row) => {
    setSelectedUser(row);
    setOpenRoleModal(true);
  };

  const handleEdit = (row) => {
    setSelectedUser(row);
    setOpenModal(true);
  };
const handleToggle = async (row) => {
    try {
      await UserApi.toggleStatus(row.id, row.isActive);
      console.log("User Status: ",row.isActive, row.id, row)
      toast.success("User status updated");

      curd.setRefreshKey((x)=> x + 1);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update user status");
    }
  };

  const closeRoleModal = () => {
  setOpenRoleModal(false);
  setSelectedUser(null);
};

const closePermModal = () => {
  setOpenPermModal(false);
  setSelectedRole(null);
};



  const columns = useMemo(()=>[
    ...UserColumns,
    UserActionColumn({
      onView: (user)=>{console.log("View", user);},
      onEdit: (user)=>{
        setSelectedUser(user);
        curd.openEdit(user);
      },
      onRole: (user)=>{handleAssignRole(user)},
      onPermission: (user)=>{
        setSelectedRole(user);
        setOpenPermModal(true);
        console.log("OnPermissions: ", user)
      },
      onStatus: (user)=> {handleToggle(user);},
      onDelete: (id)=>{curd.handleDelete(id);},
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
    <>

        <DataTableToolbar
        title="مدیریت خدامات"
        description="لیست خدمات برای دندان"
        table={table}
        search={search}
        onSearchChange={setSearch}
        onRefresh={() => {curd.setRefreshKey((x) => x + 1);}}
        onExport={() =>console.log("Export")}
        onPrint={() =>window.print()}
      >
        <Button
          size="sm"
          onClick={handleCreate}
          className="gap-1.5"
        >
          ثبت خدمات
          <Plus size={16} />
        </Button>
      </DataTableToolbar>

      <DataTable 
        table={table}
        loading={loading}
        pageSize={pagination.pageSize}
      />

      {/* بعداً اضافه می‌کنیم */}

      <UserModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        user={selectedUser}
        // onSuccess={()=> curd.setRefreshKey((x)=> x + 1)}
      />

      <UserRoleModal
        open={openRoleModal}
        onClose={() => setOpenRoleModal(false)}
        user={selectedUser}
        // onSuccess={()=> curd.setRefreshKey((x)=> x + 1)}
      />

      <RolePermissionModal
        // onSuccess={curd.setRefreshKey((x)=> x + 1)}
        open={openPermModal}
        onClose={() => {
          setOpenPermModal(false);
          setSelectedRole(null);
        }}
        role={selectedRole}
      /> 
    </>
  );
};

export default UserPage;
