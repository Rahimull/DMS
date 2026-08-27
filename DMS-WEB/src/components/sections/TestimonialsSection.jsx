import {
  Quote,
  Star,
  MessageCircleHeart,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Heart,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "احمد محمدی",
    role: "مریض",
    rating: 5,
    text: "کارمندان بسیار مسلکی و خوش‌ برخورد بودند. روند گرفتن نوبت بسیار ساده بود و تجربه درمانی بسیار خوبی داشتم.",
  },
  {
    id: 2,
    name: "فاطمه رحیمی",
    role: "مریض",
    rating: 5,
    text: "از محیط پاک و خدمات مسلکی بسیار راضی بودم. داکتر قبل از شروع درمان، تمام مراحل را به صورت واضح برایم توضیح داد.",
  },
  {
    id: 3,
    name: "محمد علی",
    role: "مریض",
    rating: 5,
    text: "گرفتن نوبت بسیار آسان بود. تیم کلینیک برخورد بسیار خوبی داشت و تجربه کلی من از خدمات دندان بهتر از چیزی بود که انتظار داشتم.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/50 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm">

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <MessageCircleHeart size={14} />
            </span>

            تجربه مریضان

          </div>

          {/* Heading */}

          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

            اعتماد شما

            <span className="block bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              بزرگ‌ترین افتخار ماست
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
            رضایت مریضان برای ما تنها یک امتیاز نیست؛ بلکه انگیزه‌ای است
            برای ارائه خدمات بهتر، دقیق‌تر و حرفه‌ای‌تر.
          </p>

        </div>

        {/* =====================================================
            REVIEW SHOWCASE
        ====================================================== */}

        <div className="relative mt-14">

          {/* Decorative quote */}

          <div className="pointer-events-none absolute -right-5 -top-8 hidden h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-600/20 lg:flex">

            <Quote size={35} />

          </div>

          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr_0.75fr]">

            {/* =================================================
                LEFT REVIEW
            ================================================== */}

            <div className="group relative">

              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-blue-200 to-indigo-200 opacity-0 blur-lg transition duration-500 group-hover:opacity-40" />

              <div className="relative flex h-full flex-col justify-between rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-white p-6 shadow-[0_15px_50px_rgba(37,99,235,0.06)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_60px_rgba(37,99,235,0.12)]">

                {/* Top */}

                <div>

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-500 shadow-sm">

                      <Quote size={20} />

                    </div>

                    <span className="text-4xl font-black text-blue-100">
                      01
                    </span>

                  </div>

                  {/* Stars */}

                  <div className="mt-6 flex gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className="fill-blue-500 text-blue-500"
                      />
                    ))}

                  </div>

                  {/* Text */}

                  <p className="mt-5 text-sm leading-8 text-slate-600">
                    «{testimonials[0].text}»
                  </p>

                </div>

                {/* User */}

                <div className="mt-7 flex items-center gap-3 border-t border-blue-100 pt-5">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 font-black text-white shadow-md">
                    ا
                  </div>

                  <div>

                    <div className="flex items-center gap-1.5">

                      <p className="text-sm font-bold text-slate-900">
                        {testimonials[0].name}
                      </p>

                      <CheckCircle2
                        size={13}
                        className="text-blue-600"
                      />

                    </div>

                    <p className="mt-1 text-xs text-slate-400">
                      {testimonials[0].role}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                CENTER FEATURED REVIEW
            ================================================== */}

            <div className="group relative">

              {/* Glow */}

              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-blue-400 via-indigo-400 to-blue-300 opacity-10 blur-xl transition duration-700 group-hover:opacity-25" />

              <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-7 shadow-[0_25px_70px_rgba(37,99,235,0.22)] sm:p-9">

                {/* Decorative */}

                <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />

                <div className="pointer-events-none absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

                <div className="pointer-events-none absolute right-10 top-10 h-20 w-20 rounded-full bg-white/5 blur-xl" />

                {/* Header */}

                <div className="relative flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">

                      <MessageCircleHeart size={22} />

                    </div>

                    <div>

                      <p className="text-[11px] font-semibold text-blue-100">
                        تجربه واقعی
                      </p>

                      <p className="mt-1 text-sm font-black text-white">
                        نظر مریض ما
                      </p>
                    </div>

                  </div>

                  <Sparkles
                    size={20}
                    className="text-blue-100"
                  />

                </div>

                {/* Quote */}

                <div className="relative mt-8">

                  <Quote
                    size={46}
                    className="text-white/20"
                  />

                  <p className="mt-3 text-base font-medium leading-9 text-white sm:text-lg sm:leading-10">
                    «{testimonials[1].text}»
                  </p>

                </div>

                {/* Rating */}

                <div className="relative mt-8 flex items-center justify-between">

                  <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 backdrop-blur">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        className="fill-white text-white"
                      />
                    ))}

                    <span className="mr-2 text-xs font-black text-white">
                      ۵.۰
                    </span>

                  </div>

                  <span className="text-xs font-medium text-blue-100">
                    رضایت کامل
                  </span>

                </div>

                {/* User */}

                <div className="relative mt-7 flex items-center gap-3 border-t border-white/10 pt-6">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black text-blue-600 shadow-lg">
                    ف
                  </div>

                  <div>

                    <div className="flex items-center gap-2">

                      <p className="text-sm font-black text-white">
                        {testimonials[1].name}
                      </p>

                      <span className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-[9px] font-bold text-blue-50">

                        <CheckCircle2 size={10} />

                        تأیید شده

                      </span>

                    </div>

                    <p className="mt-1 text-xs text-blue-100">
                      {testimonials[1].role}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT REVIEW
            ================================================== */}

            <div className="group relative">

              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-indigo-200 to-blue-200 opacity-0 blur-lg transition duration-500 group-hover:opacity-40" />

              <div className="relative flex h-full flex-col justify-between rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50/80 via-white to-white p-6 shadow-[0_15px_50px_rgba(79,70,229,0.06)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_60px_rgba(79,70,229,0.12)]">

                {/* Top */}

                <div>

                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-indigo-500 shadow-sm">

                      <Heart size={19} />

                    </div>

                    <span className="text-4xl font-black text-indigo-100">
                      03
                    </span>

                  </div>

                  {/* Stars */}

                  <div className="mt-6 flex gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className="fill-indigo-500 text-indigo-500"
                      />
                    ))}

                  </div>

                  {/* Text */}

                  <p className="mt-5 text-sm leading-8 text-slate-600">
                    «{testimonials[2].text}»
                  </p>

                </div>

                {/* User */}

                <div className="mt-7 flex items-center gap-3 border-t border-indigo-100 pt-5">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 font-black text-white shadow-md">
                    م
                  </div>

                  <div>

                    <div className="flex items-center gap-1.5">

                      <p className="text-sm font-bold text-slate-900">
                        {testimonials[2].name}
                      </p>

                      <CheckCircle2
                        size={13}
                        className="text-indigo-600"
                      />

                    </div>

                    <p className="mt-1 text-xs text-slate-400">
                      {testimonials[2].role}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <div className="mt-10">

          <div className="relative overflow-hidden rounded-[1.75rem] border border-blue-100 bg-gradient-to-r from-white via-blue-50/70 to-indigo-50/70 px-6 py-5 shadow-[0_10px_40px_rgba(37,99,235,0.05)]">

            {/* Gradient line */}

            <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-l from-blue-600 via-indigo-600 to-blue-400" />

            <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row">

              {/* Trust */}

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20">

                  <CheckCircle2 size={19} />

                </div>

                <div>

                  <p className="text-sm font-black text-slate-800">
                    اعتماد و رضایت مریضان
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    تجربه خوب شما، انگیزه ما برای بهتر شدن است.
                  </p>

                </div>

              </div>

              {/* Rating */}

              <div className="flex items-center gap-3">

                <div className="flex gap-1">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-blue-600 text-blue-600"
                    />
                  ))}

                </div>

                <div className="h-5 w-px bg-slate-200" />

                <span className="text-lg font-black text-slate-800">
                  ۵.۰
                </span>

              </div>

              {/* Message */}

              <div className="flex items-center gap-2 text-xs font-bold text-blue-600">

                <MessageCircleHeart size={16} />

                رضایت شما، افتخار ماست

                <ArrowLeft size={14} />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;