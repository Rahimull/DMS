import { DataTable, DataTableToolbar } from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import PatientApi from "@/features/patient/api/PatientApi";

import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import useLoadData from "@/hooks/useLoadData";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";

import { PatientActionColumn } from "@/features/patient/columns/PatientActionColumn";
import { PatientColumns } from "@/features/patient/columns/PatientColumns";
import PatientForm from "@/features/patient/components/PatientForm";
import { useNavigate } from "react-router-dom";
import PatientRegistrationWizard from "./PatientRegistrationWizard";
import FeePaymentApi from "@/features/feePayment/api/FeePaymentApi";
import FeePaymentForm from "@/features/feePayment/components/FeePaymentForm";

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

  // بخش اپدیت کردن صورت حساب
  const PaymentMessages = {
    create: "پرداخت با موفقیت ثبت شد.",
    update: "اطلاعات پرداخت با موفقیت ویرایش شد.",
    delete: "پرداخت با موفقیت حذف شد.",
  };

  const curdPayment = useCreatUpdateForm(FeePaymentApi, PaymentMessages, {
    useFormData: false,
  });

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

  console.log("Patient Data : ", data);
  const columns = useMemo(
    () =>
      PatientColumns({
        onView: (patient) => {
          console.log("View:", patient);

          navigate(`/Patient/Details/${patient.id}`);
        },

        onEdit: (patient) => {
          setSelectedPatient(patient);

          curd.openEdit(patient);
        },

        onDelete: (id) => {
          curd.handleDelete(id);
        },
        onOpenPyament: (patient) => {
          const appointment = patient.appointments?.at(-1);
          const payment = appointment?.feePayments?.at(-1);

          curdPayment.openEdit({
            patientId: patient.id,
            appointmentId: appointment?.id,
            totalFee: appointment?.totalFee ?? 0,
            dueAmount: payment?.dueAmount ?? 0,
          });
        },
      }),

    [navigate, curd],
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
          onClick={() => navigate("/Patient/PatientRegistration")}
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

      <FeePaymentForm CURD={curdPayment} />
    </div>
  );
}
