
import {
  ClipboardList,
  FileText,
} from "lucide-react";

import SectionHeader from "./SectionHeader";


export default function CaseNotes({
  labCase,
}) {

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-lg shadow-blue-900/5 xl:col-span-12 sm:p-7">

      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-l from-indigo-600 via-blue-500 to-white" />


      <SectionHeader
        icon={FileText}
        title="یادداشت و توضیحات"
        description="اطلاعات تکمیلی ثبت شده برای این کیس"
      />


      <div className="grid gap-5 lg:grid-cols-2">


        {/* OTHER SERVICE */}

        <div className="relative overflow-hidden rounded-[1.7rem] border border-slate-100 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/40 p-6">

          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-200/30 blur-2xl" />


          <div className="relative">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-md">

                <ClipboardList size={21} />

              </div>


              <div>

                <p className="font-bold text-slate-700">
                  جزئیات خدمات دیگر
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  اطلاعات اضافی خدمات
                </p>

              </div>

            </div>


            <p className="mt-6 text-sm leading-8 text-slate-600">

              {labCase?.otherServiceDetails ||
                "اطلاعاتی برای این بخش ثبت نشده است."}

            </p>

          </div>

        </div>


        {/* NOTES */}

        <div className="relative overflow-hidden rounded-[1.7rem] border border-blue-100 bg-gradient-to-br from-indigo-50 via-blue-50 to-white p-6">

          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-200/30 blur-3xl" />


          <div className="relative">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/20">

                <FileText size={21} />

              </div>


              <div>

                <p className="font-bold text-slate-700">
                  یادداشت کیس
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  توضیحات ثبت شده در سیستم
                </p>

              </div>

            </div>


            <p className="mt-6 text-sm leading-8 text-slate-600">

              {labCase?.notes ||
                "یادداشتی برای این کیس ثبت نشده است."}

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

