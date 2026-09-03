
import {
  Hospital,
  Building2,
  Package,
} from "lucide-react";


export default function LabCard({
  labCase,
}) {

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/70 p-6 shadow-lg shadow-blue-900/5 xl:col-span-4">

      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-200/30 blur-3xl" />


      <div className="relative">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-md">

            <Hospital size={23} />

          </div>


          <Building2
            size={22}
            className="text-blue-300"
          />

        </div>


        <p className="mt-7 text-xs font-black tracking-[0.18em] text-slate-400">

          LABORATORY

        </p>


        <h2 className="mt-2 text-xl font-black text-slate-800">

          {labCase?.labName ||
            "لابراتوار ثبت نشده"}

        </h2>


        <div className="mt-6 rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

              <Package size={18} />

            </div>


            <div className="min-w-0">

              <p className="text-xs text-slate-400">
                مواد مورد استفاده
              </p>

              <p className="mt-1 truncate text-sm font-bold text-slate-700">

                {labCase?.material || "ثبت نشده"}

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

