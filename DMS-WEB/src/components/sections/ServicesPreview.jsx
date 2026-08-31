import { Link } from "react-router-dom";
import {
  ArrowLeft,
  HeartPulse,
  Smile,
  Syringe,
  ScanLine,
  Baby,
  ShieldCheck,
  Sparkles,
  ArrowUpLeft,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "معاینه دندان",
    description:
      "معاینه کامل دندان برای شناسایی مشکلات صحی دهان و دندان در مراحل ابتدایی.",
    icon: ScanLine,
  },
  {
    id: "02",
    title: "پاک‌ کاری دندان",
    description:
      "پاک‌ کاری مسلکی برای از بین بردن پلاک و جرم دندان و حفظ سلامت دندان‌ ها.",
    icon: Sparkles,
  },
  {
    id: "03",
    title: "پرکردن دندان",
    description:
      "درمان ترمیمی عصری برای دندان‌ های پوسیده و آسیب‌ دیده.",
    icon: ShieldCheck,
  },
  {
    id: "04",
    title: "درمان ریشه دندان",
    description:
      "درمان پیشرفته ریشه برای محافظت و حفظ دندان‌ های آسیب‌ دیده.",
    icon: Syringe,
  },
  {
    id: "05",
    title: "دندان و زیبایی",
    description:
      "بهبود ظاهر لبخند شما با استفاده از روش‌ های عصری دندان و زیبایی.",
    icon: Smile,
  },
  {
    id: "06",
    title: "دندان و زیبایی اطفال",
    description:
      "ارائه خدمات دوستانه و تخصصی دندان و زیبایی برای کودکان.",
    icon: Baby,
  },
];

const ServicesPreview = () => {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">

            <HeartPulse
              size={18}
              className="text-blue-600"
            />

            خدمات ما

          </div>

          {/* Heading */}

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

            خدمات کامل دندان و زیبایی

            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              برای یک لبخند سالم و زیبا
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
            از مراقبت‌ های پیشگیرانه تا درمان‌های تخصصی و زیبایی،
            تیم مسلکی ما خدمات جامع و متناسب با نیازهای شما را
            در یک محیط آرام و عصری ارائه می‌ کند.
          </p>

        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-[1.5rem] border border-blue-100/80 bg-white p-6 shadow-[0_10px_40px_rgba(37,99,235,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_55px_rgba(37,99,235,0.14)]"
              >

                {/* =================================================
                    HOVER GLOW
                ================================================== */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-indigo-500/10 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

                {/* =================================================
                    TOP
                ================================================== */}

                <div className="relative flex items-start justify-between">

                  {/* Icon */}

                  <div className="relative">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-blue-600/30">

                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-transparent to-transparent" />

                      <Icon
                        size={27}
                        strokeWidth={1.8}
                        className="relative"
                      />

                    </div>

                    {/* Small Glow */}

                    <div className="absolute -inset-2 -z-10 rounded-3xl bg-blue-500/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

                  </div>

                  {/* Number */}

                  <span className="text-4xl font-black tracking-tight text-blue-50 transition-colors duration-500 group-hover:text-indigo-100">
                    {service.id}
                  </span>

                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="relative mt-7">

                  <h3 className="text-lg font-extrabold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                </div>

                {/* =================================================
                    LINK
                ================================================== */}

                <div className="relative mt-6">

                  <Link
                    to="/services"
                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all duration-300 hover:text-indigo-600"
                  >
                    معلومات بیشتر

                    <ArrowLeft
                      size={17}
                      className="transition-transform duration-300 group-hover/link:-translate-x-1"
                    />
                  </Link>

                </div>

                {/* =================================================
                    BOTTOM GRADIENT
                ================================================== */}

                <div className="absolute bottom-0 right-0 h-1 w-0 rounded-full bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-400 transition-all duration-500 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-14">

          <div className="relative overflow-hidden rounded-[1.5rem] border border-blue-100 bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-700 px-6 py-7 shadow-xl shadow-blue-900/10 sm:px-8">

            {/* Decorative Circles */}

            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-indigo-300/20 blur-2xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">

              {/* Text */}

              <div className="text-center sm:text-right">

                <div className="flex items-center justify-center gap-2 sm:justify-start">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur">
                    <HeartPulse size={18} />
                  </div>

                  <p className="text-sm font-bold text-blue-100">
                    مراقبت بهتر، لبخند زیباتر
                  </p>

                </div>

                <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                  تمام خدمات ما را مشاهده کنید
                </h3>

              </div>

              {/* Button */}

              <Link
                to="/services"
                className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
              >
                مشاهده همه خدمات

                <ArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;