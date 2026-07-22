import DatePickerModule from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { CalendarDays } from "lucide-react";

const DatePicker = DatePickerModule.default;

export default function PersianDatePicker({
  value,
  onChange,
  disabled = false,
}) {

const dariAfghanistan = {
  ...persian_fa,

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
    ["سه‌شنبه", "سه"],
    ["چهارشنبه", "چهار"],
    ["پنجشنبه", "پنج"],
    ["جمعه", "جمع"],
  ],
};

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

        value={value || ""}

        onChange={(date)=>{

          onChange(
            date
              ? date.format("YYYY/MM/DD")
              : ""
          );

        }}

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
        "
      />

    </div>
  );
}