import { RotateCcw, SmilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DentalChart({
  value = [],
  onChange,
}) {
  // =========================================
  // FDI Tooth Numbers
  // =========================================

  const upperRight = [18, 17, 16, 15, 14, 13, 12, 11];
  const upperLeft = [21, 22, 23, 24, 25, 26, 27, 28];

  const lowerRight = [48, 47, 46, 45, 44, 43, 42, 41];
  const lowerLeft = [31, 32, 33, 34, 35, 36, 37, 38];

  // =========================================
  // Normalize value
  // =========================================

  const selected = Array.isArray(value)
    ? value.map(Number)
    : [];

  // =========================================
  // Toggle Tooth
  // =========================================

  const toggleTooth = (tooth) => {
    let updated;

    if (selected.includes(tooth)) {
      // حذف دندان
      updated = selected.filter(
        (item) => item !== tooth
      );
    } else {
      // اضافه کردن دندان
      updated = [...selected, tooth];
    }

    console.log("DentalChart changed:", updated);

    onChange(updated);
  };

  // =========================================
  // Clear
  // =========================================

  const clearSelection = () => {
    onChange([]);
  };

  // =========================================
  // Tooth Component
  // =========================================

  const Tooth = ({ number }) => {
    const isSelected = selected.includes(number);

    return (
      <button
        type="button"
        onClick={() => toggleTooth(number)}
        title={`دندان ${number}`}
        className={`
          group
          relative
          flex
          h-16
          w-12
          shrink-0
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-xl
          border
          transition-all
          duration-200
          focus:outline-none
          focus:ring-2
          focus:ring-blue-300

          ${
            isSelected
              ? `
                border-blue-600
                bg-blue-600
                text-white
                shadow-lg
                scale-105
              `
              : `
                border-slate-200
                bg-white
                text-slate-600
                shadow-sm
                hover:border-blue-400
                hover:bg-blue-50
                hover:text-blue-700
                hover:-translate-y-1
              `
          }
        `}
      >
        {/* Tooth Shape */}
        <div
          className={`
            mb-1
            h-8
            w-8
            rounded-[45%]
            border
            transition-all

            ${
              isSelected
                ? "border-white bg-white/20"
                : "border-slate-300 bg-slate-50 group-hover:border-blue-400"
            }
          `}
        />

        {/* Tooth Number */}
        <span className="text-[11px] font-bold">
          {number}
        </span>
      </button>
    );
  };

  // =========================================
  // Jaw Row
  // =========================================

  const JawRow = ({
    right,
    left,
  }) => {
    return (
      <div className="flex items-center justify-center gap-1">

        {/* Right Side */}
        <div className="flex gap-1">
          {right.map((tooth) => (
            <Tooth
              key={tooth}
              number={tooth}
            />
          ))}
        </div>

        {/* Midline */}
        <div className="mx-3 flex h-16 items-center">
          <div className="h-14 border-l-2 border-dashed border-slate-300" />
        </div>

        {/* Left Side */}
        <div className="flex gap-1">
          {left.map((tooth) => (
            <Tooth
              key={tooth}
              number={tooth}
            />
          ))}
        </div>

      </div>
    );
  };

  // =========================================
  // Render
  // =========================================

  return (
    <div
      dir="ltr"
      className="
        w-full
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
      "
    >

      {/* =====================================
          Header
      ===================================== */}

      <div
        dir="rtl"
        className="
          mb-5
          flex
          items-center
          justify-between
        "
      >
        {/* Title */}
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-blue-50
            "
          >
            <SmilePlus
              size={21}
              className="text-blue-600"
            />
          </div>

          <div>
            <h3 className="font-bold text-slate-800">
              Dental Chart
            </h3>

            <p className="text-xs text-slate-500">
              دندان‌های مورد نظر را انتخاب کنید
            </p>
          </div>

        </div>

        {/* Clear */}
        {selected.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={clearSelection}
            className="
              gap-1
              text-xs
              text-red-500
              hover:bg-red-50
            "
          >
            <RotateCcw size={14} />
            پاک کردن
          </Button>
        )}

      </div>

      {/* =====================================
          Chart
      ===================================== */}

      <div
        className="
          overflow-x-auto
          rounded-2xl
          bg-slate-50
          p-5
        "
      >

        {/* ================================
            Upper Jaw
        ================================= */}

        <div className="mb-3 text-center">
          <span
            className="
              inline-flex
              rounded-full
              bg-white
              px-4
              py-1
              text-xs
              font-semibold
              text-slate-600
              shadow-sm
            "
          >
            فک بالا
          </span>
        </div>

        <JawRow
          right={upperRight}
          left={upperLeft}
        />

        {/* ================================
            Center
        ================================= */}

        <div className="my-6 flex items-center gap-3">

          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-[10px] font-bold text-slate-400">
            MIDLINE
          </span>

          <div className="h-px flex-1 bg-slate-200" />

        </div>

        {/* ================================
            Lower Jaw
        ================================= */}

        <div className="mb-3 text-center">
          <span
            className="
              inline-flex
              rounded-full
              bg-white
              px-4
              py-1
              text-xs
              font-semibold
              text-slate-600
              shadow-sm
            "
          >
            فک پایین
          </span>
        </div>

        <JawRow
          right={lowerRight}
          left={lowerLeft}
        />

      </div>

      {/* =====================================
          Selected Teeth
      ===================================== */}

      <div
        dir="rtl"
        className="
          mt-4
          rounded-xl
          border
          border-blue-100
          bg-blue-50
          p-4
        "
      >

        <div className="flex items-center justify-between">

          {/* Selected Teeth */}
          <div>

            <p className="text-xs text-slate-500">
              دندان‌های انتخاب شده
            </p>

            <p className="mt-1 text-sm font-bold text-blue-700">
              {selected.length > 0
                ? selected.join("، ")
                : "هیچ دندانی انتخاب نشده است"}
            </p>

          </div>

          {/* Count */}
          <div
            className="
              flex
              h-9
              min-w-9
              items-center
              justify-center
              rounded-full
              bg-blue-600
              px-3
              text-sm
              font-bold
              text-white
            "
          >
            {selected.length}
          </div>

        </div>

      </div>

    </div>
  );
}