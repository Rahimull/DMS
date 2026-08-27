import { Link } from "react-router-dom";
import {
  CalendarDays,
  Phone,
  Headphones,
} from "lucide-react";

const AppointmentCTA = () => {
  return (
    <section
      dir="rtl"
      className="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-blue-700">

        <div className="grid items-center lg:grid-cols-2">

          {/* Content */}
          <div className="p-8 text-white sm:p-12">

            <p className="text-sm font-semibold text-blue-200">
              وقت خود را امروز ثبت کنید
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              برای لبخندی سالم
              <span className="block text-cyan-200">
                قدم اول را بردارید
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100">
              نوبت خود را به صورت آنلاین ثبت کنید و در زمان مناسب
              به کلینیک مراجعه نمایید.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <Link
                to="/appointment"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                <CalendarDays size={18} />
                ثبت نوبت
              </Link>

              <a
                href="tel:+93700000000"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <Phone size={18} />
                تماس با ما
              </a>

            </div>

          </div>

          {/* Image */}
          <div className="relative min-h-[350px]">

            <img
              src="/images/clinic/reception.jpg"
              alt="محیط کلینیک DMS"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-blue-900/20" />

            {/* Floating card */}
            <div className="absolute bottom-6 right-6 rounded-2xl bg-white p-4 shadow-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Headphones size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    پشتیبانی آنلاین
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    ۲۴ ساعت در خدمت شما هستیم
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppointmentCTA;