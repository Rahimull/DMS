
import {
  ClipboardList,
  Layers3,
  Package,
} from "lucide-react";

import SectionHeader from "./SectionHeader";


const MiniInfo = ({
  icon: Icon,
  label,
  value,
}) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-indigo-600">

        <Icon size={18} />

      </div>


      <div className="min-w-0">

        <p className="text-[11px] font-semibold text-slate-400">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-bold text-slate-700">
          {value || "ثبت نشده"}
        </p>

      </div>

    </div>
  );
};


export default function CaseDetailsCard({
  labCase,
}) {

  const statusText =
    labCase?.caseStatus === "Completed"
      ? "تکمیل شده"
      : labCase?.caseStatus === "Received"
      ? "دریافت شده"
      : labCase?.caseStatus === "Processing"
      ? "در حال اجرا"
      : labCase?.caseStatus || "در انتظار";


  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-lg shadow-blue-900/5 xl:col-span-8 sm:p-7">

      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-l from-blue-600 via-indigo-500 to-white" />


      <SectionHeader
        icon={ClipboardList}
        title="مشخصات کیس"
        description="جزئیات خدمات و اطلاعات مربوط به کیس"
      />


      <div className="grid gap-4 md:grid-cols-2">

        <MiniInfo
          icon={ClipboardList}
          label="نوع خدمت"
          value={
            labCase?.caseTypeName ||
            labCase?.caseType
          }
        />


        <MiniInfo
          icon={ClipboardList}
          label="وضعیت کیس"
          value={statusText}
        />


        <MiniInfo
          icon={Layers3}
          label="مقدار"
          value={labCase?.quantity || 0}
        />


        <MiniInfo
          icon={Package}
          label="مواد"
          value={labCase?.material}
        />

      </div>

    </section>
  );
}

