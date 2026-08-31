import {
  CheckCircle2,
  ShieldCheck,
  UserRoundCheck,
  MonitorSmartphone,
  Clock3,
  HeartHandshake,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "مسلکیان باتجربه",
    description:
      "تیم دندان و زیبای ما دانش مسلکی را با تجربه عملی و کلینیکی در زمینه درمان‌ های دندان و زیبای ترکیب می ‌کند.",
    icon: UserRoundCheck,
  },
  {
    title: "تکنالوژی عصری",
    description:
      "ما از تکنالوژی و تجهیزات عصری دندان و زیبای برای تشخیص دقیق‌ تر و ارائه درمان بهتر استفاده می‌ کنیم.",
    icon: MonitorSmartphone,
  },
  {
    title: "مراقبت با محوریت مریض",
    description:
      "هر برنامه درمانی بر اساس نیازهای فردی و راحتی مریض طراحی و تنظیم می‌ شود.",
    icon: HeartHandshake,
  },
  {
    title: "مصئون و قابل اعتماد",
    description:
      "ما معیارهای مسلکی را رعایت کرده و محیط کلینیکی پاک، مصئون و مناسب برای مریضان فراهم می‌ کنیم.",
    icon: ShieldCheck,
  },
  {
    title: "زمان‌ بندی انعطاف‌ پذیر",
    description:
      "با استفاده از سیستم ساده نوبت‌ دهی، می‌ توانید زمان مناسب خود را برای مراجعه انتخاب کنید.",
    icon: Clock3,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 sm:py-24"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* =================================================
              LEFT VISUAL
          ================================================== */}

          <div className="relative">

            {/* Decorative Circle */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100/60 blur-2xl" />

            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-100/60 blur-2xl" />

            <div className="relative">

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-7 shadow-[0_25px_70px_rgba(37,99,235,0.22)] sm:p-9">

                {/* Decorative circles */}
                <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

                <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

                <div className="relative flex min-h-[470px] flex-col justify-between">

                  {/* Top */}
                  <div>

                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-xl">
                      <ShieldCheck size={32} strokeWidth={1.8} />
                    </div>

                    {/* Small Label */}
                    <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100 backdrop-blur">
                      <Sparkles size={13} />

                      کیفیت و اعتماد
                    </div>

                    {/* Heading */}
                    <h3 className="mt-5 max-w-md text-3xl font-black leading-[1.35] text-white sm:text-4xl">

                      مراقبت باکیفیت با

                      <span className="block bg-gradient-to-l from-blue-100 via-white to-indigo-100 bg-clip-text text-transparent">
                        تکنالوژی عصری
                      </span>

                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-7 text-blue-100/85">
                      ما تلاش می‌ کنیم با ترکیب تجربه، تکنالوژی و توجه به
                      نیازهای مریضان، تجربه‌ای بهتر و مطمئن‌ تر ایجاد کنیم.
                    </p>

                  </div>

                  {/* Bottom Statistics */}
                  <div>

                    <div className="mb-7 h-px bg-gradient-to-l from-transparent via-white/30 to-transparent" />

                    <div className="grid grid-cols-2 gap-4">

                      {/* Satisfaction */}
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">

                        <p className="text-3xl font-black text-white">
                          ۹۸٪
                        </p>

                        <p className="mt-1 text-xs text-blue-100">
                          رضایت مریضان
                        </p>

                      </div>

                      {/* Online */}
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">

                        <p className="text-3xl font-black text-white">
                          ۲۴/۷
                        </p>

                        <p className="mt-1 text-xs text-blue-100">
                          دسترسی آنلاین
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  FLOATING TRUST CARD
              ================================================== */}

              <div className="absolute -bottom-7 -left-3 w-[260px] rounded-2xl border border-blue-100 bg-white p-4 shadow-[0_20px_45px_rgba(30,64,175,0.15)] sm:-left-7">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-600">
                    <CheckCircle2 size={22} />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-900">
                      مراقبت قابل اعتماد
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      سلامت و راحتی شما در اولویت ماست.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div className="relative">

            {/* Content Card */}
            <div className="rounded-[2rem] border border-blue-100 bg-white/90 p-6 shadow-[0_15px_50px_rgba(30,64,175,0.07)] backdrop-blur-sm sm:p-8 lg:p-10">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-gradient-to-l from-blue-50 to-indigo-50 px-4 py-2 text-sm font-bold text-blue-600">

                <CheckCircle2 size={17} />

                چرا ما را انتخاب کنید؟

              </div>

              {/* Heading */}
              <h2 className="mt-5 text-3xl font-black leading-[1.4] tracking-tight text-slate-900 sm:text-4xl">

                مراقبت دندان و زیبای که می‌توانید

                <span className="block bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  به آن اعتماد کنید
                </span>

              </h2>

              {/* Description */}
              <p className="mt-5 text-sm leading-8 text-slate-500 sm:text-base">
                ما داکتران باتجربه، تکنالوژی عصری و رویکرد مبتنی بر نیازهای
                مریض را با هم ترکیب می‌ کنیم تا از زمان گرفتن نوبت تا پایان
                درمان، تجربه بهتر و مطمئن ‌تری برای شما فراهم شود.
              </p>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="mt-8 space-y-3">

                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-l from-white to-blue-50/30 p-4 transition-all duration-300 hover:-translate-x-1 hover:border-blue-100 hover:from-blue-50/60 hover:to-indigo-50/40 hover:shadow-md"
                    >

                      {/* Hover Accent */}
                      <div className="absolute right-0 top-0 h-full w-1 scale-y-0 bg-gradient-to-b from-blue-500 to-indigo-600 transition-transform duration-300 group-hover:scale-y-100" />

                      <div className="flex items-start gap-4">

                        {/* Icon */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">

                          <Icon
                            size={20}
                            strokeWidth={1.9}
                          />

                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">

                          <div className="flex items-center justify-between gap-3">

                            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                              {feature.title}
                            </h3>

                            <ArrowLeft
                              size={16}
                              className="shrink-0 text-blue-300 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100"
                            />

                          </div>

                          <p className="mt-1.5 text-xs leading-6 text-slate-500 sm:text-sm">
                            {feature.description}
                          </p>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

              {/* Bottom Trust */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-100 pt-6">

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2
                    size={16}
                    className="text-blue-600"
                  />
                  خدمات مسلکی
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <ShieldCheck
                    size={16}
                    className="text-indigo-600"
                  />
                  محیط مصئون
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <HeartHandshake
                    size={16}
                    className="text-blue-600"
                  />
                  توجه به مریض
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;