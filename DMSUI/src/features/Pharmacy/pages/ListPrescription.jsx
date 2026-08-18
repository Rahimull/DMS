
import { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTableToolbar } from "@/components/dataTable";

import {
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import useCreateUpdatePrescription from "@/hooks/useCreateUpdatePrescription";
import useLoadData from "@/hooks/useLoadData";

// APIs
import PrescriptionApi from "../api/PerscriptionApi";
import PatientApi from "@/features/patient/api/PatientApi";
import StaffApi from "@/features/staff/api/StaffApi";
import InventoryApi from "@/features/pharmacy/api/InventoryApi";

// Components
import PrescriptionForm from "../form/PrescirptionForm";
import PrescriptionCardList from "../components/PrescriptionCardList";
import PrescriptionPrint from "../components/PrescriptionPrint";

export default function ListPrescription() {
  // ==========================================
  // Filters
  // ==========================================

  const [filterStatus, setFilterStatus] =useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // ==========================================
  // Lookup Data
  // ==========================================

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [medicines, setMedicines] =  useState([]);
  const [lookupLoading, setLookupLoading] = useState(false);

  // ==========================================
  // Filters
  // ==========================================

  const filters = useMemo(
    () => ({
      status: filterStatus,
      fromDate,
      toDate,
    }),
    [
      filterStatus,
      fromDate,
      toDate,
    ]
  );

  // ==========================================
  // Messages
  // ==========================================

  const messages = {
    create:
      "نسخه با موفقیت ثبت شد.",

    update:
      "نسخه با موفقیت ویرایش شد.",

    delete:
      "نسخه با موفقیت حذف شد.",
  };

  // ==========================================
  // Prescription CRUD
  // ==========================================

  const curd =
    useCreateUpdatePrescription(
      PrescriptionApi,
      messages,
      {
        useFormData: false,
        createMethod:
          "createPrescription",
      }
    );

  // ==========================================
  // Prescriptions
  // ==========================================

  const {
    data: prescriptions = [],
    totalCount,
    pagination,
    setPagination,
    search,
    setSearch,
    loading,
  } = useLoadData(
    PrescriptionApi,
    {
      filters,
      refreshKey:
        curd.refreshKey,
    }
  );

  console.log("prescriptions", prescriptions);

  // ==========================================
  // TanStack Table
  // ==========================================

  const table = useReactTable({
    data: prescriptions,
    columns: [],
    getCoreRowModel:
      getCoreRowModel(),
  });

  // ==========================================
  // Normalize API Response
  // ==========================================

  const getArrayData = (response) => {
    if (Array.isArray(response)) {
      return response;
    }

    if (Array.isArray(response?.data)) {
      return response.data;
    }

    if (
      Array.isArray(
        response?.data?.data
      )
    ) {
      return response.data.data;
    }

    return [];
  };

  // ==========================================
  // Load Patients / Doctors / Medicines
  // ==========================================

  useEffect(() => {
    const loadPrescriptionLookups =
      async () => {
        try {
          setLookupLoading(true);

          const [
            patientRes,
            doctorRes,
            medicineRes,
          ] = await Promise.all([
            PatientApi.getAll(),
            StaffApi.getAll(),
            InventoryApi.getAll(),
          ]);

          const patientData =getArrayData(patientRes);
          const doctorData =getArrayData(doctorRes);
          const medicineData =getArrayData(medicineRes);
          setPatients( patientData);
          setDoctors( doctorData);
          setMedicines(medicineData);
         
        } catch (error) {
          console.error("Error loading prescription lookups:",error);
        } finally {
          setLookupLoading(false);
        }
      };

    loadPrescriptionLookups();
  }, []);

  // ==========================================
  // View
  // ==========================================

  const handleView = (
    prescription
  ) => {
    console.log(
      "View Prescription:",
      prescription
    );
  };

  // ==========================================
  // Edit
  // ==========================================

  const handleEdit = (
    prescription
  ) => {
    curd.openEdit(
      prescription
    );
  };

  // ==========================================
  // Delete
  // ==========================================

  const handleDelete = (
    id
  ) => {
    curd.handleDelete(id);
  };

  // ==========================================
  // Create
  // ==========================================

  const handleCreate = () => {
    curd.openCreate({
      prescriptionItems: [],
    });
  };

  // ==========================================
  // Pagination
  // ==========================================

  const totalPages = Math.ceil(
    totalCount /
      pagination.pageSize
  );

  const currentPage =
    pagination.pageIndex + 1;

  const nextPage = () => {
    if (
      currentPage <
      totalPages
    ) {
      setPagination(
        (prev) => ({
          ...prev,
          pageIndex:
            prev.pageIndex + 1,
        })
      );
    }
  };

  const previousPage = () => {
    if (
      currentPage > 1
    ) {
      setPagination(
        (prev) => ({
          ...prev,
          pageIndex:
            prev.pageIndex - 1,
        })
      );
    }
  };

  // ==========================================
  // Render
  // ==========================================
  


useEffect(() => {
  if (!curd.printData) return;

  const timer = setTimeout(() => {
    const printContent =
      document.getElementById("prescription-print");

    if (!printContent) return;

    const printWindow = window.open(
      "",
      "_blank",
      "width=900,height=1000"
    );

    if (!printWindow) return;

    // گرفتن CSS های صفحه اصلی
    const styles = Array.from(
      document.querySelectorAll(
        'link[rel="stylesheet"], style'
      )
    )
      .map((node) => node.outerHTML)
      .join("\n");

    printWindow.document.write(`
      <!DOCTYPE html>

      <html lang="fa" dir="rtl">

      <head>

        <meta charset="UTF-8" />

        <title>نسخه طبی</title>

        ${styles}

        <style>

          @page {
            size: A5 portrait;
            margin: 0;
          }

          * {
            box-sizing: border-box;
          }

          html {
            width: 148mm;
            margin: 0;
            padding: 0;
          }

          body {
            width: 148mm;

            margin: 0;
            padding: 0;

            background: white;

            overflow: visible;
          }

          #prescription-print {
            width: 148mm;

            margin: 0;
            padding: 0;

            overflow: visible;
          }

          .prescription-page {
            width: 148mm !important;

            min-height: 210mm !important;

            height: auto !important;

            margin: 0 !important;
            padding: 0 !important;

            overflow: visible !important;

            box-shadow: none !important;

            page-break-after: auto;
            break-after: auto;
          }

          /* جلوگیری از شکستن بعضی بخش‌ها */

          header,
          section,
          footer {
            break-inside: avoid;
          }

          /* هر دوا در وسط دو صفحه نصف نشود */

          .break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          @media print {

            html,
            body {
              width: 148mm !important;

              margin: 0 !important;
              padding: 0 !important;
            }

            #prescription-print {
              width: 148mm !important;
            }

            .prescription-page {
              width: 148mm !important;

              min-height: 210mm !important;

              height: auto !important;

              overflow: visible !important;
            }

          }

        </style>

      </head>

      <body>

        ${printContent.outerHTML}

      </body>

      </html>
    `);

    printWindow.document.close();

    setTimeout(() => {
      printWindow.focus();

      printWindow.print();

      // کمی تأخیر تا print کامل شود
      setTimeout(() => {
        printWindow.close();
        curd.setPrintData(null);
      }, 500);

    }, 1000);

  }, 300);

  return () => clearTimeout(timer);

}, [curd.printData]);

 const previewData = {
  id: 1001,
  patientId: 1,
  staffId: 1,

  patientName: "احمد محمدی",
  patientAge: 28,
  patientPhone: "0700000000",

  staffName: "دکتر رحیم‌الله",
  prescriptionNumber: "RX-1001",

  prescriptionDate: new Date().toISOString(),

  prescriptionItems: [
    {
      medicineInventoryId: 1,
      dosage: "500mg",
      frequency: "روزانه 2 بار",
      duration: "5 روز",
      route: "خوراکی",
      quantity: 10,
      instructions: "بعد از غذا استفاده شود.",
    },
    {
      medicineInventoryId: 2,
      dosage: "10mg",
      frequency: "روزانه 1 بار",
      duration: "7 روز",
      route: "خوراکی",
      quantity: 7,
      instructions: "قبل از خواب استفاده شود.",
    },
  ],

  notes:
    "در صورت ایجاد حساسیت، مصرف دوا را متوقف کرده و به داکتر مراجعه نمایید.",
};


  // ==========================================
  // Render
  // ==========================================

  return (
    <div
      className="space-y-6"
      dir="rtl"
    >
      {/* ======================================
          Header
      ======================================= */}
     
   

      {/* ======================================
          Toolbar
      ======================================= */}

      <DataTableToolbar
        table={table}
        search={search}
        onSearchChange={
          setSearch
        }
        onRefresh={() => {
          curd.setRefreshKey(
            (x) => x + 1
          );
        }}
        onExport={() =>
          console.log(
            "Export"
          )
        }
        onPrint={() =>
          window.print()
        }
      >
        <Button
          size="sm"
          onClick={
            handleCreate
          }
          disabled={
            lookupLoading
          }
          className="gap-2"
        >
          ثبت نسخه

          <Plus
            size={16}
          />
        </Button>
      </DataTableToolbar>

      {/* ======================================
          Prescription Cards
      ======================================= */}

      <PrescriptionCardList
        prescriptions={prescriptions}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onPrint={(prescription) => {
          curd.setPrintData(prescription);
        }}
      />

      {/* ======================================
          Pagination
      ======================================= */}

      {!loading &&
        prescriptions.length >
          0 &&
        totalPages > 1 && (
          <div
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
            "
          >
            <Button
              variant="outline"
              disabled={
                currentPage <=
                1
              }
              onClick={
                previousPage
              }
            >
              قبلی
            </Button>

            <div className="text-sm text-slate-600">
              صفحه{" "}
              <span className="font-bold">
                {
                  currentPage
                }
              </span>{" "}
              از{" "}
              <span className="font-bold">
                {
                  totalPages
                }
              </span>
            </div>

            <Button
              variant="outline"
              disabled={
                currentPage >=
                totalPages
              }
              onClick={
                nextPage
              }
            >
              بعدی
            </Button>
          </div>
        )}

      {/* ======================================
          Prescription Modal
      ======================================= */}

      <PrescriptionForm
        CURD={curd}
        patients={
          patients
        }
        doctors={
          doctors
        }
        medicines={
          medicines
        }
      />

      {/* ======================================
          Prescription Print
      ======================================= */}

     <div id="prescription-print" className="flex justify-center py-8">
       <PrescriptionPrint
        data={curd.printData || previewData}
        patients={patients}
        doctors={doctors}
        medicines={medicines}
      />
     </div>
    </div>
  );
}

