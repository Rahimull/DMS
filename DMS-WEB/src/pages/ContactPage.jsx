import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    // بعداً می‌توانید API را اینجا وصل کنید
  };

  return (
    <main dir="rtl" className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 py-20 sm:py-24 lg:py-28">

        {/* Background decorations */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">

                <MessageCircle size={15} />

              </span>

              تماس با ما

            </div>

            {/* Heading */}

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

              ما همیشه آماده

              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                شنیدن صدای شما هستیم
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">

              اگر سوالی دارید، به اطلاعات بیشتری نیاز دارید یا می‌ خواهید
              برای خدمات دندان و زیبایی نوبت بگیرید، با ما در تماس شوید.
              تیم ما با خوشحالی در خدمت شما خواهد بود.

            </p>

            {/* Quick CTA */}

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                to="/appointment"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                گرفتن نوبت

                <ArrowLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />

              </Link>

              <a
                href="tel:+93700000000"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >

                <Phone size={17} />

                تماس مستقیم

              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT INFO
      ====================================================== */}

      <section className="relative bg-white py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Address */}

            <div className="group rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 p-6 shadow-[0_10px_40px_rgba(37,99,235,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">

                <MapPin size={22} />

              </div>

              <p className="mt-5 text-xs font-semibold text-slate-400">
                آدرس کلینیک
              </p>

              <h3 className="mt-2 font-black text-slate-900">
                چهلستون، ناحیه 7، کابل، افغانستان
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                آماده خدمت‌ رسانی به شما هستیم
              </p>

            </div>


            {/* Phone */}

            <a
              href="tel:+93700000000"
              className="group rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 p-6 shadow-[0_10px_40px_rgba(37,99,235,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >

              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/20">

                <Phone size={22} />

              </div>

              <p className="mt-5 text-xs font-semibold text-slate-400">
                شماره تماس
              </p>

              <h3 className="mt-2 font-black text-slate-900" dir="ltr">
                +93 700 000 000
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                برای معلومات بیشتر تماس بگیرید
              </p>

            </a>


            {/* Email */}

            <a
              href="mailto:info@dms.com"
              className="group rounded-[1.5rem] border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/50 p-6 shadow-[0_10px_40px_rgba(79,70,229,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl"
            >

              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/20">

                <Mail size={22} />

              </div>

              <p className="mt-5 text-xs font-semibold text-slate-400">
                ایمیل
              </p>

              <h3 className="mt-2 break-all font-black text-slate-900">
                info@dms.com
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                در هر زمان پیام خود را ارسال کنید
              </p>

            </a>


            {/* Working Hours */}

            <div className="group rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 p-6 shadow-[0_10px_40px_rgba(37,99,235,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-600/20">

                <Clock3 size={22} />

              </div>

              <p className="mt-5 text-xs font-semibold text-slate-400">
                ساعات کاری
              </p>

              <h3 className="mt-2 font-black text-slate-900">
                شنبه تا پنج‌ شنبه
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                ۸:۰۰ صبح تا ۵:۰۰ عصر
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM + MAP
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-indigo-50/30 py-20 sm:py-24">

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

            {/* =================================================
                FORM
            ================================================== */}

            <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_20px_60px_rgba(37,99,235,0.08)] sm:p-8 lg:p-10">

              <div className="mb-8">

                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-2 text-xs font-bold text-blue-700">

                  <Sparkles size={15} />

                  پیام خود را ارسال کنید

                </div>

                <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">

                  با ما در تماس باشید

                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">

                  فورم زیر را تکمیل کنید. تیم ما در اولین فرصت با شما
                  تماس خواهد گرفت.

                </p>

              </div>


              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name + Phone */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      نام شما
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="نام و نام خانوادگی"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>


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
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>

                </div>


                {/* Email + Subject */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      ایمیل
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>


                  <div>

                    <label className="mb-2 block text-sm font-bold text-slate-700">
                      موضوع
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="موضوع پیام"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />

                  </div>

                </div>


                {/* Message */}

                <div>

                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    پیام شما
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="پیام خود را اینجا بنویسید..."
                    rows={6}
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_100%] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition-all duration-500 hover:-translate-y-1 hover:bg-[position:100%_0] hover:shadow-xl"
                >

                  ارسال پیام

                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />

                </button>

              </form>

            </div>


            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div className="space-y-6">

              {/* Map Placeholder */}

              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">

                {/* Decorative */}

                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />


                {/* Grid */}

                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                    backgroundSize: "35px 35px",
                  }}
                />


                <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center p-8 text-center text-white">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 shadow-2xl backdrop-blur">

                    <MapPin size={36} />

                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    موقعیت کلینیک
                  </h3>

                  <p className="mt-2 text-sm text-blue-100">
                    کابل، افغانستان
                  </p>
                  <p className="mt-2 text-sm text-blue-100">
                    ناحیه 7، چهلستون
                  </p>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
                  >

                    مشاهده موقعیت

                    <ArrowLeft size={16} />

                  </button>

                </div>

              </div>


              {/* Trust Card */}

              <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_15px_50px_rgba(37,99,235,0.07)]">

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">

                    <ShieldCheck size={23} />

                  </div>

                  <div>

                    <h3 className="font-black text-slate-900">
                      چرا با ما تماس بگیرید؟
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      تیم ما آماده پاسخ‌ گویی به سوالات شما و کمک
                      برای انتخاب خدمات مناسب است.
                    </p>

                  </div>

                </div>


                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">

                    <CheckCircle2
                      size={17}
                      className="text-blue-600"
                    />

                    پاسخ‌ گویی سریع

                  </div>

                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">

                    <CheckCircle2
                      size={17}
                      className="text-blue-600"
                    />

                    مشاوره مسلکی

                  </div>

                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">

                    <CheckCircle2
                      size={17}
                      className="text-blue-600"
                    />

                    خدمات قابل اعتماد

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 py-10 shadow-2xl shadow-blue-900/15 sm:px-10 lg:px-14">

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-7 text-center sm:flex-row sm:text-right">

              <div>

                <p className="text-sm font-bold text-blue-100">
                  مراقبت از لبخند شما، اولویت ماست
                </p>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  آماده‌ اید اولین قدم را بردارید؟
                </h2>

              </div>

              <Link
                to="/appointment"
                className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
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

      </section>

    </main>
  );
};

export default ContactPage;