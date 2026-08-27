import { Link } from "react-router-dom";

import {
  ArrowLeft,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  UsersRound,
  Eye,
} from "lucide-react";

import aboutImage from "@/assets/images/hero/4.jpg";

const stats = [
  {
    value: "۱۰+",
    label: "سال تجربه",
    icon: Award,
  },
  {
    value: "۵۰۰۰+",
    label: "مریض راضی",
    icon: UsersRound,
  },
  {
    value: "۱۵+",
    label: "خدمات تخصصی",
    icon: Stethoscope,
  },
  {
    value: "۷",
    label: "روز خدمات",
    icon: Clock3,
  },
];

const values = [
  {
    title: "مراقبت از مریض",
    description:
      "رضایت، آرامش و سلامت مریضان در مرکز تمام فعالیت‌های ما قرار دارد.",
    icon: HeartHandshake,
  },
  {
    title: "کیفیت و تخصص",
    description:
      "با استفاده از دانش تخصصی و روش‌های نوین، خدمات باکیفیت ارائه می‌کنیم.",
    icon: Award,
  },
  {
    title: "اعتماد و شفافیت",
    description:
      "در تمام مراحل تشخیص و درمان، معلومات واضح و صادقانه ارائه می‌شود.",
    icon: ShieldCheck,
  },
  {
    title: "تکنالوژی مدرن",
    description:
      "از تکنالوژی و سیستم‌های مدرن برای مدیریت بهتر خدمات کلینیکی استفاده می‌کنیم.",
    icon: Sparkles,
  },
];

const AboutPage = () => {
  return (
    <main dir="rtl" className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white py-16 sm:py-20 lg:py-24">

        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-200/30 blur-3xl" />

          <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="absolute right-1/2 top-1/2 h-72 w-72 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Content */}

            <div>

              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">

                  <HeartPulse size={15} />

                </span>

                درباره ما

              </div>

              {/* Heading */}

              <h1 className="mt-6 text-4xl font-black leading-[1.25] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

                مراقبت حرفه‌ای برای

                <span className="block bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">

                  لبخند سالم‌تر شما

                </span>

              </h1>

              {/* Description */}

              <p className="mt-6 max-w-xl text-sm leading-8 text-slate-500 sm:text-base">

                ما یک تیم مسلکی و متعهد هستیم که با ترکیب دانش
                دندان‌پزشکی، تجربه کلینیکی و تکنالوژی مدرن،
                تلاش می‌کنیم تجربه‌ای آرام، مطمئن و باکیفیت برای
                هر مریض فراهم کنیم.

              </p>

              {/* Features */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">

                  <CheckCircle2
                    size={18}
                    className="text-blue-600"
                  />

                  تیم مسلکی و باتجربه

                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">

                  <CheckCircle2
                    size={18}
                    className="text-blue-600"
                  />

                  محیط آرام و مدرن

                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">

                  <CheckCircle2
                    size={18}
                    className="text-blue-600"
                  />

                  خدمات متناسب با نیاز مریض

                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">

                  <CheckCircle2
                    size={18}
                    className="text-blue-600"
                  />

                  استفاده از روش‌های نوین

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/appointment"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-l from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30"
                >

                  <CalendarDays size={18} />

                  گرفتن نوبت

                  <ArrowLeft
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />

                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >

                  مشاهده خدمات

                </Link>

              </div>

            </div>

            {/* Image */}

            <div className="relative mx-auto w-full max-w-xl">

              {/* Glow */}

              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-200/50 to-indigo-200/40 blur-2xl" />

              {/* Image Card */}

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-[0_25px_70px_rgba(37,99,235,0.14)]">

                <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] sm:h-[480px]">

                  <img
                    src={aboutImage}
                    alt="کلینیک دندان‌پزشکی"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-blue-900/10" />

                  {/* Image Content */}

                  <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-8">

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">

                      <Stethoscope size={14} />

                      تیم مسلکی دندان‌پزشکی

                    </div>

                    <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">

                      سلامت شما،
                      <span className="text-blue-200">
                        اولویت ماست
                      </span>

                    </h2>

                  </div>

                </div>

              </div>

              {/* Floating Card */}

              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl sm:-right-7">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">

                    <ShieldCheck size={21} />

                  </div>

                  <div>

                    <p className="text-xs font-medium text-slate-400">
                      خدمات قابل اعتماد
                    </p>

                    <p className="mt-1 text-sm font-black text-slate-800">
                      مراقبت حرفه‌ای
                    </p>

                  </div>

                </div>

              </div>

              {/* Floating Rating */}

              <div className="absolute -left-3 top-8 rounded-2xl border border-blue-100 bg-white p-3 shadow-xl sm:-left-6">

                <div className="flex items-center gap-2">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">

                    <HeartPulse size={18} />

                  </div>

                  <div>

                    <p className="text-[10px] text-slate-400">
                      رضایت مریضان
                    </p>

                    <p className="text-sm font-black text-slate-800">
                      ۹۵٪+
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="relative py-8 sm:py-10">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white shadow-[0_15px_50px_rgba(37,99,235,0.07)] sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => {

              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`group relative flex items-center gap-4 p-6 transition-all duration-300 hover:bg-blue-50/50 ${
                    index !== stats.length - 1
                      ? "border-b border-blue-100 sm:border-l lg:border-b-0"
                      : ""
                  }`}
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white">

                    <Icon size={22} />

                  </div>

                  <div>

                    <p className="text-2xl font-black text-slate-900">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-400">
                      {stat.label}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/40 py-20 sm:py-24">

        <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Text */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">

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

                هدف ما ایجاد یک تجربه متفاوت در خدمات دندان‌پزشکی است.
                از اولین تماس و گرفتن نوبت تا تشخیص، درمان و پیگیری،
                تلاش می‌کنیم تمام مراحل برای مریض ساده، واضح و آرام باشد.

              </p>

              <p className="mt-4 text-sm leading-8 text-slate-500 sm:text-base">

                تیم ما باور دارد که یک درمان موفق تنها به تکنالوژی
                وابسته نیست؛ بلکه ترکیبی از تخصص، توجه به مریض،
                ارتباط مناسب و اعتماد متقابل است.

              </p>

              <div className="mt-7">

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 text-sm font-bold text-blue-600 transition-colors hover:text-indigo-600"
                >

                  با ما بیشتر آشنا شوید

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-blue-100">

                    <ArrowLeft
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                  </span>

                </Link>

              </div>

            </div>

            {/* Mission Vision */}

            <div className="grid gap-5 sm:grid-cols-2">

              {/* Mission */}

              <div className="group rounded-[1.5rem] border border-blue-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/20 transition-transform duration-500 group-hover:scale-110">

                  <Target size={25} />

                </div>

                <h3 className="mt-6 text-lg font-black text-slate-900">
                  مأموریت ما
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">

                  ارائه خدمات دندان‌پزشکی باکیفیت، قابل اعتماد و
                  متناسب با نیاز هر مریض در یک محیط آرام و حرفه‌ای.

                </p>

              </div>

              {/* Vision */}

              <div className="group rounded-[1.5rem] border border-indigo-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600/10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/20 transition-transform duration-500 group-hover:scale-110">

                  <Eye size={25} />

                </div>

                <h3 className="mt-6 text-lg font-black text-slate-900">
                  دیدگاه ما
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">

                  ایجاد یک سیستم مدرن و قابل اعتماد که تجربه خدمات
                  دندان‌پزشکی را برای مریضان ساده‌تر و بهتر سازد.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">

        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="mx-auto max-w-2xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 text-sm font-bold text-blue-700">

              <HeartHandshake size={17} />

              ارزش‌های ما

            </div>

            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">

              اصولی که همیشه

              <span className="block bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">

                به آن‌ها پایبند هستیم

              </span>

            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-500 sm:text-base">

              اعتماد، کیفیت و توجه به مریض اساس کار ماست و در تمام
              خدمات خود تلاش می‌کنیم این ارزش‌ها را حفظ کنیم.

            </p>

          </div>

          {/* Cards */}

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-blue-100 bg-white p-6 shadow-[0_10px_35px_rgba(37,99,235,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
                >

                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                  <div className="relative">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2">

                      <Icon size={24} />

                    </div>

                    <h3 className="mt-6 text-lg font-black text-slate-900 transition-colors group-hover:text-blue-700">

                      {value.title}

                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">

                      {value.description}

                    </p>

                  </div>

                  <div className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-full" />

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-l from-blue-600 via-blue-600 to-indigo-700 px-6 py-10 shadow-[0_25px_70px_rgba(37,99,235,0.2)] sm:px-10 lg:px-14 lg:py-12">

            {/* Decorations */}

            <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -left-24 -bottom-32 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-7 text-center sm:flex-row sm:text-right">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-blue-100 backdrop-blur">

                  <HeartPulse size={14} />

                  مراقبت بهتر، لبخند زیباتر

                </div>

                <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">

                  آماده‌اید از لبخند خود مراقبت کنید؟

                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">

                  همین امروز با تیم مسلکی ما تماس بگیرید و
                  نوبت مناسب خود را دریافت کنید.

                </p>

              </div>

              <Link
                to="/appointment"
                className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-2xl"
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

        </div>

      </section>

    </main>
  );
};

export default AboutPage;