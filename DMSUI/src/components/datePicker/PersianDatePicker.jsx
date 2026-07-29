import DatePickerModule from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import DateObject from "react-date-object";

import persian_fa from "react-date-object/locales/persian_fa";
import TimePickerModule from "react-multi-date-picker/plugins/time_picker";

import { CalendarDays } from "lucide-react";

const DatePicker = DatePickerModule.default || DatePickerModule;
const TimePicker = TimePickerModule.default || TimePickerModule;

const dariAfghanistan = {
  ...persian_fa,

  months: [
    ["حمل", "حمل"],
    ["ثور", "ثور"],
    ["جوزا", "جوزا"],
    ["سرطان", "سرطان"],
    ["اسد", "اسد"],
    ["سنبله", "سنبله"],
    ["میزان", "میزان"],
    ["عقرب", "عقرب"],
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

const toEnglishNumber = (value = "") => {
  return String(value).replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
};

export default function PersianDatePicker({
  value = "",
  onChange,
  disabled = false,
  placeholder = "انتخاب تاریخ",
  showTime = false,
}) {
  const inputFormat = showTime ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD";

  const displayFormat = showTime ? "YYYY/MM/DD HH:mm" : "YYYY/MM/DD";

  const pickerValue = value
    ? new DateObject({
        date: value,
        calendar: gregorian,
        format: inputFormat,
      }).convert(persian)
    : "";

  const handleChange = (date) => {
    if (!date) {
      onChange("");
      return;
    }

    const result = date.convert(gregorian).format(inputFormat);

    onChange(toEnglishNumber(result));
  };

  return (
    <div className="relative w-full" dir="rtl">
      <CalendarDays
        className="
          absolute
          right-4
          top-1/2
          z-10
          -translate-y-1/2
          text-slate-400
        "
        size={18}
      />

      <DatePicker
        value={pickerValue}
        onChange={handleChange}
        calendar={persian}
        locale={dariAfghanistan}
        format={displayFormat}
        plugins={showTime ? [<TimePicker position="bottom" />] : []}
        calendarPosition="bottom-right"
        disabled={disabled}
        editable={false}
        placeholder={placeholder}
        inputClass="
          h-10
          w-full
          rounded-[5px]
          border
          border-slate-300
          bg-white
          px-4
          text-right
          text-sm
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />
    </div>
  );
}
