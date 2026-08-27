import {
  Users,
  Stethoscope,
  CalendarCheck,
  Award,
} from "lucide-react";

const stats = [
  {
    value: "۵,۰۰۰+",
    label: "مریضان راضی",
    icon: Users,
  },
  {
    value: "۲۵+",
    label: "داکتران متخصص",
    icon: Stethoscope,
  },
  {
    value: "۱۰,۰۰۰+",
    label: "نوبت‌های ثبت‌شده",
    icon: CalendarCheck,
  },
  {
    value: "۱۵+",
    label: "سال تجربه",
    icon: Award,
  },
];

const StatsSection = () => {
  return (
    <section
      dir="rtl"
      className="bg-blue-700 py-12"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-4 border-white/20 px-5 py-5 lg:border-l last:border-l-0"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon size={24} />
              </div>

              <div>
                <p className="text-2xl font-bold text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-blue-100 sm:text-sm">
                  {stat.label}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default StatsSection;