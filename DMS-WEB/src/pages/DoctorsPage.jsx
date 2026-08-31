import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Star,
  Stethoscope,
  Award,
  UsersRound,
  ShieldCheck,
  Search,
  HeartPulse,
  Clock3,
  CircleCheck,
} from "lucide-react";

import doctor1 from "@/assets/images/hero/4.jpg";
import doctor2 from "@/assets/images/hero/5.jpg";
import doctor3 from "@/assets/images/hero/6.jpg";

const doctors = [
  {
    id: 1,
    name: "داکتر وکیل نورستانی",
    specialty: "داکتر عمومی دندان",
    category: "عمومی",
    experience: "بیش از ۱۰ سال تجربه",
    years: "۱۰+",
    patients: "1200+",
    rating: "4.9",
    image: doctor1,
    status: "فعال",
    description:
      "ارائه خدمات جامع دندان و زیبایی عمومی با تمرکز بر تشخیص دقیق، پیشگیری و درمان مؤثر.",
  },
  {
    id: 2,
    name: "داکتر جلال نورستان",
    specialty: "متخصص ارتودنسی",
    category: "ارتودنسی",
    experience: "بیش از ۸ سال تجربه",
    years: "۸+",
    patients: "950+",
    rating: "4.8",
    image: doctor2,
    status: "فعال",
    description:
      "متخصص اصلاح نظم و موقعیت دندان‌ ها با استفاده از روش‌ های عصری ارتودنسی.",
  },
  {
    id: 3,
    name: "داکتر مریم",
    specialty: "متخصص دندان و زیبایی",
    category: "زیبایی",
    experience: "بیش از ۷ سال تجربه",
    years: "۷+",
    patients: "870+",
    rating: "4.9",
    image: doctor3,
    status: "فعال",
    description:
      "ارائه خدمات زیبایی دندان برای ایجاد لبخند سالم، طبیعی و زیبا.",
  },
];

const categories = [
  "همه",
  "عمومی",
  "ارتودنسی",
  "زیبایی",
];

const DoctorsPage = () => {
  return (
    <main dir="rtl" className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">

        {/* Background */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl" />

          <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">

            {/* Content */}

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <Stethoscope size={15} />
                </span>

                تیم داکتران ما

              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.25] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

                متخصصانی که

                <span className="mt-2 block bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  مراقب لبخند شما هستند
                </span>

              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">

                با تیم داکتران مسلکی و باتجربه ما آشنا شوید.
                هر یک از متخصصان ما با دانش تخصصی و تجربه کلینیکی
                برای ارائه بهترین خدمات دندان و زیبایی در کنار شما هستند.

              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/appointment"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-l from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <CalendarDays size={18} />

                  گرفتن نوبت

                  <ArrowLeft
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />

                </Link>

                <a
                  href="#doctors"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  مشاهده داکتران
                  <ArrowLeft size={17} />
                </a>

              </div>

            </div>

            {/* Stats Card */}

            <div className="relative mx-auto w-full max-w-sm">

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-7 shadow-[0_25px_80px_rgba(37,99,235,0.12)]">

                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-100 blur-3xl" />

                <div className="relative">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-600/20">
                    <HeartPulse size={29} />
                  </div>

                  <h2 className="mt-6 text-2xl font-black text-slate-900">
                    تیم قابل اعتماد
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    تیم ما با تمرکز بر کیفیت خدمات، تجربه بهتر و
                    مراقبت مناسب برای هر مریض فعالیت می ‌کند.
                  </p>

                  <div className="mt-7 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl bg-blue-50 p-4">
                      <p className="text-2xl font-black text-blue-700">
                        ۱۰+
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        سال تجربه
                      </p>
                    </div>

                    <div className="rounded-2xl bg-indigo-50 p-4">
                      <p className="text-2xl font-black text-indigo-700">
                        ۳+
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        متخصص
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TRUST FEATURES
      ====================================================== */}

      <section className="relative bg-white py-12 sm:py-16">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-4 md:grid-cols-3">

            <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-gradient-to-l from-blue-50/70 to-white p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/15">
                <Award size={21} />
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900">
                  تجربه و تخصص
                </h3>
                <p className="mt-1 text-xs leading-6 text-slate-500">
                  تیم متخصص و باتجربه
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-indigo-100 bg-gradient-to-l from-indigo-50/70 to-white p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/15">
                <ShieldCheck size={21} />
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900">
                  مراقبت مطمئن
                </h3>
                <p className="mt-1 text-xs leading-6 text-slate-500">
                  توجه به سلامت و رضایت مریض
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-gradient-to-l from-blue-50/70 to-white p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/15">
                <Clock3 size={21} />
              </div>

              <div>
                <h3 className="text-sm font-black text-slate-900">
                  نوبت‌ دهی آسان
                </h3>
                <p className="mt-1 text-xs leading-6 text-slate-500">
                  انتخاب زمان مناسب مراجعه
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          DOCTORS DIRECTORY
      ====================================================== */}

      <section
        id="doctors"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white py-20 sm:py-24 lg:py-28"
      >

        {/* Decorations */}

        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">

                <UsersRound size={17} />

                متخصصان ما

              </div>

              <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">

                تیم داکتران

                <span className="block bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  در خدمت شما
                </span>

              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
                متخصص مورد نظر خود را پیدا کنید و برای دریافت خدمات،
                پروفایل داکتر را مشاهده یا نوبت خود را ثبت کنید.
              </p>

            </div>

            {/* Search */}

            <div className="relative w-full lg:max-w-xs">

              <Search
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="جستجوی داکتر..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pr-11 pl-4 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              />

            </div>

          </div>

          {/* Categories */}

          <div className="mt-10 flex flex-wrap gap-2">

            {categories.map((category, index) => (

              <button
                key={category}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  index === 0
                    ? "bg-gradient-to-l from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* Doctors */}

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {doctors.map((doctor) => (

              <article
                key={doctor.id}
                className="group relative overflow-hidden rounded-[2rem] border border-blue-100/70 bg-white shadow-[0_10px_45px_rgba(37,99,235,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(37,99,235,0.14)]"
              >

                {/* Image */}

                <div className="relative h-[390px] overflow-hidden">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

                  {/* Status */}

                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3 py-2 text-xs font-bold text-slate-700 shadow-lg backdrop-blur">

                    <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    {doctor.status}

                  </div>

                  {/* Rating */}

                  <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-2 text-sm font-black text-slate-800 shadow-lg">

                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    {doctor.rating}

                  </div>

                  {/* Image info */}

                  <div className="absolute bottom-0 right-0 left-0 p-6">

                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-600/80 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                      <Stethoscope size={13} />
                      {doctor.category}
                    </div>

                    <h3 className="text-2xl font-black text-white">
                      {doctor.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-blue-100">
                      {doctor.specialty}
                    </p>

                  </div>

                </div>

                {/* Content */}

                <div className="p-6">

                  <p className="text-sm leading-7 text-slate-500">
                    {doctor.description}
                  </p>

                  {/* Stats */}

                  <div className="mt-6 grid grid-cols-3 gap-2">

                    <div className="rounded-xl bg-blue-50 p-3 text-center">

                      <Award
                        size={17}
                        className="mx-auto text-blue-600"
                      />

                      <p className="mt-2 text-sm font-black text-slate-800">
                        {doctor.years}
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        سال تجربه
                      </p>

                    </div>

                    <div className="rounded-xl bg-indigo-50 p-3 text-center">

                      <UsersRound
                        size={17}
                        className="mx-auto text-indigo-600"
                      />

                      <p className="mt-2 text-sm font-black text-slate-800">
                        {doctor.patients}
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        مریضان
                      </p>

                    </div>

                    <div className="rounded-xl bg-blue-50 p-3 text-center">

                      <Star
                        size={17}
                        className="mx-auto fill-blue-600 text-blue-600"
                      />

                      <p className="mt-2 text-sm font-black text-slate-800">
                        {doctor.rating}
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        امتیاز
                      </p>

                    </div>

                  </div>

                  {/* Divider */}

                  <div className="my-5 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

                  {/* Actions */}

                  <div className="flex gap-3">

                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="group/profile flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      پروفایل

                      <ArrowLeft
                        size={15}
                        className="transition-transform duration-300 group-hover/profile:-translate-x-1"
                      />
                    </Link>

                    <Link
                      to="/appointment"
                      className="group/appointment flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-blue-600 to-indigo-600 px-3 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <CalendarDays
                        size={16}
                        className="transition-transform group-hover/appointment:scale-110"
                      />

                      نوبت
                    </Link>

                  </div>

                </div>

                {/* Bottom line */}

                <div className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-400 transition-all duration-500 group-hover:w-full" />

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-l from-blue-600 via-blue-600 to-indigo-700 px-7 py-10 shadow-2xl shadow-blue-900/15 sm:px-10 sm:py-12 lg:px-14">

            {/* Decorations */}

            <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -left-20 -bottom-28 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-7 lg:flex-row">

              <div>

                <div className="flex items-center gap-2 text-blue-100">

                  <CircleCheck size={18} />

                  تیم مسلکی و باتجربه

                </div>

                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  برای دریافت خدمات مناسب، نوبت بگیرید
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-blue-100">
                  داکتر مورد نظر خود را انتخاب کنید و زمان مناسب
                  مراجعه را به آسانی تعیین نمایید.
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

        </div>

      </section>

    </main>
  );
};

export default DoctorsPage;