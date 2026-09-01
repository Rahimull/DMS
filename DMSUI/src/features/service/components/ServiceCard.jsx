import {
Edit,
Trash2,
Eye,
Stethoscope,
Clock3,
Banknote,
CheckCircle2,
ArrowUpLeft,
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
"بدون نام";

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

const formattedPrice = Number(price || 0).toLocaleString();

return ( <article
   dir="rtl"
   className="
     group relative overflow-hidden rounded-3xl
     border border-blue-100/80
     bg-gradient-to-br from-white via-blue-50/70 to-indigo-50/80
     p-5 shadow-[0_12px_40px_rgba(30,64,175,0.08)]
     transition-all duration-500
     hover:-translate-y-2
     hover:border-blue-200
     hover:shadow-[0_25px_60px_rgba(37,99,235,0.16)]
   "
 >
{/* =============================================
BACKGROUND DECORATIONS
============================================== */}

```
  <div className="
    pointer-events-none absolute -right-16 -top-16
    h-40 w-40 rounded-full
    bg-blue-200/30 blur-3xl
    transition-all duration-500
    group-hover:scale-150
  " />

  <div className="
    pointer-events-none absolute -bottom-20 -left-20
    h-40 w-40 rounded-full
    bg-indigo-200/30 blur-3xl
    transition-all duration-500
    group-hover:scale-125
  " />

  {/* Top Gradient Accent */}

  <div className="
    absolute inset-x-0 top-0 h-1
    bg-gradient-to-l from-blue-600 via-blue-500 to-indigo-600
  " />

  {/* =============================================
      CONTENT
  ============================================== */}

  <div className="relative">

    {/* =============================================
        HEADER
    ============================================== */}

    <div className="flex items-start justify-between gap-4">

      <div className="flex min-w-0 items-center gap-4">

        {/* Icon */}

        <div className="
          relative flex h-14 w-14 shrink-0
          items-center justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-600 via-blue-600 to-indigo-600
          text-white
          shadow-lg shadow-blue-600/20
          transition-all duration-500
          group-hover:scale-110
          group-hover:rotate-3
          group-hover:shadow-xl
        ">

          <div className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-br
            from-white/30 via-transparent to-transparent
          " />

          <Stethoscope
            size={26}
            strokeWidth={1.8}
            className="relative"
          />

        </div>

        {/* Title */}

        <div className="min-w-0">

          <div className="flex items-center gap-2">

            <h3
              title={serviceName}
              className="
                truncate text-base font-black
                text-slate-900
                transition-colors duration-300
                group-hover:text-blue-700
              "
            >
              {serviceName}
            </h3>

          </div>

          <p className="mt-1 text-xs font-medium text-slate-400">
            خدمات تخصصی دندان و زیبایی
          </p>

        </div>

      </div>

      {/* Status */}

      <div className="
        flex shrink-0 items-center gap-1.5
        rounded-full
        border border-emerald-100
        bg-white/80
        px-3 py-1.5
        text-xs font-bold text-emerald-600
        shadow-sm backdrop-blur-sm
      ">

        <CheckCircle2 size={14} />

        فعال

      </div>

    </div>

    {/* =============================================
        DESCRIPTION
    ============================================== */}

    <div className="mt-5">

      {description ? (

        <p className="
          line-clamp-2 min-h-[48px]
          text-sm leading-7 text-slate-500
        ">
          {description}
        </p>

      ) : (

        <p className="
          flex min-h-[48px] items-center
          text-sm italic text-slate-400
        ">
          توضیحات برای این خدمت ثبت نشده است.
        </p>

      )}

    </div>

    {/* =============================================
        INFORMATION CARDS
    ============================================== */}

    <div className="mt-5 grid grid-cols-2 gap-3">

      {/* Price */}

      <div className="
        group/info relative overflow-hidden
        rounded-2xl
        border border-white
        bg-white/75
        p-3.5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-0.5
        hover:shadow-md
      ">

        <div className="
          absolute -left-6 -top-6
          h-16 w-16 rounded-full
          bg-blue-100/60 blur-2xl
        " />

        <div className="relative">

          <div className="flex items-center gap-2 text-slate-400">

            <div className="
              flex h-7 w-7 items-center justify-center
              rounded-lg bg-blue-50 text-blue-600
            ">
              <Banknote size={15} />
            </div>

            <span className="text-xs font-medium">
              قیمت خدمت
            </span>

          </div>

          <p className="
            mt-3 text-base font-black
            text-slate-900
          ">
            {formattedPrice}

            <span className="
              mr-1 text-[11px]
              font-medium text-slate-400
            ">
              افغانی
            </span>

          </p>

        </div>

      </div>

      {/* Duration */}

      <div className="
        relative overflow-hidden
        rounded-2xl
        border border-white
        bg-white/75
        p-3.5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-0.5
        hover:shadow-md
      ">

        <div className="
          absolute -right-6 -top-6
          h-16 w-16 rounded-full
          bg-indigo-100/60 blur-2xl
        " />

        <div className="relative">

          <div className="flex items-center gap-2 text-slate-400">

            <div className="
              flex h-7 w-7 items-center justify-center
              rounded-lg
              bg-indigo-50 text-indigo-600
            ">
              <Clock3 size={15} />
            </div>

            <span className="text-xs font-medium">
              مدت زمان
            </span>

          </div>

          <p className="
            mt-3 text-base font-black
            text-slate-900
          ">
            {duration ? duration : "—"}

            {duration && (
              <span className="
                mr-1 text-[11px]
                font-medium text-slate-400
              ">
                دقیقه
              </span>
            )}

          </p>

        </div>

      </div>

    </div>

    {/* =============================================
        FOOTER / ACTIONS
    ============================================== */}

    <div className="
      mt-6 flex items-center justify-between
      border-t border-blue-100/70
      pt-4
    ">

      {/* View Button */}

      <button
        type="button"
        onClick={() => onView?.(service)}
        className="
          group/view flex items-center gap-2
          rounded-xl
          bg-white/70
          px-3.5 py-2.5
          text-xs font-bold text-slate-600
          shadow-sm
          transition-all duration-300
          hover:bg-gradient-to-l
          hover:from-blue-600
          hover:to-indigo-600
          hover:text-white
          hover:shadow-lg hover:shadow-blue-600/20
        "
      >

        <Eye
          size={16}
          className="
            transition-transform duration-300
            group-hover/view:scale-110
          "
        />

        مشاهده جزئیات

        <ArrowUpLeft
          size={14}
          className="
            transition-transform duration-300
            group-hover/view:-translate-x-0.5
            group-hover/view:-translate-y-0.5
          "
        />

      </button>

      {/* Action Buttons */}

      <div className="flex items-center gap-2">

        {/* Edit */}

        <button
          type="button"
          onClick={() => onEdit?.(service)}
          title="ویرایش خدمت"
          aria-label="ویرایش خدمت"
          className="
            group/edit flex h-10 w-10
            items-center justify-center
            rounded-xl
            border border-blue-100
            bg-white
            text-blue-600
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:border-blue-600
            hover:bg-blue-600
            hover:text-white
            hover:shadow-lg
            hover:shadow-blue-600/20
          "
        >

          <Edit
            size={17}
            className="
              transition-transform duration-300
              group-hover/edit:scale-110
            "
          />

        </button>

        {/* Delete */}

        <button
          type="button"
          onClick={() => onDelete?.(service.id)}
          title="حذف خدمت"
          aria-label="حذف خدمت"
          className="
            group/delete flex h-10 w-10
            items-center justify-center
            rounded-xl
            border border-red-100
            bg-white
            text-red-500
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:border-red-500
            hover:bg-red-500
            hover:text-white
            hover:shadow-lg
            hover:shadow-red-500/20
          "
        >

          <Trash2
            size={17}
            className="
              transition-transform duration-300
              group-hover/delete:scale-110
            "
          />

        </button>

      </div>

    </div>

  </div>

  {/* Bottom Hover Accent */}

  <div className="
    absolute bottom-0 right-0 h-1 w-0
    bg-gradient-to-l from-blue-600 via-blue-500 to-indigo-600
    transition-all duration-500
    group-hover:w-full
  " />

</article>


);
}
