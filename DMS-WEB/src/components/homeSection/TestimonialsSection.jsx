import {
  Quote,
  Star,
  MessageCircleHeart,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "احمد محمدی",
    role: "مریض",
    text: "کارمندان بسیار مسلکی و خوش‌برخورد بودند. روند گرفتن نوبت ساده بود و تجربه درمانی بسیار خوبی داشتم.",
  },
  {
    id: 2,
    name: "فاطمه رحیمی",
    role: "مریض",
    text: "از محیط پاک و خدمات مسلکی بسیار راضی بودم. داکتر تمام مراحل درمان را به صورت واضح برایم توضیح داد.",
  },
  {
    id: 3,
    name: "محمد علی",
    role: "مریض",
    text: "گرفتن نوبت بسیار آسان بود. تیم کلینیک برخورد خوبی داشت و تجربه کلی من بسیار رضایت‌بخش بود.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      dir="rtl"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm">
            <MessageCircleHeart size={16} />
            نظرات مریضان
          </div>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            آنچه مریضان ما می‌گویند
          </h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >

              <Quote
                size={38}
                className="absolute left-5 top-5 text-blue-100"
              />

              <div className="flex gap-1">

                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 text-sm leading-7 text-slate-600">
                «{testimonial.text}»
              </p>

              <div className="mt-6 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;