import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowDownLeft,
  HeartPulse,
  ScanLine,
  Sparkles,
  ShieldCheck,
  Syringe,
  Smile,
  Baby,
  CircleCheck,
  CalendarDays,
  Clock3,
  UsersRound,
  Stethoscope,
} from "lucide-react";

import service1 from "@/assets/images/services/1.jpg";
import service2 from "@/assets/images/services/2.jpg";
import service3 from "@/assets/images/services/3.jpg";
import service4 from "@/assets/images/services/4.jpg";
import service5 from "@/assets/images/services/5.jpg";
import service6 from "@/assets/images/services/6.jpg";

const services = [
  {
    id: "01",
    title: "معاینه دندان",
    shortTitle: "معاینه",
    description:
      "معاینه دقیق و کامل دندان و دهان برای تشخیص مشکلات و انتخاب بهترین روش درمان.",
    icon: ScanLine,
    image: service1,
    tag: "پیشگیرانه",
  },
  {
    id: "02",
    title: "پاک ‌کاری دندان",
    shortTitle: "پاک‌ کاری",
    description:
      "پاک‌ کاری مسلکی برای از بین بردن جرم، پلاک و حفظ سلامت و زیبایی دندان‌ها.",
    icon: Sparkles,
    image: service2,
    tag: "مراقبتی",
  },
  {
    id: "03",
    title: "پرکردن دندان",
    shortTitle: "ترمیم",
    description:
      "ترمیم دندان‌ های پوسیده و آسیب‌ دیده با روش‌ های عصری و مواد باکیفیت.",
    icon: ShieldCheck,
    image: service3,
    tag: "ترمیمی",
  },
  {
    id: "04",
    title: "درمان ریشه دندان",
    shortTitle: "عصب‌کشی",
    description:
      "درمان تخصصی ریشه دندان برای حفظ دندان و کاهش درد و مشکلات ناشی از عفونت.",
    icon: Syringe,
    image: service4,
    tag: "تخصصی",
  },
  {
    id: "05",
    title: "دندان و زیبایی",
    shortTitle: "زیبایی",
    description:
      "بهبود ظاهر لبخند و دندان ‌ها با استفاده از روش‌ های عصری دندان و زیبایی.",
    icon: Smile,
    image: service5,
    tag: "زیبایی",
  },
  {
    id: "06",
    title: "دندان اطفال",
    shortTitle: "اطفال",
    description:
      "خدمات دوستانه و تخصصی برای مراقبت از سلامت دندان کودکان در محیطی آرام.",
    icon: Baby,
    image: service6,
    tag: "اطفال",
  },
];

const features = [
  {
    icon: Stethoscope,
    title: "تیم مسلکی",
    description: "ارائه خدمات توسط داکتران باتجربه",
  },
  {
    icon: ShieldCheck,
    title: "مراقبت مطمئن",
    description: "توجه ویژه به سلامت و رضایت مریضان",
  },
  {
    icon: Clock3,
    title: "نوبت‌ دهی آسان",
    description: "انتخاب زمان مناسب برای مراجعه",
  },
];

const Services = () => {
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

          <div className="absolute right-1/2 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28">

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Text */}

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                  <HeartPulse size={15} />
                </span>

                خدمات دندان و زیبایی

              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.25] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

                مراقبت حرفه ‌ای برای

                <span className="mt-2 block bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  لبخند سالم و زیبا
                </span>

              </h1>

              <p className="mt-6 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">

                از معاینه و مراقبت‌ های پیشگیرانه تا درمان‌های تخصصی و
                زیبایی، خدمات جامع دندان را با کیفیت و توجه ویژه
                به نیازهای هر مریض ارائه می‌ کنیم.

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
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  مشاهده خدمات

                  <ArrowDownLeft size={17} />

                </a>

              </div>

              {/* Mini stats */}

              <div className="mt-10 flex flex-wrap gap-6">

                <div className="flex items-center gap-2">
                  <CircleCheck className="text-blue-600" size={18} />
                  <span className="text-sm font-semibold text-slate-600">
                    خدمات تخصصی
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CircleCheck className="text-indigo-600" size={18} />
                  <span className="text-sm font-semibold text-slate-600">
                    تیم باتجربه
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CircleCheck className="text-blue-600" size={18} />
                  <span className="text-sm font-semibold text-slate-600">
                    محیط آرام
                  </span>
                </div>

              </div>

            </div>

            {/* Visual */}

            <div className="relative mx-auto w-full max-w-xl">

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_25px_80px_rgba(37,99,235,0.14)]">

                <div className="relative h-[390px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-blue-100 to-indigo-100">

                  <img
                    src={service1}
                    alt="خدمات دندان"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 right-6 left-6">

                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600">
                          <HeartPulse size={21} />
                        </div>

                        <div>
                          <p className="text-xs text-blue-100">
                            مراقبت تخصصی
                          </p>

                          <p className="mt-1 text-lg font-black text-white">
                            سلامت دندان شما، اولویت ماست
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Floating card */}

              <div className="absolute -bottom-5 -right-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-xl sm:-right-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                    <UsersRound size={20} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      تجربه بهتر
                    </p>
                    <p className="mt-1 text-sm font-black text-slate-800">
                      مراقبت برای هر مریض
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="relative bg-white py-14">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-4 md:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)]"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/15">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-slate-500">
                      {feature.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white py-20 sm:py-24 lg:py-28"
      >

        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 text-sm font-bold text-blue-700">

              <Stethoscope size={17} />

              خدمات ما

            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

              خدمات جامع دندان

              <span className="mt-2 block bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                برای سلامت و زیبایی شما
              </span>

            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-500 sm:text-base">
              تمام خدمات مورد نیاز شما در یک محیط حرفه‌ ای، آرام و
              مجهز با توجه به نیازهای فردی هر مریض.
            </p>

          </div>

          {/* Grid */}

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-blue-100/70 bg-white shadow-[0_10px_40px_rgba(37,99,235,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_65px_rgba(37,99,235,0.13)]"
                >

                  {/* Image */}

                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/5 to-transparent" />

                    {/* Number */}

                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-sm font-black text-blue-700 shadow-lg backdrop-blur">
                      {service.id}
                    </div>

                    {/* Tag */}

                    <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-blue-600/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                      {service.tag}
                    </div>

                    {/* Title */}

                    <div className="absolute bottom-5 right-5 left-5">

                      <div className="flex items-end justify-between gap-3">

                        <div>

                          <h3 className="text-xl font-black text-white">
                            {service.title}
                          </h3>

                        </div>

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                          <Icon size={21} />
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-6">

                    <p className="text-sm leading-7 text-slate-500">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                      <span className="flex items-center gap-2 text-xs font-bold text-blue-600">
                        <CircleCheck size={15} />
                        خدمات مسلکی
                      </span>

                      <Link
                        to="/appointment"
                        className="group/link inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-blue-600"
                      >
                        گرفتن نوبت

                        <ArrowLeft
                          size={16}
                          className="transition-transform duration-300 group-hover/link:-translate-x-1"
                        />
                      </Link>

                    </div>

                  </div>

                  {/* Bottom gradient */}

                  <div className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-400 transition-all duration-500 group-hover:w-full" />

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Text */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                <HeartPulse size={17} />
                روند دریافت خدمات
              </div>

              <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
                دریافت خدمات
                <span className="block bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  ساده و آسان است
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-slate-500">
                ما تلاش کرده‌ ایم روند مراجعه و دریافت خدمات را برای
                شما تا حد امکان ساده، سریع و منظم بسازیم.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  ["01", "انتخاب خدمت", "خدمت مورد نیاز خود را انتخاب کنید."],
                  ["02", "گرفتن نوبت", "زمان مناسب خود را برای مراجعه انتخاب کنید."],
                  ["03", "مراجعه به کلینیک", "در زمان تعیین‌ شده به کلینیک مراجعه کنید."],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="flex gap-4"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-black text-white shadow-lg shadow-blue-600/15">
                      {number}
                    </div>

                    <div>
                      <h3 className="text-sm font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {text}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* CTA visual */}

            <div className="relative">

              <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-8 shadow-2xl shadow-blue-900/15 sm:p-10">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
                  <CalendarDays size={29} />
                </div>

                <h3 className="mt-7 text-2xl font-black text-white sm:text-3xl">
                  آماده‌اید نوبت خود را بگیرید؟
                </h3>

                <p className="mt-4 text-sm leading-7 text-blue-100">
                  زمان مناسب خود را انتخاب کنید و برای دریافت خدمات
                  دندان با تیم ما در تماس باشید.
                </p>

                <Link
                  to="/appointment"
                  className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
                >
                  گرفتن نوبت

                  <ArrowLeft
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Services;