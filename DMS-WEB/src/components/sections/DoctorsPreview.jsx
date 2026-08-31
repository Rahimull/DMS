import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Star,
  Stethoscope,
  Award,
  UsersRound,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import doctor1 from "@/assets/images/hero/4.jpg";
import doctor2 from "@/assets/images/hero/5.jpg";
import doctor3 from "@/assets/images/hero/6.jpg";

const doctors = [
  {
    id: 1,
    number: "01",
    name: "داکتر وکیل نورستانی",
    specialty: "داکتر عمومی دندان",
    experience: "۱۰+ سال",
    patients: "1200+",
    rating: "4.9",
    image: doctor1,
  },
  {
    id: 2,
    number: "02",
    name: "داکتر جلال نورستان",
    specialty: "متخصص ارتودنسی",
    experience: "۸+ سال",
    patients: "950+",
    rating: "4.8",
    image: doctor2,
  },
  {
    id: 3,
    number: "03",
    name: "داکتر مریم",
    specialty: "متخصص دندان و زیبایی",
    experience: "۷+ سال",
    patients: "870+",
    rating: "4.9",
    image: doctor3,
  },
];

const DoctorsPreview = () => {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -right-52 -top-52 h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute -bottom-52 -left-52 h-[600px] w-[600px] rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="absolute right-1/2 top-[45%] h-[350px] w-[350px] translate-x-1/2 rounded-full bg-blue-50/60 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="relative mx-auto max-w-3xl text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm">

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20">
              <Stethoscope size={14} />
            </span>

            تیم متخصص ما

          </div>

          {/* Heading */}

          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

            داکترانی که

            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              به لبخند شما اهمیت می‌ دهند
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
            تیمی از داکتران متخصص و باتجربه که با استفاده از دانش
            تخصصی، تکنالوژی عصری و مراقبت فردی، بهترین خدمات دندان
            و زیبایی را برای شما فراهم می‌ کنند.
          </p>

        </div>

        {/* =====================================================
            DOCTORS GRID
        ====================================================== */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {doctors.map((doctor) => (
            <article
              key={doctor.id}
              className="group relative"
            >

              {/* =================================================
                  IMAGE AREA
              ================================================== */}

              <div className="relative">

                {/* Main Image */}

                <div className="relative h-[430px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-100 to-indigo-100">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
                  />

                  {/* Image Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Blue Glow */}

                  <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl transition-all duration-700 group-hover:bg-indigo-500/30" />

                  {/* =================================================
                      NUMBER
                  ================================================== */}

                  <div className="absolute left-6 top-5">

                    <span className="text-7xl font-black tracking-tighter text-white/20">
                      {doctor.number}
                    </span>

                  </div>

                  {/* =================================================
                      RATING
                  ================================================== */}

                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-2 shadow-xl backdrop-blur-md">

                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-xs font-black text-slate-800">
                      {doctor.rating}
                    </span>

                  </div>

                  {/* =================================================
                      SPECIALIST BADGE
                  ================================================== */}

                  <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-blue-600/90 px-3.5 py-2 text-xs font-bold text-white shadow-lg backdrop-blur">

                    <ShieldCheck size={14} />

                    داکتر متخصص

                  </div>

                </div>

                {/* =================================================
                    FLOATING PROFILE PANEL
                ================================================== */}

                <div className="relative z-10 mx-4 -mt-16 rounded-[1.5rem] border border-white/80 bg-white/95 p-5 shadow-[0_15px_45px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_55px_rgba(37,99,235,0.15)]">

                  {/* Doctor Name */}

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <h3 className="text-xl font-black text-slate-900">
                        {doctor.name}
                      </h3>

                      <p className="mt-1.5 text-sm font-semibold text-blue-600">
                        {doctor.specialty}
                      </p>

                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600">
                      <Stethoscope size={19} />
                    </div>

                  </div>

                  {/* Divider */}

                  <div className="my-5 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

                  {/* Stats */}

                  <div className="grid grid-cols-2 gap-4">

                    {/* Experience */}

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Award size={18} />
                      </div>

                      <div>

                        <p className="text-[10px] font-medium text-slate-400">
                          تجربه کاری
                        </p>

                        <p className="mt-1 text-sm font-black text-slate-800">
                          {doctor.experience}
                        </p>

                      </div>

                    </div>

                    {/* Patients */}

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <UsersRound size={18} />
                      </div>

                      <div>

                        <p className="text-[10px] font-medium text-slate-400">
                          مریضان
                        </p>

                        <p className="mt-1 text-sm font-black text-slate-800">
                          {doctor.patients}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* =================================================
                      ACTIONS
                  ================================================== */}

                  <div className="mt-5 grid grid-cols-[1fr_auto] gap-3">

                    {/* Profile */}

                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="group/profile flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                    >
                      مشاهده پروفایل

                      <ArrowLeft
                        size={15}
                        className="transition-transform duration-300 group-hover/profile:-translate-x-1"
                      />
                    </Link>

                    {/* Appointment */}

                    <Link
                      to="/appointment"
                      aria-label={`گرفتن نوبت با ${doctor.name}`}
                      className="group/appointment flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600/25"
                    >
                      <CalendarDays
                        size={18}
                        className="transition-transform duration-300 group-hover/appointment:scale-110"
                      />
                    </Link>

                  </div>

                </div>

              </div>

              {/* =================================================
                  BOTTOM DECORATION
              ================================================== */}

              <div className="absolute -bottom-4 right-12 left-12 -z-10 h-8 rounded-full bg-blue-500/10 blur-xl transition-all duration-500 group-hover:bg-indigo-500/20" />

            </article>
          ))}

        </div>

        {/* =====================================================
            FOOTER CTA
        ====================================================== */}

        <div className="mt-16 flex flex-col items-center text-center">

          <div className="flex items-center gap-2 text-blue-600">

            <Sparkles size={16} />

            <span className="text-xs font-bold">
              مراقبت حرفه‌ ای برای لبخند سالم و زیبا
            </span>

            <Sparkles size={16} />

          </div>

          <Link
            to="/doctors"
            className="group mt-4 inline-flex items-center gap-3 rounded-full bg-gradient-to-l from-blue-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            مشاهده تمام داکتران

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </span>

          </Link>

        </div>

      </div>
    </section>
  );
};

export default DoctorsPreview;