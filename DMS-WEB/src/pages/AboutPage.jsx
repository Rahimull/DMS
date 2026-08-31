import {
  ArrowLeft,
  Award,
  CheckCircle2,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  UsersRound,
  Eye,
  CalendarDays,
} from "lucide-react";

import { Link } from "react-router-dom";

import aboutImage from "@/assets/images/hero/4.jpg";

const stats = [
  {
    value: "10+",
    label: "سال تجربه",
    icon: Award,
  },
  {
    value: "5K+",
    label: "مریض راضی",
    icon: UsersRound,
  },
  {
    value: "15+",
    label: "خدمات تخصصی",
    icon: Sparkles,
  },
  {
    value: "24/7",
    label: "پشتیبانی و همراهی",
    icon: HeartHandshake,
  },
];

const values = [
  {
    title: "مراقبت از مریض",
    description:
      "آرامش، رضایت و سلامت مریضان در مرکز تمام فعالیت‌های ما قرار دارد.",
    icon: HeartPulse,
  },
  {
    title: "کیفیت و تخصص",
    description:
      "با استفاده از دانش تخصصی و روش‌ های نوین، خدمات با کیفیت ارائه می‌ کنیم.",
    icon: Award,
  },
  {
    title: "اعتماد و شفافیت",
    description:
      "رابطه ما با مریضان بر اساس اعتماد، احترام و ارائه معلومات واضح است.",
    icon: ShieldCheck,
  },
  {
    title: "تکنولوژی عصری",
    description:
      "از تکنالوژی و سیستم‌های عصری برای بهبود روند خدمات دندان و زیبایی استفاده می‌ کنیم.",
    icon: Sparkles,
  },
];

const AboutPage = () => {
  return (
    <main dir="rtl" className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-20 sm:py-24 lg:py-28">

        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />

          <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-200/30 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

            {/* Content */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <HeartPulse size={15} />
                </span>

                درباره ما

              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

                مراقبت حرفه‌ ای برای

                <span className="mt-2 block bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  لبخندی سالم‌ تر
                </span>

              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">

                ما یک تیم مسلکی دندان و زیبایی هستیم که هدف ما ارائه خدمات
                باکیفیت، ایجاد تجربه آرام و استفاده از روش‌ های نوین برای
                حفظ سلامت و زیبایی لبخند شما است.

              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  to="/appointment"
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CalendarDays size={18} />

                  گرفتن نوبت

                  <ArrowLeft
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  مشاهده خدمات
                </Link>

              </div>

              {/* Trust */}

              <div className="mt-8 flex flex-wrap gap-5">

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  تیم مسلکی
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  محیط آرام
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 size={17} className="text-blue-600" />
                  تکنالوژی عصری
                </div>

              </div>

            </div>

            {/* Image */}

            <div className="relative">

              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-200/40 to-indigo-200/40 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-2 shadow-[0_25px_80px_rgba(37,99,235,0.15)]">

                <div className="relative h-[430px] overflow-hidden rounded-[1.5rem]">

                  <img
                    src={aboutImage}
                    alt="تیم دندان و زیبایی"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-blue-900/10" />

                  {/* Floating Card */}

                  <div className="absolute bottom-5 right-5 left-5 rounded-2xl border border-white/20 bg-white/15 p-4 text-white shadow-xl backdrop-blur-xl">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                        <Stethoscope size={21} />
                      </div>

                      <div>

                        <p className="text-xs text-blue-100">
                          تیم متخصص
                        </p>

                        <p className="mt-1 text-sm font-black">
                          تجربه، تخصص و مراقبت
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="relative bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">

                <Stethoscope size={17} />

                ما کی هستیم؟

              </div>

              <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">

                بیشتر از یک کلینیک؛

                <span className="block bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  همراه سلامت شما
                </span>

              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500 sm:text-base">

                ما باور داریم که مراجعه به دندان و زیبایی نباید یک تجربه
                نگران‌ کننده باشد. به همین دلیل تلاش می ‌کنیم محیطی آرام،
                دوستانه و حرفه‌ ای برای هر مریض ایجاد کنیم.

              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500 sm:text-base">

                تیم ما با ترکیب تجربه کلینیکی، دانش تخصصی و تکنالوژی
                عصری تلاش می‌ کند تا هر مریض خدمات مناسب و متناسب با
                نیاز خود دریافت کند.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="group rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/10"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={21} />
                    </div>

                    <p className="mt-5 text-3xl font-black text-slate-900">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {stat.label}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION / VISION
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-indigo-50/30 py-20 sm:py-24">

        <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2">

            {/* Mission */}

            <div className="group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-8 shadow-[0_15px_50px_rgba(37,99,235,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(37,99,235,0.13)]">

              <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-blue-100/60 blur-3xl transition-opacity group-hover:opacity-80" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/20">
                  <Target size={25} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  مأموریت ما
                </h3>

                <p className="mt-4 text-sm leading-8 text-slate-500">
                  ارائه خدمات دندان و زیبایی باکیفیت و قابل اعتماد، در محیطی
                  آرام و دوستانه؛ با تمرکز بر سلامت، رضایت و نیازهای واقعی
                  هر مریض.
                </p>

              </div>

              <div className="mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-28" />

            </div>


            {/* Vision */}

            <div className="group relative overflow-hidden rounded-[2rem] border border-indigo-100 bg-white p-8 shadow-[0_15px_50px_rgba(79,70,229,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(79,70,229,0.12)]">

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-100/60 blur-3xl" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/20">
                  <Eye size={25} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  چشم‌انداز ما
                </h3>

                <p className="mt-4 text-sm leading-8 text-slate-500">
                  ایجاد یک تجربه متفاوت در خدمات دندان و زیبایی و تبدیل شدن
                  به انتخابی قابل اعتماد برای خانواده‌ها با استفاده از
                  تخصص، تکنولوژی و مراقبت انسانی.
                </p>

              </div>

              <div className="mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-500 group-hover:w-28" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">

              <HeartHandshake size={17} />

              ارزش‌ های ما

            </div>

            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">

              اصولی که ما را

              <span className="block bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                متفاوت می‌ سازد
              </span>

            </h2>

            <p className="mt-4 text-sm leading-8 text-slate-500">
              کیفیت خدمات ما تنها به درمان محدود نمی‌ شود؛ بلکه تجربه و
              اعتماد مریض نیز برای ما اهمیت دارد.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/10"
                >

                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-100/50 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={24} />
                  </div>

                  <h3 className="relative mt-6 text-lg font-black text-slate-900">
                    {value.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>

                  <div className="relative mt-6 h-1 w-8 rounded-full bg-gradient-to-l from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-16" />

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-white px-4 pb-20 sm:pb-24">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-l from-blue-600 via-blue-600 to-indigo-700 px-6 py-12 shadow-2xl shadow-blue-900/15 sm:px-10 lg:px-14">

          <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -left-24 -bottom-28 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-right">

            <div>

              <div className="inline-flex items-center gap-2 text-sm font-bold text-blue-100">
                <HeartPulse size={18} />
                سلامت دندان، لبخند بهتر
              </div>

              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                آماده مراقبت بهتر از لبخند خود هستید؟
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
                همین امروز با تیم مسلکی ما تماس بگیرید و نوبت مناسب خود را
                انتخاب کنید.
              </p>

            </div>

            <Link
              to="/appointment"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-black text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-2xl"
            >
              <CalendarDays size={18} />

              گرفتن نوبت

              <ArrowLeft
                size={17}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default AboutPage;