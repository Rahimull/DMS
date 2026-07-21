import DatePickerModule from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import { CalendarDays } from "lucide-react";

const DatePicker = DatePickerModule.default;

const dariAfghanistan = {
  name: "dari_af",

  months: [
    ["حمل", "حمل"],
    ["ثور", "ثور"],
    ["جوزا", "جوزا"],
    ["سرطان", "سر"],
    ["اسد", "اسد"],
    ["سنبله", "سنب"],
    ["میزان", "میز"],
    ["عقرب", "عقر"],
    ["قوس", "قوس"],
    ["جدی", "جدی"],
    ["دلو", "دلو"],
    ["حوت", "حوت"],
  ],

  weekDays: [
    ["شنبه", "شن"],
    ["یکشنبه", "یک"],
    ["دوشنبه", "دو"],
    ["سه شنبه", "سه"],
    ["چهارشنبه", "چهار"],
    ["پنجشنبه", "پنج"],
    ["جمعه", "جمع"],
  ],

  digits: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
};

export default function PersianDatePicker({
  value,
  onChange,
  disabled = false,
}) {
  return (
    <div className="relative w-full">

      <div
        className="
          pointer-events-none
          absolute
          right-4
          top-1/2
          z-10
          -translate-y-1/2
        "
      >
        <CalendarDays
          size={18}
          className="text-slate-400"
        />
      </div>

      <DatePicker
        value={value}
        onChange={onChange}
        calendar={persian}
        locale={dariAfghanistan}
        format="YYYY/MM/DD"
        calendarPosition="bottom-right"
        disabled={disabled}
        containerClassName="w-full"
        inputClass="
          w-full
          h-12
          rounded-2xl
          border
          border-slate-300
          bg-white
          pr-11
          pl-4
          text-sm
          text-slate-700
          shadow-sm
          transition-all
          duration-200
          hover:border-slate-400
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
          focus:outline-none
        "
      />

    </div>
  );
}