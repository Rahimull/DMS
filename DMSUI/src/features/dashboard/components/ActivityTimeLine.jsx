import DashboardCard from "./DashboardCard";
import {
  UserPlus,
  CalendarCheck,
  Receipt,
  Pill,
  Activity,
} from "lucide-react";

const activityConfig = {
  patient: {
    icon: UserPlus,
    color: "bg-blue-100 text-blue-600",
  },

  appointment: {
    icon: CalendarCheck,
    color: "bg-green-100 text-green-600",
  },

  payment: {
    icon: Receipt,
    color: "bg-orange-100 text-orange-600",
  },

  prescription: {
    icon: Pill,
    color: "bg-purple-100 text-purple-600",
  },

  default: {
    icon: Activity,
    color: "bg-slate-100 text-slate-600",
  },
};

export default function ActivityTimeline({
  activities = [],
  loading = false,
}) {
  return (
    <DashboardCard
      title="فعالیت‌های اخیر"
      subtitle="آخرین رویدادهای سیستم"
    >
      {/* Loading */}
      {loading ? (
        <div className="space-y-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex animate-pulse items-start gap-4"
            >
              <div className="h-10 w-10 shrink-0 rounded-full bg-slate-200" />

              <div className="flex-1 space-y-2">
                <div className="h-4 w-40 rounded bg-slate-200" />
                <div className="h-3 w-24 rounded bg-slate-200" />
              </div>

              <div className="h-3 w-16 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      ) : activities.length === 0 ? (
        /* Empty */
        <div className="flex h-[200px] items-center justify-center text-sm text-slate-400">
          فعالیتی برای نمایش وجود ندارد.
        </div>
      ) : (
        /* Activities */
        <div className="relative space-y-6">
          {activities.map((item, index) => {
            const config =
              activityConfig[item.type] ||
              activityConfig.default;

            const Icon = config.icon;

            return (
              <div
                key={item.id ?? index}
                className="relative flex items-start gap-4"
              >
                {/* Timeline Line */}
                {index !== activities.length - 1 && (
                  <div
                    className="
                      absolute
                      right-5
                      top-10
                      h-[calc(100%+1.5rem)]
                      w-px
                      bg-slate-200
                    "
                  />
                )}

                {/* Icon */}
                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    ${config.color}
                  `}
                >
                  <Icon size={18} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-slate-800">
                    {item.title}
                  </h4>

                  <p className="truncate text-sm text-slate-500">
                    {item.description || "-"}
                  </p>
                </div>

                {/* Time */}
                <span className="shrink-0 text-xs text-slate-400">
                  {item.time || "-"}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </DashboardCard>
  );
}