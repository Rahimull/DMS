import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import LabCaseApi from "@/features/LabCase/api/LabCaseApi";
import { LabCaseColumns } from "@/features/LabCase/columns/LabCaseColumns";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import LabCaseForm from "@/features/LabCase/components/LabCaseForm";
import { LabCaseActionColumn } from "@/features/LabCase/columns/LabCaseActionColumn";
import PatientApi from "@/features/patient/api/PatientApi";
import StaffApi from "@/features/staff/api/StaffApi";
import LabApi from "@/features/Lab/api/LabApi";
import { array } from "zod";

export default function ListLabCase() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [labs, setLabs] = useState([]);
  const [lookupLoading, setLookupLoading] = useState(false);

  const filters = useMemo(
    () => ({
      status: filterStatus,
      fromDate,
      toDate,
    }),
    [filterStatus, fromDate, toDate],
  );

  const [selectedLabCase, setSelectedLabCase] = useState(null);

  const messages = {
    create: "کیس لب با موفقیت ثبت شد.",
    update: "اطلاعات کیس لب با موفقیت ویرایش شد.",
    delete: "کیس لب با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(LabCaseApi, messages);

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
  } = useLoadData(LabCaseApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

  // Columns
  const columns = useMemo(
    () => [
      ...LabCaseColumns,

      LabCaseActionColumn({
        onView: (LabCase) => {
          console.log("View:", LabCase);
        },

        onEdit: (LabCase) => {
          setSelectedLabCase(LabCase);
          console.log("LabCase: ", LabCase)
          curd.openEdit(LabCase);
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
    const loadlabCasesLookupData = async () =>{
      try{
        setLookupLoading(true);
        const [patientsData, doctorsData, labsData] = await Promise.all([
          PatientApi.getAll(),
          StaffApi.getAll(),
          LabApi.getAll(),
        ]);
        setPatients(getArrayData(patientsData));
        setDoctors(getArrayData(doctorsData));
        setLabs(getArrayData(labsData));
      } catch (error) {
        console.error("Error fetching lookup data:", error);
      } finally {
        setLookupLoading(false);
      }
    };
    loadlabCasesLookupData();
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
            setSelectedLabCase(null);
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

      <LabCaseForm CURD={curd} patients={patients} doctors={doctors} labs={labs} />
    </div>
  );
}
