
import {
  UserRound,
  UserCog,
} from "lucide-react";

import {
  getPatientName,
  getStaffName,
} from "../../utils/expenseHelpers"


export default function PatientDoctorCard({
  labCase,
}) {

  
  const patientName = labCase?.patientName || "مریض ثبت نشده";

  const staffName =labCase?.staffName || "ثبت نشده";

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-6 shadow-lg shadow-blue-900/5 xl:col-span-4">

      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-l from-indigo-600 via-blue-500 to-white" />


      <div className="flex items-center justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 text-indigo-600">

          <UserRound size={23} />

        </div>


        <span className="text-xs font-black tracking-[0.18em] text-slate-300">

          PATIENT

        </span>

      </div>


      <div className="mt-8">

        <p className="text-xs font-semibold text-slate-400">
          نام مریض
        </p>

        <h2 className="mt-2 text-2xl font-black text-slate-800">
          {patientName}
        </h2>

      </div>


      <div className="mt-7 border-t border-slate-100 pt-5">

        <div className="flex items-center gap-4">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">

            <UserCog size={20} />

          </div>


          <div>

            <p className="text-xs text-slate-400">
              داکتر مسئول
            </p>

            <p className="mt-1 text-sm font-bold text-slate-700">
              {staffName}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

