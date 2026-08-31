import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpLeft,
  CalendarDays,
  Check,
  Clock3,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const AppointmentCTA = () => {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/80 blur-3xl" />

        {/* Right glow */}

        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-indigo-100/40 blur-3xl" />

        {/* Left glow */}

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

        {/* Decorative circles */}

        <div className="absolute right-[8%] top-[15%] h-24 w-24 rounded-full border border-blue-100/70" />

        <div className="absolute bottom-[12%] left-[10%] h-32 w-32 rounded-full border border-indigo-100/70" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="mx-auto mb-10 flex max-w-xl flex-col items-center text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm">

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <CalendarDays size={14} />
            </span>

            نوبت ‌دهی آنلاین

          </div>

        </div>

        {/* =====================================================
            MAIN PANEL
        ====================================================== */}

        <div className="relative overflow-hidden rounded-[3rem] border border-blue-100/80 bg-gradient-to-br from-white via-white to-blue-50/70 shadow-[0_30px_100px_rgba(37,99,235,0.12)]">

          {/* =================================================
              GRADIENT SIDE
          ================================================== */}

          <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-[38%] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 lg:block" />

          {/* =================================================
              DECORATIVE ORBS
          ================================================== */}

          <div className="pointer-events-none absolute -left-32 -top-32 hidden h-80 w-80 rounded-full border-[50px] border-white/10 lg:block" />

          <div className="pointer-events-none absolute -bottom-40 left-10 hidden h-96 w-96 rounded-full border-[60px] border-white/5 lg:block" />

          <div className="pointer-events-none absolute right-1/3 top-0 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl" />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative grid lg:grid-cols-[1fr_0.8fr]">

            {/* =================================================
                MAIN MESSAGE
            ================================================== */}

            <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

              {/* Small heading */}

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">

                  <Stethoscope size={20} />

                </div>

                <div>

                  <p className="text-xs font-bold text-blue-600">
                    مراقبت بهتر
                  </p>

                  <p className="mt-0.5 text-sm font-black text-slate-800">
                    از همین امروز شروع کنید
                  </p>

                </div>

              </div>

              {/* Heading */}

              <h2 className="mt-7 max-w-2xl text-3xl font-black leading-[1.4] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

                وقت آن رسیده است که

                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  بیشتر به لبخندتان اهمیت دهید
                </span>

              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
                با چند کلیک ساده نوبت خود را ثبت کنید و از خدمات
                تخصصی دندان و زیبایی توسط تیم مسلکی ما بهره‌ مند شوید.
              </p>

              {/* =================================================
                  STEPS
              ================================================== */}

              <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">

                {/* Step 1 */}

                <div className="group rounded-2xl border border-blue-100 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5">

                  <div className="flex items-center justify-between">

                    <span className="text-2xl font-black text-blue-100 transition-colors group-hover:text-blue-200">
                      01
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <CalendarDays size={15} />
                    </div>

                  </div>

                  <p className="mt-3 text-xs font-bold text-slate-700">
                    انتخاب نوبت
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-slate-400">
                    زمان مناسب خود را انتخاب کنید
                  </p>

                </div>

                {/* Step 2 */}

                <div className="group rounded-2xl border border-indigo-100 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-600/5">

                  <div className="flex items-center justify-between">

                    <span className="text-2xl font-black text-indigo-100 transition-colors group-hover:text-indigo-200">
                      02
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <Check size={15} />
                    </div>

                  </div>

                  <p className="mt-3 text-xs font-bold text-slate-700">
                    ثبت درخواست
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-slate-400">
                    اطلاعات خود را ثبت کنید
                  </p>

                </div>

                {/* Step 3 */}

                <div className="group rounded-2xl border border-blue-100 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5">

                  <div className="flex items-center justify-between">

                    <span className="text-2xl font-black text-blue-100 transition-colors group-hover:text-blue-200">
                      03
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <ShieldCheck size={15} />
                    </div>

                  </div>

                  <p className="mt-3 text-xs font-bold text-slate-700">
                    دریافت خدمات
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-slate-400">
                    با آرامش مراجعه کنید
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                APPOINTMENT PANEL
            ================================================== */}

            <div className="relative px-6 pb-10 sm:px-10 lg:px-10 lg:py-12">

              <div className="relative mx-auto max-w-sm">

                {/* =================================================
                    FLOATING ICON
                ================================================== */}

                <div className="absolute -right-3 -top-5 z-20 flex h-14 w-14 rotate-6 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-900/20 transition-transform duration-500 hover:rotate-0">

                  <Sparkles size={22} />

                </div>

                {/* =================================================
                    APPOINTMENT CARD
                ================================================== */}

                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-6 shadow-[0_25px_60px_rgba(37,99,235,0.30)] sm:p-7">

                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

                  <div className="pointer-events-none absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-indigo-300/20 blur-3xl" />

                  {/* Decorative circle */}

                  <div className="pointer-events-none absolute right-5 top-5 h-24 w-24 rounded-full border border-white/10" />

                  {/* Header */}

                  <div className="relative">

                    <p className="text-xs font-semibold text-blue-100">
                      سریع و آسان
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-white">
                      نوبت خود را بگیرید
                    </h3>

                  </div>

                  {/* Calendar */}

                  <div className="relative mt-7 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">

                    <div className="flex items-center gap-3">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg">

                        <CalendarDays size={23} />

                      </div>

                      <div>

                        <p className="text-[10px] text-blue-100">
                          وقت ملاقات
                        </p>

                        <p className="mt-1 text-sm font-black text-white">
                          زمان مناسب خود را انتخاب کنید
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Info */}

                  <div className="relative mt-4 space-y-2">

                    <div className="flex items-center gap-2 text-xs text-blue-50">

                      <Clock3 size={14} />

                      زمان‌ بندی انعطاف‌ پذیر

                    </div>

                    <div className="flex items-center gap-2 text-xs text-blue-50">

                      <ShieldCheck size={14} />

                      خدمات مسلکی و مطمئن

                    </div>

                  </div>

                  {/* Main CTA */}

                  <Link
                    to="/appointment"
                    className="group relative mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-black text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-2xl"
                  >

                    <CalendarDays size={18} />

                    گرفتن نوبت

                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">

                      <ArrowLeft
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                      />

                    </span>

                  </Link>

                  {/* Phone */}

                  <a
                    href="tel:+93700000000"
                    className="group relative mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-bold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                  >

                    <Phone
                      size={15}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />

                    تماس با کلینیک

                  </a>

                </div>

                {/* =================================================
                    SMALL FLOATING BADGE
                ================================================== */}

                <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-xl sm:flex">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                    <Check size={17} />

                  </div>

                  <div>

                    <p className="text-[10px] font-medium text-slate-400">
                      انتخاب مطمئن
                    </p>

                    <p className="mt-0.5 text-xs font-black text-slate-700">
                      مراقبت حرفه‌ای
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              BOTTOM GRADIENT
          ====================================================== */}

          <div className="absolute bottom-0 right-0 h-1 w-full bg-gradient-to-l from-blue-500 via-indigo-600 to-blue-400" />

        </div>

        {/* =====================================================
            BOTTOM LINK
        ====================================================== */}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">

            <ShieldCheck
              size={15}
              className="text-blue-600"
            />

            سلامت و لبخند شما، اولویت ماست

          </div>

          <span className="hidden h-4 w-px bg-slate-200 sm:block" />

          <Link
            to="/doctors"
            className="group inline-flex items-center gap-1 text-xs font-bold text-blue-600 transition-colors hover:text-indigo-600"
          >

            آشنایی با تیم متخصص

            <ArrowUpLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />

          </Link>

        </div>

      </div>
    </section>
  );
};

export default AppointmentCTA;