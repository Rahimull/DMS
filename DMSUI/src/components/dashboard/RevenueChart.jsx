import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import DashboardCard from "./DashboardCard";

const data = [
  { month: "حمل", income: 9000 },
  { month: "ثور", income: 12000 },
  { month: "جوزا", income: 15000 },
  { month: "سرطان", income: 13500 },
  { month: "اسد", income: 18000 },
  { month: "سنبله", income: 22000 },
];

export default function RevenueChart() {
  return (
    <DashboardCard
      title="درآمد ماهانه"
      subtitle="۶ ماه اخیر"
    >
      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="income"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="income"
              stroke="#2563EB"
              strokeWidth={3}
              fill="url(#income)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}