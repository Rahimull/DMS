import {
  Users,
  Stethoscope,
  CalendarCheck,
  Award,
  ArrowUpLeft,
} from "lucide-react";

const stats = [
  {
    value: "۵,۰۰۰+",
    label: "مریضان راضی",
    description: "اعتماد بیماران",
    icon: Users,
    gradient: "from-blue-600 to-indigo-600",
    glow: "bg-blue-500/20",
  },
  {
    value: "۲۵+",
    label: "داکتران متخصص",
    description: "تیم مسلکی",
    icon: Stethoscope,
    gradient: "from-indigo-600 to-blue-600",
    glow: "bg-indigo-500/20",
  },
  {
    value: "۱۰,۰۰۰+",
    label: "نوبت‌ های ثبت‌ شده",
    description: "خدمات ارائه‌ شده",
    icon: CalendarCheck,
    gradient: "from-blue-500 to-indigo-600",
    glow: "bg-blue-500/20",
  },
  {
    value: "۱۵+",
    label: "سال تجربه",
    description: "تجربه و تخصص",
    icon: Award,
    gradient: "from-indigo-500 to-blue-600",
    glow: "bg-indigo-500/20",
  },
];

const StatsSection = () => {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white py-8 sm:py-10"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-32 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute -left-40 bottom-[-150px] h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/70 shadow-[0_20px_70px_rgba(37,99,235,0.10)]">

          {/* Top Gradient Line */}

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-500" />

          {/* Decorative Glow */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

          {/* =================================================
              STATS GRID
          ================================================== */}

          <div className="relative grid grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group relative overflow-hidden px-5 py-7 transition-all duration-500 hover:bg-white/70 sm:px-7 sm:py-8 lg:px-8 ${
                    index !== stats.length - 1
                      ? "border-b border-blue-100/70 lg:border-b-0 lg:border-l"
                      : ""
                  } ${
                    index === 0
                      ? "max-lg:border-l"
                      : ""
                  }`}
                >

                  {/* =================================================
                      CARD HOVER GLOW
                  ================================================== */}

                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${stat.glow} opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100`}
                  />

                  <div className="relative">

                    {/* =================================================
                        ICON
                    ================================================== */}

                    <div className="flex items-start justify-between">

                      <div
                        className={`relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg shadow-blue-600/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-xl`}
                      >

                        {/* Glass Shine */}

                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />

                        <Icon
                          size={25}
                          strokeWidth={1.8}
                          className="relative z-10"
                        />

                      </div>

                      {/* Arrow */}

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-500 opacity-0 shadow-sm transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                        <ArrowUpLeft size={15} />
                      </div>

                    </div>

                    {/* =================================================
                        NUMBER
                    ================================================== */}

                    <div className="mt-6">

                      <p className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-600 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
                        {stat.value}
                      </p>

                      <p className="mt-2 text-sm font-bold text-slate-800 sm:text-base">
                        {stat.label}
                      </p>

                      <p className="mt-1 text-[11px] font-medium text-slate-400 sm:text-xs">
                        {stat.description}
                      </p>

                    </div>

                    {/* =================================================
                        BOTTOM PROGRESS
                    ================================================== */}

                    <div className="mt-6 h-1 overflow-hidden rounded-full bg-blue-100/80">

                      <div
                        className={`h-full w-1/3 rounded-full bg-gradient-to-l ${stat.gradient} transition-all duration-700 group-hover:w-full`}
                      />

                    </div>

                  </div>

                  {/* =================================================
                      DECORATIVE CORNER
                  ================================================== */}

                  <div className="pointer-events-none absolute -bottom-8 -left-8 h-20 w-20 rounded-full border border-blue-100/50 transition-all duration-700 group-hover:scale-150 group-hover:border-blue-200/70" />

                </div>
              );
            })}

          </div>

          {/* =====================================================
              BOTTOM BRAND STRIP
          ====================================================== */}

          <div className="relative border-t border-blue-100/70 bg-gradient-to-r from-blue-600/5 via-white/80 to-indigo-600/5 px-5 py-3.5 sm:px-8">

            <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />

                <span className="text-xs font-semibold text-slate-500">
                  اعتماد شما، بزرگ‌ترین افتخار ماست
                </span>

              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-blue-600">

                <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />

                مراقبت مسلکی و مدرن

                <span className="h-px w-8 bg-gradient-to-l from-transparent to-indigo-400" />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;