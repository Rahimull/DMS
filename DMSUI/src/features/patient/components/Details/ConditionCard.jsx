import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ConditionApi from "@/features/condition/api/ConditionApi";
import ConditionDetailsForm from "@/features/ConditionDetails/components/ConditionDetailsForm";
import { patients } from "@/features/dashboard/data/patients";
import usePatientDetails from "@/features/patient/hooks/usePatientDetails";
import ConditionDetailApi from "@/features/treatment/api/ConditionDetailApi";
import useCreatUpdateForm from "@/hooks/useCreateEditFrom";
import {
  Activity,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  FileText,
  Pencil,
  Plus,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";


export default function ConditionCard({patient}) {
  const [openConditionDetails, setOpenConditionDetails] = useState(true);
  const [conditionData, setConditionData] = useState([]);

  const {
    patient: currentPatient,
    refreshPatient,
  } = usePatientDetails();


  const conditions = currentPatient?.conditionDetails ?? patient?.conditionDetails ?? [];

  const conditionDetailsMessages = {
    create: "امراض با موفقیت ثبت شد.",
    update: "اطلاعات امراض با موفقیت ویرایش شد.",
    delete: "امراض با موفقیت حذف شد.",
  };

  const crudConditionDetails = useCreatUpdateForm(
    ConditionDetailApi,
    conditionDetailsMessages,
    {
      useFormData: false,
      onSuccess: refreshPatient,
    }
);
// =========================================================
  // CREATE
  // =========================================================

  const handleCreateConditionDetails = () => {
    crudConditionDetails.openCreate({
      patientId: patient?.id,
    });
  };

  // =========================================================
  // EDIT
  // =========================================================
  const handleEditConditionDetails = (ConditionDetails) => {
    crudConditionDetails.openEdit(ConditionDetails)
  };

  // =========================================================
  // DELETE
  // =========================================================

  const handleDeleteConditionDetails = async (id) => {
    await crudConditionDetails.handleDelete(id);
  };



   // =========================================================
  // LOAD CONIDTION DATA FOR CREATE
  // =========================================================
  useEffect(()=>{
    const loadCondationData = async () =>{
      try{
        const [conditionData] = await Promise.all([
          ConditionApi.getAll(),
        ]);
        setConditionData(getArrayData(conditionData));
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







  return (
    <Card className="mt-4 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm">
      <CardContent className="p-0">

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}
        <div className="relative overflow-hidden border-b border-slate-200
         bg-gradient-to-r from-blue-50 via-white to-indigo-50">

          {/* Decorative background */}
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-200/20 blur-2xl" />
          <div className="absolute -bottom-10 left-20 h-24 w-24 rounded-full bg-indigo-200/20 blur-2xl" />

          <div className="relative flex items-center justify-between px-5 py-4 sm:px-6">
            {/* Left */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-200">
                <Activity className="h-5 w-5" />
              </div>

              <div className="min-w-0 cursor-pointer" 
                onClick={()=> setOpenConditionDetails(!openConditionDetails)}
              >
                <div className="flex items-center gap-2">
                  <h2 className="truncate text-base font-bold text-slate-800 sm:text-lg">
                    سوابق بیماری‌ها
                  </h2>

                  <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-100 px-2 text-xs font-bold text-blue-700">
                    {conditions.length}
                  </span>
                </div>

                <p className="mt-0.5 hidden text-xs text-slate-500 sm:block">
                  سوابق و وضعیت بیماری‌های ثبت‌شده بیمار
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="sm"
                variant="add"
                className="h-9 rounded-full px-3 shadow-sm"
                onClick={() => {
                  // Add condition
                  handleCreateConditionDetails();
                }}
              >
                <Plus className="h-4 w-4" />
                
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-xl border border-slate-200 bg-white/80 text-slate-500 hover:bg-white hover:text-blue-600"
                onClick={() =>
                  setOpenConditionDetails(!openConditionDetails)
                }
              >
                {openConditionDetails ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        {openConditionDetails && (
          <div className="p-4 sm:p-5">
            {/* ================= EMPTY STATE ================= */}
            {conditions.length === 0 ? (
              <div className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-blue-50/40 px-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <ShieldCheck className="h-8 w-8" />
                </div>

                <h3 className="text-base font-bold text-slate-700">
                  سابقه بیماری ثبت نشده است
                </h3>

                <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
                  برای ثبت سوابق بیماری بیمار، روی دکمه «ثبت سابقه»
                  کلیک کنید.
                </p>

                <Button
                  type="button"
                  variant="add"
                  className="mt-5 rounded-xl"
                  onClick={() => {
                    // Add condition
                  }}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  ثبت اولین سابقه
                </Button>
              </div>
            ) : (
              /* ================= CONDITIONS GRID ================= */


              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                {conditions.map((item) => {
                  const isPositive = item.result === 1;

                  return (
                    <Card
                      key={item.id}
                      className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                    >
                      <CardContent className="p-0">
                        {/* ================= HEADER ================= */}
                        <div className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 pb-5 pt-5">
                          {/* Decorative */}
                          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/50 blur-2xl" />
                          <div className="absolute -bottom-10 left-10 h-20 w-20 rounded-full bg-indigo-100/40 blur-2xl" />

                          <div className="relative flex items-start justify-between gap-3">
                            {/* Disease */}
                            <div className="flex min-w-0 items-center gap-3">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-100">
                                <Activity className="h-6 w-6" />
                              </div>

                              <div className="min-w-0">
                                <p className="mb-1 text-[10px] font-medium text-slate-400">
                                  سابقه پزشکی
                                </p>

                                <h3
                                  className="truncate text-base font-bold text-slate-800"
                                  title={item.condition?.name}
                                >
                                  {item.condition?.name || "بیماری نامشخص"}
                                </h3>
                              </div>
                            </div>

                            {/* ID */}
                            <span className="shrink-0 rounded-lg bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-400 shadow-sm ring-1 ring-slate-100">
                              #{item.id}
                            </span>
                          </div>

                          {/* Status */}
                          <div className="relative mt-5 flex items-center justify-between">
                            <div
                              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold ${
                                isPositive
                                  ? "bg-rose-100 text-rose-700"
                                  : "bg-emerald-100 text-emerald-700"
                              }`}
                            >
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  isPositive ? "bg-rose-500" : "bg-emerald-500"
                                }`}
                              />

                              {isPositive ? "مثبت" : "منفی"}
                            </div>

                            <span className="text-[10px] font-medium text-slate-400">
                              وضعیت بیماری
                            </span>
                          </div>
                        </div>

                        {/* ================= BODY ================= */}
                        <div className="p-5">
                          {/* Information */}
                          <div className="grid grid-cols-2 gap-3">
                            {/* Severity */}
                            <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition-colors group-hover:bg-blue-50/40">
                              <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                                  <Activity className="h-4 w-4" />
                                </div>

                                <span className="text-[11px] font-medium text-slate-400">
                                  شدت
                                </span>
                              </div>

                              <p className="mt-2 truncate text-sm font-bold text-slate-700">
                                {item.severty || "-"}
                              </p>
                            </div>

                            {/* Diagnosis Date */}
                            <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 transition-colors group-hover:bg-indigo-50/40">
                              <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                                  <CalendarDays className="h-4 w-4" />
                                </div>

                                <span className="text-[11px] font-medium text-slate-400">
                                  تشخیص
                                </span>
                              </div>

                              <p className="mt-2 truncate text-xs font-bold text-slate-700">
                                {item.daignosisDate || "-"}
                              </p>
                            </div>
                          </div>

                          {/* ================= NOTES ================= */}
                          <div className="mt-4 rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/40 p-4">
                            <div className="mb-2 flex items-center gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
                                <FileText className="h-4 w-4" />
                              </div>

                              <div>
                                <p className="text-xs font-bold text-slate-600">
                                  یادداشت پزشک
                                </p>

                                <p className="text-[10px] text-slate-400">
                                  توضیحات مربوط به سابقه
                                </p>
                              </div>
                            </div>

                            <p className="line-clamp-3 min-h-[54px] text-xs leading-5 text-slate-600">
                              {item.notes ||
                                "برای این سابقه بیماری یادداشتی ثبت نشده است."}
                            </p>
                          </div>

                          {/* ================= ACTIONS ================= */}
                          <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
                            {/* Edit */}
                            <Button
                              type="button"
                              variant="outline"
                              className="h-9 flex-1 rounded-xl border-blue-200 bg-blue-50/50 text-xs font-semibold text-blue-600 transition-all hover:border-blue-300 hover:bg-blue-100 hover:text-blue-700"
                              onClick={() => {
                                handleEditConditionDetails(item);
                              }}
                            >
                              <Pencil className="mr-2 h-3.5 w-3.5" />
                              ویرایش
                            </Button>

                            {/* Delete */}
                            <Button
                              type="button"
                              variant="outline"
                              className="h-9 flex-1 rounded-xl border-rose-200 bg-rose-50/50 text-xs font-semibold text-rose-600 transition-all hover:border-rose-300 hover:bg-rose-100 hover:text-rose-700"
                              onClick={() => {
                                handleDeleteConditionDetails(item.id)
                              }}
                            >
                              <Trash2 className="mr-2 h-3.5 w-3.5" />
                              حذف
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>


            )}
          </div>
        )}
      </CardContent>

      <ConditionDetailsForm
       CURD={crudConditionDetails} patient={currentPatient ?? patients}
       conditions={conditionData}
       />
    </Card>
  );
}