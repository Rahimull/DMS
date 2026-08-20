import {
  CalendarPlus,
  CreditCard,
  FileText,
  Pill,
  UserPlus,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import DashboardCard from "./DashboardCard";

const actions = [
  {
    title: "ثبت بیمار",
    icon: UserPlus,
    color: "bg-blue-100 text-blue-600",
    path: "/patients",
  },
  {
    title: "ثبت نوبت",
    icon: CalendarPlus,
    color: "bg-green-100 text-green-600",
    path: "/appointments",
  },
  {
    title: "ثبت نسخه",
    icon: Pill,
    color: "bg-purple-100 text-purple-600",
    path: "/prescriptions",
  },
  {
    title: "صدور فاکتور",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
    path: "/invoices",
  },
  {
    title: "ثبت پرداخت",
    icon: CreditCard,
    color: "bg-red-100 text-red-600",
    path: "/payments",
  },
];

export default function QuickActions() {
  const navigate = useNavigate();

  const handleAction = (action) => {
    navigate(action.path);
  };

  return (
    <DashboardCard
      title="دسترسی سریع"
      subtitle="عملیات پرکاربرد"
    >
      <div className="grid grid-cols-2 gap-3">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              onClick={() => handleAction(action)}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-md
                active:scale-95
              "
            >

              <div
                className={`
                  mx-auto
                  mb-3
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  ${action.color}
                `}
              >
                <Icon size={21} />
              </div>

              <p className="
                text-xs
                font-semibold
                text-slate-700
                transition-colors
                group-hover:text-blue-600
              ">
                {action.title}
              </p>

            </button>
          );
        })}

      </div>
    </DashboardCard>
  );
}