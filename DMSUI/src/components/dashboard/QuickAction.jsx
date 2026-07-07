import {
  CalendarPlus,
  CreditCard,
  FileText,
  Pill,
  UserPlus,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

const actions = [
  {
    title: "ثبت بیمار",
    icon: UserPlus,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "ثبت نوبت",
    icon: CalendarPlus,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "ثبت نسخه",
    icon: Pill,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "صدور فاکتور",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "ثبت پرداخت",
    icon: CreditCard,
    color: "bg-red-100 text-red-600",
  },
];

export default function QuickActions() {
  return (
    <DashboardCard
      title="دسترسی سریع"
      subtitle="عملیات پرکاربرد"
    >
      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              className="
              rounded-2xl
              border
              border-slate-200
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-300
              hover:shadow-lg
              "
            >

              <div
                className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${action.color}`}
              >
                <Icon size={22} />
              </div>

              <p className="text-sm font-semibold text-slate-700">
                {action.title}
              </p>

            </button>

          );

        })}

      </div>
    </DashboardCard>
  );
}