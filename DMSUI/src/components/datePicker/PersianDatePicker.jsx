import DatePickerModule from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import gregorian from "react-date-object/calendars/gregorian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { CalendarDays } from "lucide-react";

const DatePicker = DatePickerModule.default;


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


// تبدیل ارقام فارسی به انگلیسی
const toEnglishNumber = (str) => {
  return str.replace(/[۰-۹]/g, (d) =>
    "۰۱۲۳۴۵۶۷۸۹".indexOf(d)
  );
};


export default function PersianDatePicker({
  value,
  onChange,
  disabled = false,
}) {


  // مقدار ذخیره شده از Backend
  // 2026-08-01
  // تبدیل برای نمایش شمسی

  const pickerValue = value
    ? new DateObject({
        date: value,
        calendar: gregorian,
        format: "YYYY-MM-DD",
      }).convert(persian)
    : "";


  const handleChange = (date) => {

    if (!date) {
      onChange("");
      return;
    }


    const gregorianDate = date
      .convert(gregorian)
      .format("YYYY-MM-DD");


    const cleanDate = toEnglishNumber(
      gregorianDate
    );


    onChange(cleanDate);
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

        value={pickerValue}

        onChange={handleChange}

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
          outline-none
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-100
        "

      />

    </div>
  );
}