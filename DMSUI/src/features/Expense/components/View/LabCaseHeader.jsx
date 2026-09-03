
import {
  ArrowRight,
  CalendarDays,
  FlaskConical,
  Pencil,
  Sparkles,
  UserRound,
  BadgeCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  formatDate,
  getPatientName,
} from "../../utils/expenseHelpers"


const getStatusStyle = (status) => {
  const value = status?.toLowerCase();

  if (value === "completed") {
    return "تکمیل شده";
  }

  if (value === "received") {
    return "دریافت شده";
  }

  if (value === "processing") {
    return "در حال اجرا";
  }

  return status || "در انتظار";
};


export default function LabCaseHeader({
  labCase,
  onBack,
  onEdit,
}) {

  console.log("labCase", labCase);

   const patientName = labCase?.patientName || "مریض ثبت نشده";

  const statusText = getStatusStyle(
    labCase?.caseStatus
  );


  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white shadow-[0_25px_80px_-35px_rgba(37,99,235,0.35)]">

      <div className="absolute inset-0 bg-gradient-to-l from-indigo-50/80 via-white to-blue-50/80" />

      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />


      <div className="relative p-6 sm:p-8 lg:p-10">

        {/* TOP */}

        <div className="flex flex-wrap items-center justify-between gap-4">

          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >

            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:shadow-md">

              <ArrowRight size={18} />

            </span>

            برگشت به کیس‌ها

          </button>


          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 text-xs font-semibold text-slate-400 sm:flex">

              <Sparkles
                size={15}
                className="text-blue-500"
              />

              Laboratory Management

            </div>


            <Button
              onClick={onEdit}
              className="gap-2 rounded-2xl bg-gradient-to-l from-blue-600 to-indigo-700 px-5 shadow-lg shadow-blue-500/25"
            >

              <Pencil size={17} />

              ویرایش کیس

            </Button>

          </div>

        </div>


        {/* CONTENT */}

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="flex items-start gap-5">

            <div className="relative shrink-0">

              <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-600/30">

                <FlaskConical size={38} />

              </div>


              <div className="absolute -bottom-2 -left-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-indigo-600 text-white shadow-md">

                <BadgeCheck size={16} />

              </div>

            </div>


            <div>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">

                LABORATORY CASE

              </p>


              <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">

                کیس لابراتوار

              </h1>


              <div className="mt-4 flex flex-wrap items-center gap-3">

                <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">

                  CASE #{labCase?.id}

                </span>


                <span className="rounded-full border border-indigo-100 bg-gradient-to-l from-blue-50 to-indigo-50 px-4 py-2 text-xs font-bold text-indigo-700">

                  {statusText}

                </span>

              </div>


              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">

                <span className="flex items-center gap-2">

                  <UserRound
                    size={16}
                    className="text-blue-600"
                  />

                  {patientName}

                </span>


                <span className="flex items-center gap-2">

                  <CalendarDays
                    size={16}
                    className="text-indigo-600"
                  />

                  {formatDate(labCase?.createdAt)}

                </span>

              </div>

            </div>

          </div>


          {/* RIGHT INFO */}

          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-2xl border border-white bg-white/80 px-5 py-4 shadow-sm backdrop-blur">

              <p className="text-xs text-slate-400">
                شماره کیس
              </p>

              <p className="mt-1 text-lg font-black text-blue-700">
                #{labCase?.id}
              </p>

            </div>


            <div className="rounded-2xl border border-white bg-white/80 px-5 py-4 shadow-sm backdrop-blur">

              <p className="text-xs text-slate-400">
                وضعیت
              </p>

              <p className="mt-1 text-sm font-bold text-indigo-600">
                {statusText}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

