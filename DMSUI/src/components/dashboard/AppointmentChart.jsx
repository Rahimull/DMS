import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import DashboardCard from "./DashboardCard";


const data= [
  {
    name: "تکمیل شده",
    value: 52,
  },
  {
    name: "در انتظار",
    value: 24,
  },
  {
    name: "در حال درمان",
    value: 14,
  },
  {
    name: "لغو شده",
    value: 10,
  },
];

const COLORS = [
  "#2563EB",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
];

export default function AppointmentChart() {
  return (
    <DashboardCard
      title="وضعیت نوبت‌ها"
      subtitle="امروز"
    >
      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}