import {
  DollarSign,
  Users,
  CalendarDays,
  Activity,
} from "lucide-react";

import StatsCard from "./StateCard";


const StatsSection = ({ data = {}, loading = false }) => {
  const formatNumber = (value) => {
    return new Intl.NumberFormat("en-US").format(Number(value) || 0);
  };

  const formatCurrency = (value) => {
    return `${formatNumber(value)} AFN`;
  };

  const formatChange = (value) => {
    const change = Number(value) || 0;

    return {
      value: `${change > 0 ? "+" : ""}${change}%`,
      positive: change > 0,
      negative: change < 0,
    };
  };

  const items = [
    {
      id: "revenue",
      title: "درآمد ماه جاری",
      value: formatCurrency(data.monthlyRevenue),
      change: formatChange(data.revenueChange),
      icon: DollarSign,
      color: "#2563EB",
      bgColor: "#DBEAFE",
    },
    {
      id: "patients",
      title: "مجموع بیماران",
      value: formatNumber(data.totalPatients),
      change: formatChange(data.patientChange),
      icon: Users,
      color: "#16A34A",
      bgColor: "#DCFCE7",
    },
    {
      id: "appointments",
      title: "نوبت‌های ماه جاری",
      value: formatNumber(data.monthlyAppointments),
      change: formatChange(data.appointmentChange),
      icon: CalendarDays,
      color: "#D97706",
      bgColor: "#FEF3C7",
    },
    {
      id: "treatments",
      title: "درمان‌های انجام شده",
      value: formatNumber(data.completedTreatments),
      change: formatChange(data.treatmentChange),
      icon: Activity,
      color: "#7C3AED",
      bgColor: "#EDE9FE",
    },
  ];

  if (loading) {
    return (
      <section
        aria-label="در حال بارگذاری آمار"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <StatsCardSkeleton key={index} />
        ))}
      </section>
    );
  }

  return (
    <section
      aria-label="آمار کلی"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {items.map((item) => (
        <StatsCard key={item.id} item={item} />
      ))}
    </section>
  );
};

const StatsCardSkeleton = () => {
  return (
    <div
      className="
        h-36
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
      "
    >
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
          <div className="h-7 w-36 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="h-11 w-11 animate-pulse rounded-xl bg-slate-200" />
      </div>

      <div className="mt-5 h-3 w-24 animate-pulse rounded bg-slate-200" />
    </div>
  );
};

export default StatsSection;