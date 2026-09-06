import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import ExpenseDetailsApi from "@/features/Expense/api/ExpenseDetailsApi";
import { ExpenseDetailsColumns } from "@/features/Expense/columns/ExpenseDetailsColumns";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ExpenseDetailsForm from "@/features/Expense/components/expenseDetails/ExpenseDetailsForm";
import { ExpenseDetailsActionColumn } from "@/features/Expense/columns/ExpenseDetailsActionColumn";

import { useNavigate } from "react-router-dom";
import ExpenseApi from "../api/ExpenseApi";
import StaffApi from "@/features/staff/api/StaffApi";


export default function ListExpenseDetails() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [expense, setExpense] = useState([]);
  const [staff, setStaff] = useState([]);

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

  const [selectedExpenseDetails, setSelectedExpenseDetails] = useState(null);

  const messages = {
    create: "مصرف با موفقیت ثبت شد.",
    update: "اطلاعات مصرف با موفقیت ویرایش شد.",
    delete: "مصرف با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(ExpenseDetailsApi, messages);

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
  } = useLoadData(ExpenseDetailsApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  // Columns
  const columns = useMemo(
    () => [
      ...ExpenseDetailsColumns,

      ExpenseDetailsActionColumn({
        onView: (ExpenseDetails) => {
          navigate(`/Expense/view/${ExpenseDetails.id}`);
          console.log("View:", ExpenseDetails);
        },

        onEdit: (ExpenseDetails) => {
          setSelectedExpenseDetails(ExpenseDetails);
          console.log("ExpenseDetails: ", ExpenseDetails)
          curd.openEdit(ExpenseDetails);
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
  // Load expense / staff / Labs for Select Options
  // ==========================================

  useEffect(() => {
    const loadExpenseDetailssLookupData = async () =>{
      try{
        setLookupLoading(true);
        const [expenseData, staffData] = await Promise.all([
          ExpenseApi.getAll(),
          StaffApi.getAll(),
        ]);
        setExpense(getArrayData(expenseData));
        setStaff(getArrayData(staffData));
    
      } catch (error) {
      } finally {
        setLookupLoading(false);
      }
    };
    loadExpenseDetailssLookupData();

    console.log("ExpenseDetails Lookup Data:", { expense, staff });
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
        title="لیست مصارف"
        description="لیست مصارف ثبت شده در سیستم"
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
          variant="add"
          onClick={() => {
            setSelectedExpenseDetails(null);
            curd.openCreate();
          }}
        >
          ثبت مصرف
          <Plus size={16} />
        </Button>
      </DataTableToolbar>

      <DataTable
        table={table}
        loading={loading}
        pageSize={pagination.pageSize}
      />

      <ExpenseDetailsForm CURD={curd} expense={expense} staff={staff} />
    </div>
  );
}
