import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import ExpenseApi from "@/features/Expense/api/ExpenseApi";
import { ExpenseColumns } from "@/features/Expense/columns/ExpenseColumns";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ExpenseForm from "@/features/Expense/components/ExpenseForm";
import { ExpenseActionColumn } from "@/features/Expense/columns/ExpenseActionColumn";
import PatientApi from "@/features/patient/api/PatientApi";
import StaffApi from "@/features/staff/api/StaffApi";
import LabApi from "@/features/Lab/api/LabApi";
import ServiceApi from "@/features/service/api/ServiceApi";
import { useNavigate } from "react-router-dom";


export default function ListExpense() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [labs, setLabs] = useState([]);
  const [services, setServices] = useState([]);
  const [lookupLoading, setLookupLoading] = useState(false);

  const navigate = useNavigate();

  const filters = useMemo(
    () => ({
      status: filterStatus,
      fromDate,
      toDate,
    }),
    [filterStatus, fromDate, toDate],
  );

  const [selectedExpense, setSelectedExpense] = useState(null);

  const messages = {
    create: "کیس لب با موفقیت ثبت شد.",
    update: "اطلاعات کیس لب با موفقیت ویرایش شد.",
    delete: "کیس لب با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(ExpenseApi, messages);

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
  } = useLoadData(ExpenseApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  // Columns
  const columns = useMemo(
    () => [
      ...ExpenseColumns,

      ExpenseActionColumn({
        onView: (Expense) => {
          navigate(`/Expense/view/${Expense.id}`);
          console.log("View:", Expense);
        },

        onEdit: (Expense) => {
          setSelectedExpense(Expense);
          console.log("Expense: ", Expense)
          curd.openEdit(Expense);
        },

        onDelete: (id) => {
          curd.handleDelete(id);
        },
      }),
    ],
    [curd],
  );

  // Table
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

    onSortingChange: (updater) => {
      setSorting(updater);

      setPagination((prev) => ({
        ...prev,
        pageIndex: 0,
      }));
    },
  });

  // ==========================================
  // Load Patients / Doctors / Labs for Select Options
  // ==========================================

  useEffect(() => {
    const loadExpensesLookupData = async () =>{
      try{
        setLookupLoading(true);
        const [patientsData, doctorsData, labsData, servicesData] = await Promise.all([
          PatientApi.getAll(),
          StaffApi.getAll(),
          LabApi.getAll(),
          ServiceApi.getAll(),
        ]);
        setPatients(getArrayData(patientsData));
        setDoctors(getArrayData(doctorsData));
        setLabs(getArrayData(labsData));
        setServices(getArrayData(servicesData));
      } catch (error) {
        console.error("Error fetching lookup data:", error);
      } finally {
        setLookupLoading(false);
      }
    };
    loadExpensesLookupData();
  }, []);

  const getArrayData = (response) => {
    if (Array.isArray(response)) {
      return response;
    }
    if(Array.isArray(response.data)){
      return response.data;
    }
    if (Array.isArray(response.data?.data)) {
      return response.data?.data;
    }
    return [];
  };

  return (
    <div className="space-y-6">
      <DataTableToolbar
        table={table}
        search={search}
        onSearchChange={setSearch}
        onRefresh={() => {
          curd.setRefreshKey((x) => x + 1);
        }}
        onExport={() => console.log("Export")}
        onPrint={() => window.print()}
      >
        <Button
          size="sm"
          onClick={() => {
            setSelectedExpense(null);
            curd.openCreate();
          }}
        >
          ثبت کیس لب
          <Plus size={16} />
        </Button>
      </DataTableToolbar>

      <DataTable
        table={table}
        loading={loading}
        pageSize={pagination.pageSize}
      />

      <ExpenseForm CURD={curd} patients={patients} doctors={doctors} labs={labs} services={services} />
    </div>
  );
}
