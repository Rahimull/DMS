import DashboardCard from "./DashboardCard";
import {
  Clock3,
  UserRound,
} from "lucide-react";

const badgeColor = (status) => {
  switch (status) {
    case "تکمیل شده":
      return "bg-green-100 text-green-700";

    case "در انتظار":
      return "bg-yellow-100 text-yellow-700";

    case "در حال درمان":
      return "bg-blue-100 text-blue-700";

    case "لغو شده":
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-100 text-slate-600";
  }
};

export default function RecentAppointments({
  appointments = [],
  loading = false,
  onView,
}) {
  return (
    <DashboardCard
      title="آخرین نوبت‌ها"
      subtitle="امروز"
    >
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                h-[72px]
                animate-pulse
                rounded-xl
                bg-slate-100
              "
            />
          ))}
        </div>
      ) : appointments.length === 0 ? (
        <div className="flex h-[200px] items-center justify-center text-sm text-slate-400">
          امروز نوبتی ثبت نشده است.
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((item) => (
            <div
              key={item.id}
              onClick={() => onView?.(item)}
              className="
                flex
                cursor-pointer
                items-center
                justify-between
                gap-4
                rounded-xl
                border
                border-slate-100
                p-4
                transition
                hover:bg-slate-50
              "
            >
              {/* Patient */}
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                  "
                >
                  <UserRound
                    size={18}
                    className="text-blue-600"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="truncate font-semibold text-slate-800">
                    {item.patient ||
                      item.patientName ||
                      "-"}
                  </h4>

                  <p className="truncate text-sm text-slate-500">
                    {item.doctor ||
                      item.doctorName ||
                      item.staffName ||
                      "-"}
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex shrink-0 items-center gap-2 text-sm text-slate-500">
                <Clock3 size={16} />

                <span dir="ltr">
                  {item.time ||
                    item.appointmentTime ||
                    "-"}
                </span>
              </div>

              {/* Status */}
              <span
                className={`
                  shrink-0
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-medium
                  ${badgeColor(item.status)}
                `}
              >
                {item.status || "نامشخص"}
              </span>
            </div>
          ))}
        </div>
      )}
    </DashboardCard>
  );
}