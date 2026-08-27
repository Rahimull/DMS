import {
  ShieldCheck,
  Clock3,
  HeartHandshake,
  Settings,
  UserRoundCheck,
} from "lucide-react";

const features = [
  {
    title: "داکتران متخصص",
    description: "تیم مسلکی و باتجربه",
    icon: UserRoundCheck,
  },
  {
    title: "تکنالوژی پیشرفته",
    description: "تجهیزات مدرن و دقیق",
    icon: Settings,
  },
  {
    title: "مراقبت شخصی",
    description: "برنامه درمانی مناسب شما",
    icon: HeartHandshake,
  },
  {
    title: "زمان‌بندی انعطاف‌پذیر",
    description: "انتخاب وقت دلخواه شما",
    icon: Clock3,
  },
  {
    title: "محیط کاملاً مصئون",
    description: "رعایت کامل استانداردهای صحی",
    icon: ShieldCheck,
  },
];

const HomeFeatures = () => {
  return (
    <section
      dir="rtl"
      className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl rounded-2xl border border-slate-100 bg-white shadow-xl">

        <div className="grid sm:grid-cols-2 lg:grid-cols-5">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`flex items-center gap-3 px-5 py-6 ${
                  index !== features.length - 1
                    ? "border-b border-slate-100 lg:border-b-0 lg:border-l"
                    : ""
                }`}
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {feature.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HomeFeatures;