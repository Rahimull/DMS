import DashboardCard from "./DashboardCard";
import { Clock3, UserRound } from "lucide-react";

const appointments = [
  {
    id: 1,
    patient: "احمد رحیمی",
    doctor: "دکتر نورستانی",
    time: "09:30 AM",
    status: "در انتظار",
  },
  {
    id: 2,
    patient: "فرید احمدی",
    doctor: "دکتر حامد",
    time: "10:15 AM",
    status: "تکمیل شده",
  },
  {
    id: 3,
    patient: "سمیع الله",
    doctor: "دکتر نورستانی",
    time: "11:00 AM",
    status: "لغو شده",
  },
  {
    id: 4,
    patient: "رحمان",
    doctor: "دکتر عمر",
    time: "01:45 PM",
    status: "در حال درمان",
  },
];

const badgeColor = (statu) => {
  switch (status) {
    case "تکمیل شده":
      return "bg-green-100 text-green-700";

    case "در انتظار":
      return "bg-yellow-100 text-yellow-700";

    case "در حال درمان":
      return "bg-blue-100 text-blue-700";

    default:
      return "bg-red-100 text-red-700";
  }
};

export default function RecentAppointments() {
  return (
    <DashboardCard
      title="آخرین نوبت‌ها"
      subtitle="امروز"
    >
      <div className="space-y-4">

        {appointments.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl border border-slate-100 p-4 hover:bg-slate-50 transition"
          >

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-blue-100 p-3">

                <UserRound
                  size={18}
                  className="text-blue-600"
                />

              </div>

              <div>

                <h4 className="font-semibold">

                  {item.patient}

                </h4>

                <p className="text-sm text-slate-500">

                  {item.doctor}

                </p>

              </div>

            </div>

            <div className="flex items-center gap-2 text-slate-500">

              <Clock3 size={16} />

              {item.time}

            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColor(
                item.status
              )}`}
            >
              {item.status}
            </span>

          </div>

        ))}

      </div>
    </DashboardCard>
  );
}