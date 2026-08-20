
import React from "react";
import {
  Edit,
  Trash2,
  Eye,
  Stethoscope,
  Clock,
  DollarSign,
} from "lucide-react";

export default function ServiceCard({
  service,
  onView,
  onEdit,
  onDelete,
}) {
  const serviceName =
    service?.name ||
    service?.serviceName ||
    service?.title ||
    "-";

  const description =
    service?.description ||
    service?.details ||
    "";

  const price =
    service?.price ??
    service?.fee ??
    service?.serviceFee ??
    0;

  const duration =
    service?.duration ||
    service?.durationMinutes ||
    null;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-blue-200
        bg-gradient-to-l from-blue-200 via-to-white
        p-5
        border-l-6
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-lg
      "
    >
      {/* Top accent */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-1
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-blue-400
        "
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-blue-50
              text-blue-600
              transition
              group-hover:bg-blue-600
              group-hover:text-white
            "
          >
            <Stethoscope size={25} strokeWidth={2} />
          </div>

          <div className="min-w-0">
            <h3
              className="
                truncate
                text-base
                font-bold
                text-slate-800
              "
              title={serviceName}
            >
              {serviceName}
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              خدمات دندان‌پزشکی
            </p>
          </div>
        </div>

        {/* Status */}
        <span
          className="
            shrink-0
            rounded-full
            bg-emerald-50
            px-3
            py-1
            text-xs
            font-semibold
            text-emerald-600
          "
        >
          فعال
        </span>
      </div>

      {/* Description */}
      {description && (
        <p
          className="
            mt-4
            line-clamp-2
            min-h-[40px]
            text-sm
            leading-6
            text-slate-500
          "
        >
          {description}
        </p>
      )}

      {/* Information */}
      <div
        className="
          mt-5
          grid
          grid-cols-2
          gap-3
        "
      >
        {/* Price */}
        <div
          className="
            rounded-xl
            bg-slate-50
            p-3
          "
        >
          <div className="flex items-center gap-2 text-slate-400">
            <DollarSign size={15} />

            <span className="text-xs">
              قیمت
            </span>
          </div>

          <p
            className="
              mt-1
              text-sm
              font-bold
              text-slate-800
            "
          >
            {Number(price).toLocaleString()}{" "}
            <span className="text-xs font-normal text-slate-400">
              افغانی
            </span>
          </p>
        </div>

        {/* Duration */}
        <div
          className="
            rounded-xl
            bg-slate-50
            p-3
          "
        >
          <div className="flex items-center gap-2 text-slate-400">
            <Clock size={15} />

            <span className="text-xs">
              مدت
            </span>
          </div>

          <p
            className="
              mt-1
              text-sm
              font-bold
              text-slate-800
            "
          >
            {duration
              ? `${duration} دقیقه`
              : "ثبت نشده"}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          pt-4
        "
      >
        <button
          type="button"
          onClick={() => onView?.(service)}
          className="
            flex
            items-center
            gap-1.5
            rounded-lg
            px-3
            py-2
            text-xs
            font-medium
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-800
          "
        >
          <Eye size={16} />
          مشاهده
        </button>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onEdit?.(service)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              text-blue-500
              transition
              hover:bg-blue-50
            "
            title="ویرایش"
          >
            <Edit size={17} />
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(service.id)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              text-red-500
              transition
              hover:bg-red-50
            "
            title="حذف"
          >
            <Trash2 size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

