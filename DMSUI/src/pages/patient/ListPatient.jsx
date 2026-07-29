import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import PatientApi from "@/features/patient/api/PatientApi";

import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useMemo, useState} from "react";

import { PatientActionColumn } from "@/features/patient/columns/PatientActionColumn";
import { PatientColumns } from "@/features/patient/columns/PatientColumns";
import PatientForm from "@/features/patient/components/PatientForm";
import { useNavigate } from "react-router-dom";
import PatientRegistrationWizard from "./PatientRegistrationWizard";


export default function ListPatient() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const navigate = useNavigate();

  const filters = useMemo(
    () => ({
      status: filterStatus,
      fromDate,
      toDate,
    }),
    [filterStatus, fromDate, toDate],
  );

  const [selectedPatient, setSelectedPatient] = useState(null);

  const messages = {
    create: "بیمار با موفقیت ثبت شد.",
    update: "اطلاعات بیمار با موفقیت ویرایش شد.",
    delete: "بیمار با موفقیت حذف شد.",
  };

  const curd = useCreatUpdateForm(PatientApi, messages, { useFormData: false });

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
  } = useLoadData(PatientApi, {
    filters,
    refreshKey: curd.refreshKey,
  });

 

  // Columns
  // const columns = useMemo(
  //   () => [
  //     ...PatientColumns,

  //     PatientActionColumn({
  //       onView: (Patient) => {
  //         console.log("View:", Patient);
  //         navigate(`/Patient/Details/${Patient.id}`)
  //       },

  //       onEdit: (Patient) => {
  //         setSelectedPatient(Patient);
  //         curd.openEdit(Patient);
  //       },

  //       onDelete: (id) => {
  //         curd.handleDelete(id);
  //       },
  //     }),
  //   ],
  //   [curd],
  // );
//   const columns = useMemo(
// ()=>[

//  ...PatientColumns,


//  PatientActionColumn({

//  onView:(patient)=>{

//  navigate(
//  `/Patient/Details/${patient.id}`
//  );

//  },


//  onEdit:(patient)=>{

//  setSelectedPatient(patient);

//  curd.openEdit(patient);

//  },


//  onDelete:(id)=>{

//  curd.handleDelete(id);

//  }

//  })

// ],
// [navigate,curd]
// );

const columns = useMemo(
  () =>
    PatientColumns({

      onView: (patient) => {
        console.log("View:", patient);

        navigate(
          `/Patient/Details/${patient.id}`
        );
      },


      onEdit: (patient) => {
        setSelectedPatient(patient);

        curd.openEdit(patient);
      },


      onDelete: (id) => {
        curd.handleDelete(id);
      },

    }),

  [navigate, curd]
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


  return (
    <div>
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
        variant="add"
          onClick={()=> 
            navigate("/Patient/PatientRegistration")
          }
        >
         
          <Plus className="size-6" data-icon="inline-end" />
          <span> ثبت بیمار</span>
        </Button>
      </DataTableToolbar>

      <DataTable
        table={table}
        loading={loading}
        pageSize={pagination.pageSize}
       
      />
    </div>
  );
}
