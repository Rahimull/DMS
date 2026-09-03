
import {
  Send,
  Activity,
  Download,
  CalendarClock,
} from "lucide-react";

import SectionHeader from "./SectionHeader";

import {
  formatDate,
} from "../../utils/labCaseHelpers"


export default function CaseTimeline({
  labCase,
}) {

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-b from-white via-blue-50/40 to-indigo-50/70 p-6 shadow-lg shadow-blue-900/5 xl:col-span-4">

      <SectionHeader
        icon={CalendarClock}
        title="مراحل کیس"
        description="روند انجام کیس"
      />


      <div className="relative mr-4 space-y-7 border-r-2 border-blue-200 pr-7">


        {/* SENT */}

        <div className="relative">

          <div className="absolute -right-[36px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-500 shadow-md" />

          <div className="flex items-center gap-2">

            <Send
              size={16}
              className="text-blue-600"
            />

            <p className="text-sm font-bold text-slate-700">
              ارسال به لابراتوار
            </p>

          </div>

          <p className="mt-2 text-xs text-slate-400">
            {formatDate(labCase?.dateSent)}
          </p>

        </div>


        {/* PROCESSING */}

        <div className="relative">

          <div className="absolute -right-[36px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-500 shadow-md" />

          <div className="flex items-center gap-2">

            <Activity
              size={16}
              className="text-indigo-600"
            />

            <p className="text-sm font-bold text-slate-700">
              در حال انجام
            </p>

          </div>

          <p className="mt-2 text-xs text-slate-400">
            کیس در حال انجام می‌باشد
          </p>

        </div>


        {/* RECEIVED */}

        <div className="relative">

          <div className="absolute -right-[36px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-700 shadow-md" />

          <div className="flex items-center gap-2">

            <Download
              size={16}
              className="text-indigo-700"
            />

            <p className="text-sm font-bold text-slate-700">
              دریافت کیس
            </p>

          </div>

          <p className="mt-2 text-xs text-slate-400">
            {formatDate(labCase?.dateReceived)}
          </p>

        </div>

      </div>

    </section>
  );
}

