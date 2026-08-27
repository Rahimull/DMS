import dental1 from "@/assets/images/hero/1.jpg";
import dental2 from "@/assets/images/hero/2.jpg";
import dental3 from "@/assets/images/hero/8.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Phone,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    id: 1,
    image: dental1,
    badge: "کلینیک دندان‌پزشکی DMS",
    title: "لبخند زیبا،",
    highlight: "اعتماد به نفس بیشتر",
    description:
      "با تیم مسلکی و تجهیزات مدرن، بهترین خدمات دندان‌پزشکی را در محیطی دوستانه و آرام تجربه کنید.",
  },
  {
    id: 2,
    image: dental2,
    badge: "مراقبت مسلکی از دندان",
    title: "سلامت دندان‌های شما،",
    highlight: "اولویت ماست",
    description:
      "خدمات جامع دندان‌پزشکی با استفاده از روش‌های مدرن و تیم مسلکی برای شما و خانواده‌تان.",
  },
  {
    id: 3,
    image: dental3,
    badge: "تجربه متفاوت دندان‌پزشکی",
    title: "مراقبت بهتر،",
    highlight: "لبخند سالم‌تر",
    description:
      "از معاینه ابتدایی تا درمان‌های تخصصی، ما در تمام مراحل در کنار شما هستیم.",
  },
];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const slide = slides[current];

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-slate-50"
    >
      <div className="relative min-h-[620px] lg:min-h-[680px]">

        {/* Background Image */}
        <div className="absolute inset-0">

          {slides.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.badge}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
                index === current
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/90 to-white/20 lg:from-white lg:via-white/85 lg:to-transparent" />

        </div>

        {/* Content */}
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:min-h-[680px] lg:px-8">

          <div className="max-w-xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur">
              <Sparkles size={16} />
              {slide.badge}
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-[1.25] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

              {slide.title}

              <span className="block text-blue-600">
                {slide.highlight}
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                گرفتن نوبت
                <CalendarDays size={18} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                مشاهده خدمات
                <ArrowLeft size={17} />
              </Link>

            </div>

            {/* Phone */}
            <div className="mt-7 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  برای معلومات بیشتر تماس بگیرید
                </p>

                <a
                  href="tel:+93700000000"
                  className="text-sm font-bold text-slate-900"
                >
                  +93 700 000 000
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Previous */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="اسلاید قبلی"
          className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-blue-600 hover:text-white lg:left-8"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="اسلاید بعدی"
          className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-blue-600 hover:text-white lg:right-8"
        >
          <ArrowRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">

          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`اسلاید ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-blue-600"
                  : "w-2.5 bg-white shadow"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default HomeHero;