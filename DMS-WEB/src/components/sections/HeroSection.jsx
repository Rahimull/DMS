import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import dental1 from "@/assets/images/hero/1.jpg";
import dental2 from "@/assets/images/hero/2.jpg";
import dental3 from "@/assets/images/hero/3.jpg";

const slides = [
  {
    id: 1,
    image: dental1,
    badge: "مراقبت مدرن دندان",
    title: "لبخند شما،",
    highlight: "افتخار ماست",
    description:
      "با استفاده از خدمات مدرن دندان و زیبایی، داکتران مسلکی و تکنالوژی پیشرفته، برای داشتن دندان‌های سالم‌تر و لبخندی زیباتر در کنار شما هستیم.",
  },

  {
    id: 2,
    image: dental2,
    badge: "تیم مسلکی و باتجربه",
    title: "سلامت دندان‌های شما،",
    highlight: "اولویت ماست",
    description:
      "ما با استفاده از روش‌های مدرن درمانی و تجهیزات پیشرفته، خدمات باکیفیت دندان‌پزشکی را در یک محیط آرام و مناسب ارائه می‌کنیم.",
  },

  {
    id: 3,
    image: dental3,
    badge: "تجربه متفاوت دندان‌پزشکی",
    title: "لبخندی زیبا،",
    highlight: "اعتماد بیشتر",
    description:
      "از معاینه و پیشگیری تا درمان‌های تخصصی و زیبایی، تیم مسلکی ما در تمام مراحل مراقبت از دندان‌های شما همراه‌تان است.",
  },
];

const SLIDE_DURATION = 5000;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const slide = slides[currentSlide];

  /* =========================================================
     AUTO SLIDER
  ========================================================= */

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [paused]);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
      dir="rtl"
      className="relative min-h-[760px] overflow-hidden bg-indigo-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* =====================================================
          BACKGROUND SLIDES
      ====================================================== */}

      <div className="absolute inset-0">

        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              currentSlide === index
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {/* Image */}

            <img
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 h-full w-full object-cover ${
                currentSlide === index
                  ? "hero-image-active"
                  : ""
              }`}
            />

            {/* Main Overlay */}

            <div className="absolute inset-0 bg-gradient-to-l from-indigo-950 via-indigo-950/75 to-indigo-950/20" />

            {/* Bottom Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-indigo-950/20" />

            {/* Blue Glow */}

            <div className="absolute -right-40 top-1/4 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[140px]" />

            {/* Indigo Glow */}

            <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-600/20 blur-[130px]" />
          </div>
        ))}

      </div>

      {/* =====================================================
          TOP HEADER
      ====================================================== */}

      <div className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 sm:px-6 lg:px-8">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-xl">

            <span className="text-lg font-extrabold">
              DMS
            </span>

          </div>

          <div className="hidden sm:block">

            <p className="text-sm font-bold text-white">
              کلینیک دندان و زیبایی نورستانی
            </p>

            <p className="mt-1 text-[11px] text-blue-100/60">
              مراقبت مسلکی • تکنالوژی مدرن
            </p>

          </div>

        </div>

        {/* Phone */}

        <a
          href="tel:+93700000000"
          className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-indigo-700 sm:px-4"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
            <Phone size={15} />
          </div>

          <div className="hidden text-right sm:block">

            <p className="text-[10px] text-white/50 group-hover:text-indigo-400">
              تماس با ما
            </p>

            <p className="text-xs font-bold">
              +93 700 000 000
            </p>

          </div>
        </a>

      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-20 mx-auto flex min-h-[620px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

        <div className="w-full max-w-3xl">

          <div
            key={slide.id}
            className="hero-content-animation"
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-2xl backdrop-blur-xl sm:text-sm">

              <Sparkles
                size={15}
                className="text-blue-200"
              />

              {slide.badge}

            </div>

            {/* Heading */}

            <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.4] tracking-tight text-white sm:text-5xl lg:text-7xl">

              {slide.title}

              <span className="mt-1 block bg-gradient-to-r from-blue-200 via-white to-indigo-200 bg-clip-text text-transparent">
                {slide.highlight}
              </span>

            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-sm leading-8 text-blue-50/90 sm:text-base lg:text-lg">
              {slide.description}
            </p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {/* Appointment */}

              <Link
                to="/appointment"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-blue-950/30"
              >

                <CalendarDays size={19} />

                گرفتن نوبت

                <ArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />

              </Link>

              {/* Services */}

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-indigo-700"
              >

                مشاهده خدمات

                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />

              </Link>

            </div>

            {/* =================================================
                TRUST ITEMS
            ================================================== */}

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">

              <div className="flex items-center gap-2 text-xs text-white/85">

                <CheckCircle2
                  size={17}
                  className="text-blue-300"
                />

                خدمات باکیفیت

              </div>

              <div className="flex items-center gap-2 text-xs text-white/85">

                <ShieldCheck
                  size={17}
                  className="text-blue-300"
                />

                تیم مسلکی

              </div>

              <div className="flex items-center gap-2 text-xs text-white/85">

                <Clock3
                  size={17}
                  className="text-blue-300"
                />

                نوبت‌دهی آسان

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          RIGHT SIDE INFORMATION CARD
      ====================================================== */}

      <div className="absolute bottom-28 left-6 z-30 hidden xl:block">

        <div className="w-[220px] rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700">
              <ShieldCheck size={21} />
            </div>

            <div>

              <p className="text-xs text-blue-100/60">
                مراقبت مسلکی
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                سلامتی شما
              </p>

            </div>

          </div>

          <div className="mt-4 h-px bg-white/10" />

          <p className="mt-3 text-xs leading-6 text-blue-100/70">
            خدمات باکیفیت با تمرکز بر سلامت، آرامش و رضایت مریض.
          </p>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-30">

        <div className="mx-auto max-w-7xl px-4 pb-5 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-5 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Rating */}

            <div className="flex items-center gap-4">

              <div className="flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className="fill-blue-200 text-blue-200"
                  />
                ))}

              </div>

              <div className="h-4 w-px bg-white/20" />

              <p className="text-xs text-white/70">
                تجربه‌ای مطمئن برای بیماران
              </p>

            </div>

            {/* Slider Controls */}

            <div className="flex items-center gap-4">

              {/* Counter */}

              <div className="flex items-center gap-2 text-white">

                <span className="text-2xl font-bold">
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>

                <span className="text-white/30">
                  /
                </span>

                <span className="text-xs text-white/50">
                  {String(slides.length).padStart(2, "0")}
                </span>

              </div>

              {/* Progress */}

              <div className="hidden h-1 w-32 overflow-hidden rounded-full bg-white/15 sm:block">

                <div
                  key={currentSlide}
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-300"
                  style={{
                    animation: `heroProgress ${SLIDE_DURATION}ms linear forwards`,
                  }}
                />

              </div>

              {/* Controls */}

              <div className="flex gap-2">

                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="تصویر قبلی"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-indigo-700"
                >
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="تصویر بعدی"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-indigo-700"
                >
                  <ArrowLeft size={18} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          THUMBNAILS
      ====================================================== */}

      <div className="absolute bottom-28 right-6 z-30 hidden lg:block">

        <div className="flex flex-col gap-3">

          {slides.map((item, index) => (

            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`group relative overflow-hidden rounded-xl border-2 shadow-xl transition-all duration-500 ${
                currentSlide === index
                  ? "h-16 w-24 border-white"
                  : "h-14 w-20 border-white/20 opacity-60 hover:scale-105 hover:opacity-100"
              }`}
            >

              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 transition ${
                  currentSlide === index
                    ? "bg-blue-600/20"
                    : "bg-indigo-950/30"
                }`}
              />

              {currentSlide === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
              )}

            </button>

          ))}

        </div>

      </div>

      {/* =====================================================
          MOBILE DOTS
      ====================================================== */}

      <div className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 gap-2 lg:hidden">

        {slides.map((item, index) => (

          <button
            key={item.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`تصویر ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-2 bg-white/40"
            }`}
          />

        ))}

      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>
        {`
          @keyframes heroProgress {
            from {
              width: 0%;
            }

            to {
              width: 100%;
            }
          }

          @keyframes heroContent {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroImage {
            from {
              transform: scale(1);
            }

            to {
              transform: scale(1.08);
            }
          }

          .hero-content-animation {
            animation: heroContent 700ms ease-out both;
          }

          .hero-image-active {
            animation: heroImage ${SLIDE_DURATION + 1000}ms ease-out both;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-content-animation,
            .hero-image-active {
              animation: none;
            }
          }
        `}
      </style>

    </section>
  );
};

export default HeroSection;