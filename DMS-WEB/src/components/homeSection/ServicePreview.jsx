import { Link } from "react-router-dom";
import {
  ArrowLeft,
  HeartPulse,
} from "lucide-react";

const services = [
  {
    title: "معاینه دندان",
    description: "معاینه کامل برای تشخیص مشکلات دهان و دندان.",
    image: "/images/services/examination.jpg",
  },
  {
    title: "پاک‌کاری دندان",
    description: "از بین بردن پلاک و جرم برای حفظ سلامت دندان.",
    image: "/images/services/cleaning.jpg",
  },
  {
    title: "پرکردن دندان",
    description: "درمان دندان‌های پوسیده و آسیب‌دیده.",
    image: "/images/services/filling.jpg",
  },
  {
    title: "درمان ریشه دندان",
    description: "حفظ و درمان دندان‌های آسیب‌دیده.",
    image: "/images/services/root-canal.jpg",
  },
  {
    title: "دندان‌پزشکی زیبایی",
    description: "بهبود ظاهر لبخند با روش‌های مدرن.",
    image: "/images/services/cosmetic.jpg",
  },
  {
    title: "دندان‌پزشکی اطفال",
    description: "مراقبت تخصصی و دوستانه برای کودکان.",
    image: "/images/services/pediatric.jpg",
  },
];

const ServicesPreview = () => {
  return (
    <section
      dir="rtl"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <HeartPulse size={16} />
            خدمات ما
          </div>

          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            خدمات جامع دندان‌پزشکی
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            از مراقبت‌های پیشگیرانه تا درمان‌های تخصصی،
            همه خدمات مورد نیاز شما در یک مرکز.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-lg font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
                >
                  بیشتر بخوانید
                  <ArrowLeft size={16} />
                </Link>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-10 text-center">

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            مشاهده همه خدمات
            <ArrowLeft size={17} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;