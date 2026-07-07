import { useState } from "react";
import { DayPicker } from "react-day-picker";
import DashboardCard from "./DashboardCard";

export default function CalendarWidget() {
  const [selected, setSelected] = useState(new Date());

  return (
    <DashboardCard
      title="تقویم"
      subtitle="نوبت‌های امروز"
    >
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
    </DashboardCard>
  );
}