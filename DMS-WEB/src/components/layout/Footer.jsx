import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowLeft,
  CalendarDays,
  HeartPulse,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { title: "خانه", to: "/" },
  { title: "درباره ما", to: "/about" },
  { title: "خدمات ما", to: "/services" },
  { title: "داکتران ما", to: "/doctors" },
  { title: "گرفتن نوبت", to: "/appointment" },
  { title: "تماس با ما", to: "/contact" },
];

const services = [
  "معاینه دندان",
  "پاک‌کاری دندان",
  "پرکردن دندان",
  "درمان ریشه دندان",
  "جراحی دندان",
  "دندان‌پزشکی زیبایی",
];

const Footer = () => {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-indigo-50/50 text-slate-600"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Right Glow */}
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-3xl" />

        {/* Left Glow */}
        <div className="absolute -left-40 bottom-10 h-[420px] w-[420px] rounded-full bg-indigo-200/30 blur-3xl" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />

      </div>

      {/* =====================================================
          TOP GRADIENT
      ====================================================== */}

      <div className="relative h-1 w-full bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-400" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            APPOINTMENT CTA
        ====================================================== */}

        <div className="relative -mt-1 overflow-hidden rounded-b-[2rem] border-x border-b border-blue-200/50 bg-gradient-to-l from-blue-600 via-blue-600 to-indigo-700 px-6 py-7 shadow-[0_20px_50px_rgba(37,99,235,0.15)] sm:px-8 lg:px-10">

          {/* Decorative Glow */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -left-24 -bottom-32 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

          {/* Small circles */}

          <div className="pointer-events-none absolute right-1/2 top-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            {/* Content */}

            <div className="flex items-center gap-4">

              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur">

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />

                <HeartPulse
                  size={25}
                  strokeWidth={1.8}
                  className="relative"
                />

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <Sparkles
                    size={13}
                    className="text-blue-100"
                  />

                  <p className="text-xs font-bold text-blue-100">
                    مراقبت بهتر، لبخند زیباتر
                  </p>

                </div>

                <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                  برای نوبت بعدی خود آماده‌اید؟
                </h3>

              </div>

            </div>

            {/* Button */}

            <Link
              to="/appointment"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
            >
              <CalendarDays
                size={17}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              گرفتن نوبت

              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </Link>

          </div>

        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_0.9fr_1.2fr]">

          {/* =================================================
              BRAND
          ================================================== */}

          <div>

            {/* Logo */}

            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >

              <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-600/30">

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-transparent to-transparent" />

                <HeartPulse
                  size={25}
                  strokeWidth={1.8}
                  className="relative"
                />

              </div>

              <div>

                <h2 className="text-xl font-black tracking-tight text-slate-900">
                  DMS
                </h2>

                <p className="mt-0.5 text-[11px] font-semibold text-slate-400">
                  سیستم مدیریت دندان‌پزشکی
                </p>

              </div>

            </Link>

            {/* Description */}

            <p className="mt-6 max-w-sm text-sm leading-8 text-slate-500">
              سیستم مدرن مدیریت دندان‌پزشکی برای ساده‌سازی روند
              گرفتن نوبت، مدیریت مریضان، داکتران و خدمات کلینیکی
              در یک محیط ساده، آرام و حرفه‌ای.
            </p>

            {/* Trust */}

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-xs font-bold text-blue-700 shadow-sm">

              <CheckCircle2
                size={15}
                className="text-blue-600"
              />

              خدمات مسلکی و قابل اعتماد

            </div>

            {/* Social */}

            <div className="mt-7 flex items-center gap-2.5">

              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="group/social flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
              >
                <FaFacebookF
                  size={16}
                  className="transition-transform duration-300 group-hover/social:scale-110"
                />
              </a>

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="group/social flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-white text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-600/20"
              >
                <FaInstagram
                  size={17}
                  className="transition-transform duration-300 group-hover/social:scale-110"
                />
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="group/social flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-400 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
              >
                <FaLinkedinIn
                  size={16}
                  className="transition-transform duration-300 group-hover/social:scale-110"
                />
              </a>

            </div>

          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>

            <h3 className="text-sm font-black text-slate-900">
              لینک‌های سریع
            </h3>

            <div className="mt-3 h-1 w-9 rounded-full bg-gradient-to-l from-blue-600 to-indigo-600" />

            <ul className="mt-6 space-y-4">

              {quickLinks.map((link) => (
                <li key={link.to}>

                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-all duration-300 hover:text-blue-700"
                  >

                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-50 text-blue-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      <ArrowLeft size={11} />
                    </span>

                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                      {link.title}
                    </span>

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div>

            <h3 className="text-sm font-black text-slate-900">
              خدمات ما
            </h3>

            <div className="mt-3 h-1 w-9 rounded-full bg-gradient-to-l from-indigo-600 to-blue-600" />

            <ul className="mt-6 space-y-4">

              {services.map((service) => (
                <li key={service}>

                  <Link
                    to="/services"
                    className="group flex items-center gap-3 text-sm font-medium text-slate-500 transition-all duration-300 hover:text-blue-700"
                  >

                    <span className="relative flex h-5 w-5 items-center justify-center">

                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-125 group-hover:bg-indigo-600" />

                      <span className="absolute inset-0 rounded-full border border-blue-200 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />

                    </span>

                    {service}

                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>

            <h3 className="text-sm font-black text-slate-900">
              تماس با ما
            </h3>

            <div className="mt-3 h-1 w-9 rounded-full bg-gradient-to-l from-blue-600 to-indigo-600" />

            <div className="mt-6 space-y-3">

              {/* Address */}

              <div className="group flex gap-3 rounded-2xl border border-blue-100/80 bg-white/80 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                  <MapPin size={17} />

                </div>

                <div>

                  <p className="text-[10px] font-bold text-slate-400">
                    آدرس
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    کابل، افغانستان
                  </p>

                </div>

              </div>

              {/* Phone */}

              <a
                href="tel:+93700000000"
                className="group flex gap-3 rounded-2xl border border-blue-100/80 bg-white/80 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">

                  <Phone size={17} />

                </div>

                <div>

                  <p className="text-[10px] font-bold text-slate-400">
                    شماره تماس
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-700">
                    +93 700 000 000
                  </p>

                </div>

              </a>

              {/* Email */}

              <a
                href="mailto:info@dms.com"
                className="group flex gap-3 rounded-2xl border border-blue-100/80 bg-white/80 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                  <Mail size={17} />

                </div>

                <div className="min-w-0">

                  <p className="text-[10px] font-bold text-slate-400">
                    ایمیل
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-700">
                    info@dms.com
                  </p>

                </div>

              </a>

              {/* Working Hours */}

              <div className="group flex gap-3 rounded-2xl border border-indigo-100/80 bg-white/80 p-3.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">

                  <Clock3 size={17} />

                </div>

                <div>

                  <p className="text-[10px] font-bold text-slate-400">
                    ساعات کاری
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    شنبه تا پنج‌شنبه
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-slate-400">
                    ۸:۰۰ صبح تا ۵:۰۰ عصر
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="relative border-t border-blue-100/70 bg-white/50">

        {/* Gradient line */}

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-right lg:px-8">

          <p className="text-xs font-medium text-slate-400 sm:text-sm">
            © {new Date().getFullYear()} DMS. تمامی حقوق محفوظ است.
          </p>

          <div className="flex items-center justify-center gap-5 text-xs font-medium sm:text-sm">

            <a
              href="#"
              className="text-slate-400 transition-colors duration-300 hover:text-blue-600"
            >
              سیاست حفظ حریم خصوصی
            </a>

            <span className="h-4 w-px bg-blue-100" />

            <a
              href="#"
              className="text-slate-400 transition-colors duration-300 hover:text-indigo-600"
            >
              شرایط و مقررات
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;