import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";

import doctor1 from "@/assets/images/hero/4.jpg";
import doctor2 from "@/assets/images/hero/5.jpg";
import doctor3 from "@/assets/images/hero/6.jpg";

const doctors = [
  {
    id: 1,
    name: "داکتر وکیل نورستانی",
    specialty: "داکتر عمومی دندان",
    image: doctor1,
  },
  {
    id: 2,
    name: "داکتر جلال نورستان",
    specialty: "متخصص ارتودنسی",
    image: doctor2,
  },
  {
    id: 3,
    name: "داکتر مریم",
    specialty: "متخصص دندان و زیبایی",
    image: doctor3,
  },
];

const services = [
  "معاینه دندان",
  "پاک‌کاری دندان",
  "پرکردن دندان",
  "درمان ریشه دندان",
  "جراحی دندان",
  "دندان‌پزشکی زیبایی",
];

const timeSlots = [
  "08:00 صبح",
  "09:00 صبح",
  "10:00 صبح",
  "11:00 صبح",
  "01:00 بعد از ظهر",
  "02:00 بعد از ظهر",
  "03:00 بعد از ظهر",
  "04:00 بعد از ظهر",
];

const steps = [
  {
    id: 1,
    title: "معلومات شما",
    icon: UserRound,
  },
  {
    id: 2,
    title: "انتخاب خدمات",
    icon: Stethoscope,
  },
  {
    id: 3,
    title: "تاریخ و زمان",
    icon: CalendarDays,
  },
];

const AppointmentPage = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    doctor: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const selectedDoctor = useMemo(
    () => doctors.find((doctor) => String(doctor.id) === formData.doctor),
    [formData.doctor]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment:", formData);

    alert("درخواست نوبت شما ثبت شد.");
  };

  return (
    <main dir="rtl" className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 py-16 sm:py-20">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <CalendarDays size={15} />
              </span>

              گرفتن نوبت

            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">

              نوبت خود را

              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                به آسانی رزرو کنید
              </span>

            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">

              داکتر، خدمات، تاریخ و زمان مناسب خود را انتخاب کنید و
              درخواست نوبت خود را در چند مرحله ساده ثبت نمایید.

            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN APPOINTMENT AREA
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

        <div className="pointer-events-none absolute -right-48 top-40 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="pointer-events-none absolute -left-48 bottom-20 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">

            {/* =================================================
                LEFT INFO
            ================================================== */}

            <aside className="order-2 lg:order-1">

              <div className="sticky top-24 space-y-6">

                {/* Info card */}

                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-7 text-white shadow-2xl shadow-blue-900/15">

                  <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

                  <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-300/10 blur-3xl" />

                  <div className="relative">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">

                      <HeartPulse size={26} />

                    </div>

                    <h2 className="mt-6 text-2xl font-black">
                      رزرو نوبت آسان و سریع
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-blue-100">
                      وقت مناسب خود را انتخاب کنید و تیم ما در اولین
                      فرصت درخواست شما را بررسی خواهد کرد.
                    </p>

                    <div className="mt-7 space-y-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                          <CheckCircle2 size={17} />
                        </div>

                        <span className="text-sm font-semibold">
                          داکتران مسلکی
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                          <Clock3 size={17} />
                        </div>

                        <span className="text-sm font-semibold">
                          ساعات کاری انعطاف‌پذیر
                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                          <ShieldCheck size={17} />
                        </div>

                        <span className="text-sm font-semibold">
                          مراقبت مطمئن و مسلکی
                        </span>

                      </div>

                    </div>

                  </div>
                </div>


                {/* Contact */}

                <div className="rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 p-6 shadow-[0_15px_50px_rgba(37,99,235,0.07)]">

                  <h3 className="font-black text-slate-900">
                    نیاز به کمک دارید؟
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    اگر در انتخاب خدمات یا زمان نوبت سوال دارید،
                    با ما تماس بگیرید.
                  </p>

                  <div className="mt-5 space-y-3">

                    <a
                      href="tel:+93700000000"
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 text-sm font-bold text-slate-700 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
                    >

                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Phone size={17} />
                      </span>

                      +93 700 000 000

                    </a>

                    <a
                      href="mailto:info@dms.com"
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 text-sm font-bold text-slate-700 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
                    >

                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <Mail size={17} />
                      </span>

                      info@dms.com

                    </a>

                  </div>

                </div>

              </div>

            </aside>


            {/* =================================================
                FORM
            ================================================== */}

            <div className="order-1 lg:order-2">

              <div className="rounded-[2rem] border border-blue-100 bg-white p-5 shadow-[0_20px_70px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10">

                {/* =================================================
                    STEPS
                ================================================== */}

                <div className="relative mb-10">

                  {/* Progress line */}

                  <div className="absolute right-[16%] left-[16%] top-6 h-0.5 bg-slate-100" />

                  <div
                    className="absolute right-[16%] top-6 h-0.5 bg-gradient-to-l from-blue-600 to-indigo-600 transition-all duration-500"
                    style={{
                      width:
                        step === 1
                          ? "0%"
                          : step === 2
                          ? "34%"
                          : "68%",
                    }}
                  />

                  <div className="relative grid grid-cols-3">

                    {steps.map((item) => {
                      const Icon = item.icon;
                      const active = step >= item.id;

                      return (
                        <div
                          key={item.id}
                          className="flex flex-col items-center"
                        >

                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-white shadow-md transition-all duration-300 ${
                              active
                                ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >

                            {step > item.id ? (
                              <Check size={19} />
                            ) : (
                              <Icon size={19} />
                            )}

                          </div>

                          <span
                            className={`mt-2 text-xs font-bold sm:text-sm ${
                              active
                                ? "text-blue-700"
                                : "text-slate-400"
                            }`}
                          >
                            {item.title}
                          </span>

                        </div>
                      );
                    })}

                  </div>

                </div>


                <form onSubmit={handleSubmit}>

                  {/* =================================================
                      STEP 1
                  ================================================== */}

                  {step === 1 && (
                    <div className="animate-[fadeIn_.4s_ease]">

                      <div className="mb-7">

                        <div className="flex items-center gap-3">

                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <UserRound size={21} />
                          </div>

                          <div>

                            <h2 className="text-xl font-black text-slate-900">
                              معلومات شما
                            </h2>

                            <p className="mt-1 text-xs text-slate-400">
                              لطفاً معلومات تماس خود را وارد کنید.
                            </p>

                          </div>

                        </div>

                      </div>


                      <div className="grid gap-5 sm:grid-cols-2">

                        {/* Name */}

                        <div>

                          <label className="mb-2 block text-sm font-bold text-slate-700">
                            نام و نام خانوادگی
                          </label>

                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="نام شما"
                            required
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />

                        </div>


                        {/* Phone */}

                        <div>

                          <label className="mb-2 block text-sm font-bold text-slate-700">
                            شماره تماس
                          </label>

                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="07XX XXX XXX"
                            required
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />

                        </div>


                        {/* Email */}

                        <div className="sm:col-span-2">

                          <label className="mb-2 block text-sm font-bold text-slate-700">
                            ایمیل
                            <span className="mr-1 text-xs font-normal text-slate-400">
                              (اختیاری)
                            </span>
                          </label>

                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />

                        </div>

                      </div>

                    </div>
                  )}


                  {/* =================================================
                      STEP 2
                  ================================================== */}

                  {step === 2 && (
                    <div>

                      <div className="mb-7">

                        <div className="flex items-center gap-3">

                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Stethoscope size={21} />
                          </div>

                          <div>

                            <h2 className="text-xl font-black text-slate-900">
                              خدمات و داکتر
                            </h2>

                            <p className="mt-1 text-xs text-slate-400">
                              خدمات مورد نیاز و داکتر مورد نظر خود را انتخاب کنید.
                            </p>

                          </div>

                        </div>

                      </div>


                      {/* Doctors */}

                      <div>

                        <label className="mb-3 block text-sm font-bold text-slate-700">
                          انتخاب داکتر
                        </label>

                        <div className="grid gap-4 sm:grid-cols-3">

                          {doctors.map((doctor) => {
                            const selected =
                              formData.doctor === String(doctor.id);

                            return (
                              <button
                                key={doctor.id}
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    doctor: String(doctor.id),
                                  }))
                                }
                                className={`group relative overflow-hidden rounded-2xl border text-right transition-all duration-300 ${
                                  selected
                                    ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/10"
                                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                                }`}
                              >

                                <div className="relative h-32 overflow-hidden">

                                  <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                  />

                                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

                                  {selected && (
                                    <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                                      <Check size={15} />
                                    </div>
                                  )}

                                </div>

                                <div className="p-3">

                                  <p className="text-sm font-black text-slate-900">
                                    {doctor.name}
                                  </p>

                                  <p className="mt-1 text-[11px] text-blue-600">
                                    {doctor.specialty}
                                  </p>

                                </div>

                              </button>
                            );
                          })}

                        </div>

                      </div>


                      {/* Services */}

                      <div className="mt-7">

                        <label className="mb-3 block text-sm font-bold text-slate-700">
                          انتخاب خدمات
                        </label>

                        <div className="grid gap-3 sm:grid-cols-2">

                          {services.map((service) => {
                            const selected = formData.service === service;

                            return (
                              <button
                                key={service}
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    service,
                                  }))
                                }
                                className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                                  selected
                                    ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50/50"
                                }`}
                              >

                                <span>{service}</span>

                                <span
                                  className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                    selected
                                      ? "bg-blue-600 text-white"
                                      : "bg-slate-100 text-transparent"
                                  }`}
                                >
                                  <Check size={14} />
                                </span>

                              </button>
                            );
                          })}

                        </div>

                      </div>

                    </div>
                  )}


                  {/* =================================================
                      STEP 3
                  ================================================== */}

                  {step === 3 && (
                    <div>

                      <div className="mb-7">

                        <div className="flex items-center gap-3">

                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <CalendarDays size={21} />
                          </div>

                          <div>

                            <h2 className="text-xl font-black text-slate-900">
                              تاریخ و زمان نوبت
                            </h2>

                            <p className="mt-1 text-xs text-slate-400">
                              زمان مناسب خود را انتخاب کنید.
                            </p>

                          </div>

                        </div>

                      </div>


                      {/* Date */}

                      <div>

                        <label className="mb-2 block text-sm font-bold text-slate-700">
                          تاریخ نوبت
                        </label>

                        <div className="relative">

                          <CalendarDays
                            size={18}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500"
                          />

                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pr-11 pl-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          />

                        </div>

                      </div>


                      {/* Time */}

                      <div className="mt-7">

                        <label className="mb-3 block text-sm font-bold text-slate-700">
                          زمان نوبت
                        </label>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                          {timeSlots.map((time) => {
                            const selected = formData.time === time;

                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    time,
                                  }))
                                }
                                className={`rounded-xl border px-3 py-3 text-xs font-bold transition-all duration-300 ${
                                  selected
                                    ? "border-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20"
                                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50"
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}

                        </div>

                      </div>


                      {/* Message */}

                      <div className="mt-7">

                        <label className="mb-2 block text-sm font-bold text-slate-700">

                          توضیحات

                          <span className="mr-1 text-xs font-normal text-slate-400">
                            (اختیاری)
                          </span>

                        </label>

                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="اگر توضیح خاصی دارید، اینجا بنویسید..."
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-7 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />

                      </div>


                      {/* Summary */}

                      <div className="mt-7 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/60">

                        <div className="border-b border-blue-100 px-5 py-4">

                          <h3 className="font-black text-slate-900">
                            خلاصه نوبت
                          </h3>

                        </div>

                        <div className="grid gap-4 p-5 sm:grid-cols-2">

                          <div>
                            <p className="text-[11px] text-slate-400">
                              مریض
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-700">
                              {formData.name || "—"}
                            </p>
                          </div>

                          <div>
                            <p className="text-[11px] text-slate-400">
                              داکتر
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-700">
                              {selectedDoctor?.name || "—"}
                            </p>
                          </div>

                          <div>
                            <p className="text-[11px] text-slate-400">
                              خدمات
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-700">
                              {formData.service || "—"}
                            </p>
                          </div>

                          <div>
                            <p className="text-[11px] text-slate-400">
                              زمان
                            </p>

                            <p className="mt-1 text-sm font-bold text-slate-700">
                              {formData.date
                                ? `${formData.date} - `
                                : ""}
                              {formData.time || "—"}
                            </p>
                          </div>

                        </div>

                      </div>

                    </div>
                  )}


                  {/* =================================================
                      NAVIGATION
                  ================================================== */}

                  <div className="mt-10 flex items-center justify-between gap-4 border-t border-slate-100 pt-6">

                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={previousStep}
                        className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >

                        <ArrowRight
                          size={17}
                          className="transition-transform group-hover:translate-x-1"
                        />

                        مرحله قبل

                      </button>
                    ) : (
                      <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-50"
                      >
                        انصراف
                      </Link>
                    )}


                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] hover:shadow-xl"
                      >

                        مرحله بعد

                        <ArrowLeft
                          size={17}
                          className="transition-transform group-hover:-translate-x-1"
                        />

                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:100%_0] hover:shadow-xl"
                      >

                        <CheckCircle2 size={18} />

                        ثبت درخواست نوبت

                      </button>
                    )}

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM TRUST
      ====================================================== */}

      <section className="bg-gradient-to-b from-white to-blue-50/40 py-14">

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-4 sm:grid-cols-3">

            <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ShieldCheck size={21} />
              </div>

              <div>
                <p className="text-sm font-black text-slate-800">
                  اطلاعات امن
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  حفظ حریم خصوصی شما
                </p>
              </div>

            </div>


            <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Clock3 size={21} />
              </div>

              <div>
                <p className="text-sm font-black text-slate-800">
                  پاسخ‌گویی سریع
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  بررسی درخواست در اسرع وقت
                </p>
              </div>

            </div>


            <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Sparkles size={21} />
              </div>

              <div>
                <p className="text-sm font-black text-slate-800">
                  خدمات مسلکی
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  مراقبت با کیفیت و مطمئن
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default AppointmentPage;