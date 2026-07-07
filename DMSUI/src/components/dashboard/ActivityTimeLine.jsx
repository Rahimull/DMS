import DashboardCard from "./DashboardCard";
import {
  UserPlus,
  CalendarCheck,
  Receipt,
  Pill,
} from "lucide-react";

const activities = [
  {
    id: 1,
    icon: UserPlus,
    color: "bg-blue-100 text-blue-600",
    title: "بیمار جدید ثبت شد",
    description: "احمد رحیمی",
    time: "۵ دقیقه قبل",
  },
  {
    id: 2,
    icon: CalendarCheck,
    color: "bg-green-100 text-green-600",
    title: "نوبت تأیید شد",
    description: "فرید احمدی",
    time: "۲۰ دقیقه قبل",
  },
  {
    id: 3,
    icon: Receipt,
    color: "bg-orange-100 text-orange-600",
    title: "پرداخت انجام شد",
    description: "AFN 3,500",
    time: "۱ ساعت قبل",
  },
  {
    id: 4,
    icon: Pill,
    color: "bg-purple-100 text-purple-600",
    title: "نسخه ثبت شد",
    description: "سمیع الله",
    time: "۲ ساعت قبل",
  },
];

export default function ActivityTimeline() {
  return (
    <DashboardCard
      title="فعالیت‌های اخیر"
      subtitle="آخرین رویدادهای سیستم"
    >
      <div className="space-y-6">
        {activities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start gap-4"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color}`}
              >
                <Icon size={18} />
              </div>

              <div className="flex-1">
                <h4 className="font-medium text-slate-800">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.description}
                </p>
              </div>

              <span className="text-xs text-slate-400">
                {item.time}
              </span>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
}