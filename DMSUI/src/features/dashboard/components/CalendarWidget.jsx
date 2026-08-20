import { useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import { format, isSameDay } from "date-fns";
import { faIR } from "date-fns/locale";
import DashboardCard from "./DashboardCard";

export default function CalendarWidget({
  appointments = [],
  loading = false,
}) {
  const [selected, setSelected] = useState(new Date());

  // روزهایی که نوبت دارند
  const appointmentDays = useMemo(() => {
    return appointments
      .map((item) => {
        const date = new Date(item.date);

        return isNaN(date.getTime()) ? null : date;
      })
      .filter(Boolean);
  }, [appointments]);

  // نوبت‌های روز انتخاب شده
  const selectedAppointments = useMemo(() => {
    return appointments.filter((item) =>
      isSameDay(new Date(item.date), selected)
    );
  }, [appointments, selected]);

  return (
    <DashboardCard
      title="تقویم"
      subtitle="نوبت‌های امروز"
    >
      {loading ? (
        <div className="space-y-4 animate-pulse">
          <div className="h-8 w-32 rounded bg-slate-200" />
          <div className="h-[280px] rounded-xl bg-slate-100" />
        </div>
      ) : (
        <div className="space-y-4">

          {/* Calendar */}
          <div className="flex justify-center">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                if (date) {
                  setSelected(date);
                }
              }}
              locale={faIR}
              dir="rtl"
              showOutsideDays
              modifiers={{
                hasAppointment: appointmentDays,
              }}
              modifiersClassNames={{
                hasAppointment:
                  "font-bold text-blue-600",
              }}
              className="rounded-xl"
            />
          </div>

          {/* Selected Date */}
          <div className="rounded-xl bg-slate-50 p-4">

            <div className="mb-3 flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  تاریخ انتخاب شده
                </p>

                <p className="font-bold text-slate-800">
                  {format(
                    selected,
                    "yyyy/MM/dd",
                    {
                      locale: faIR,
                    }
                  )}
                </p>
              </div>

              <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
                {selectedAppointments.length} نوبت
              </div>

            </div>

            {/* Appointments */}
            {selectedAppointments.length > 0 ? (
              <div className="space-y-2">

                {selectedAppointments
                  .slice(0, 3)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        p-3
                      "
                    >
                      <div>
                        <p className="text-sm font-semibold">
                          {item.patient}
                        </p>

                        <p className="text-xs text-slate-500">
                          {item.doctor}
                        </p>
                      </div>

                      <span className="text-xs font-medium text-blue-600">
                        {item.time}
                      </span>
                    </div>
                  ))}

                {selectedAppointments.length > 3 && (
                  <p className="pt-1 text-center text-xs text-slate-400">
                    +{" "}
                    {selectedAppointments.length - 3}{" "}
                    نوبت دیگر
                  </p>
                )}

              </div>
            ) : (
              <p className="py-3 text-center text-sm text-slate-400">
                برای این روز نوبتی ثبت نشده است.
              </p>
            )}

          </div>

        </div>
      )}
    </DashboardCard>
  );
}