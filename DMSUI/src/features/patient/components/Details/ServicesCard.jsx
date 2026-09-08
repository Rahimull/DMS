
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Activity,
  ChevronDown,
  ChevronUp,
  CircleCheck,
  Plus,
  Stethoscope,
  Wallet,
} from "lucide-react";

import { useState, useEffect } from "react";
import usePatientDetails from "../../hooks/usePatientDetails";
import PatientServiceApi from "@/features/treatment/api/PatientServiceApi";
import ServiceApi from "@/features/service/api/ServiceApi";
import PatientServiceForm from "@/features/PatientService/components/PatientServiceForm";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import ServiceRequirmentApi from "@/features/serviceRequirment/api/ServiceRequirmentApi";
import ServiceSelectionStep from "../ServiceSelectionStep";
import usePatientRegistrationWizard from "../../hooks/usePatientRegistrationWizard";

export default function ServicesCard({patient}) {
  const [openServices, setOpenServices] = useState(false);
  const [serviceData, setServiceData] = useState([]);
  const [serviceRequirementData, setServiceRequirementData] = useState([]);


    const {
      step,
      formData,
      errors,
  
      updateSection,
      updateValue,
  
      nextStep,
      prevStep,
  
      isFirstStep,
      isLastStep,
  
      validateCurrentStep,
    } = usePatientRegistrationWizard();
  

  const { 
    patient : currentPatient,
    refreshPatient,
   } = usePatientDetails();

  const services = currentPatient?.patientServices ??  patient?.patientServices ?? [];

   const patientServiceMessages = {
    create: "خدمات با موفقیت ثبت شد.",
    update: "اطلاعات خدمات با موفقیت ویرایش شد.",
    delete: "خدمات با موفقیت حذف شد.",
  };

 
  const crudPatientService = useCreatUpdateForm(
    PatientServiceApi,
    patientServiceMessages,
    {
      useFormData: false,
      onSuccess: refreshPatient,
    }
);
// =========================================================
  // CREATE
  // =========================================================

  const handleCreatePatientService = () => {
    crudPatientService.openCreate({
      patientId: patient?.id,
    });
  };

  // =========================================================
  // EDIT
  // =========================================================
  const handleEditpatientService = (patientService) => {
    crudPatientService.openEdit(patientService)
  };

  // =========================================================
  // DELETE
  // =========================================================

  const handleDeletepatientService = async (id) => {
    await crudPatientService.handleDelete(id);
  };



   // =========================================================
  // LOAD CONIDTION DATA FOR CREATE
  // =========================================================
  useEffect(()=>{
    const loadCondationData = async () =>{
      try{
        const [serviceData, serviceRequirementData] = await Promise.all([
          ServiceApi.getAll(),
          ServiceRequirmentApi.getAll(),
        ]);
        setServiceData(getArrayData(serviceData));
        setServiceRequirementData(getArrayData(serviceRequirementData))
      }
      catch(err){
        console.log("Error Fetching Conditio data:", err);
      }
      finally{
        console.log("Finally")
      }
    };
    loadCondationData();
  },[])


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




  const getDoctor = (appointmentId) => {
    const appointment = patient?.appointments?.find(
      (a) => a.id === appointmentId
    );

    if (!appointment?.staff) return "-";

    return `${appointment.staff.firstName ?? ""} ${
      appointment.staff.lastName ?? ""
    }`.trim();
  };

  const totalAmount = services.reduce(
    (total, item) => total + (item.service?.fee ?? 0),
    0
  );

  return (
    <Card className="mt-4 overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-white via-sky-50 to-indigo-100 shadow-lg">
      <CardContent className="p-0">

        {/* ================= HEADER ================= */}
        <div
          className="cursor-pointer border-b border-slate-200/70 bg-white/70 px-5 py-4 backdrop-blur"
          onClick={() => setOpenServices((prev) => !prev)}
        >
          <div className="flex items-center justify-between gap-4">

            {/* Title */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-200">
                <Stethoscope className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-slate-800 sm:text-lg">
                    خدمات درمانی
                  </h2>

                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-bold text-blue-700">
                    {services.length}
                  </span>
                </div>

                <p className="mt-0.5 text-xs text-slate-400">
                  خدمات درمانی ثبت‌شده برای بیمار
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2">

              <Button
                type="button"
                size="sm"
                variant="add"
                className="h-9 rounded-xl px-3 shadow-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCreatePatientService();

                   
                }}
              >
                <Plus className="h-4 w-4 sm:mr-1.5" />

                <span className="hidden sm:inline">
                  افزودن خدمت
                </span>
              </Button>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200">
                {openServices ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        {openServices && (
          <div className="p-5">

            {/* Summary */}
            {services.length > 0 && (
              <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Activity className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[11px] text-slate-400">
                      تعداد خدمات
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-700">
                      {services.length}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <Wallet className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-[11px] text-slate-400">
                      مجموع هزینه
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-700">
                      {totalAmount.toLocaleString()}{" "}
                      <span className="text-xs font-medium text-slate-400">
                        AFN
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TABLE ================= */}
            {services.length > 0 ? (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px]">

                    {/* Header */}
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/80">
                        <th className="px-5 py-3.5 text-right text-xs font-bold text-slate-500">
                          خدمت
                        </th>

                        <th className="px-5 py-3.5 text-right text-xs font-bold text-slate-500">
                          داکتر
                        </th>

                        <th className="px-5 py-3.5 text-right text-xs font-bold text-slate-500">
                          هزینه
                        </th>

                        <th className="px-5 py-3.5 text-right text-xs font-bold text-slate-500">
                          وضعیت
                        </th>
                      </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="divide-y divide-slate-100">
                      {services.map((service) => {
                        const doctor = getDoctor(service.appointmentId);

                        return (
                          <tr
                            key={service.id}
                            className="group transition-colors hover:bg-blue-50/40"
                          >

                            {/* Service */}
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                                  <Activity className="h-4 w-4" />
                                </div>

                                <div>
                                  <p className="text-sm font-bold text-slate-700">
                                    {service.service?.name ?? "-"}
                                  </p>

                                  <p className="mt-0.5 text-[10px] text-slate-400">
                                    خدمت #{service.id}
                                  </p>
                                </div>
                              </div>
                            </td>

                            {/* Doctor */}
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                  <Stethoscope className="h-3.5 w-3.5" />
                                </div>

                                <span className="text-sm font-medium text-slate-600">
                                  {doctor}
                                </span>
                              </div>
                            </td>

                            {/* Price */}
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-1">
                                <span className="text-sm font-bold text-slate-700">
                                  {(
                                    service.service?.fee ?? 0
                                  ).toLocaleString()}
                                </span>

                                <span className="text-[10px] font-medium text-slate-400">
                                  AFN
                                </span>
                              </div>
                            </td>

                            {/* Status */}
                            <td className="px-5 py-4">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-700">
                                <CircleCheck className="h-3.5 w-3.5" />
                                انجام شد
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-5 py-3">
                  <span className="text-xs text-slate-400">
                    مجموع خدمات
                  </span>

                  <div className="text-sm font-bold text-blue-600">
                    {totalAmount.toLocaleString()}{" "}
                    <span className="text-xs font-medium text-slate-400">
                      AFN
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* ================= EMPTY STATE ================= */
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white/70 px-6 py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
                  <Stethoscope className="h-7 w-7" />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-700">
                  هنوز خدمتی ثبت نشده است
                </h3>

                <p className="mx-auto mt-1 max-w-sm text-xs leading-5 text-slate-400">
                  برای این بیمار هنوز هیچ خدمت درمانی ثبت نشده است.
                  برای ثبت خدمت جدید روی دکمه افزودن خدمت کلیک کنید.
                </p>

                <Button
                  type="button"
                  variant="add"
                  className="mt-5 rounded-xl"
                  onClick={() => {
                    // Add service
                  }}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  افزودن خدمت
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>

      <PatientServiceForm
       CURD={crudPatientService}
       patient={currentPatient ?? patient}
       services={serviceData}
       serviceRequirment={serviceRequirementData}
      />

     
    </Card>
  );
}
