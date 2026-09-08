import {
  Check,
  CircleAlert,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";
import { toast } from "sonner";

const duration = 4000;

const variants = {
  success: {
    title: "عملیات موفق",
    icon: Check,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    border: "border-emerald-100",
    accent: "bg-emerald-500",
    progress: "bg-emerald-500",
    glow: "shadow-emerald-100/70",
  },

  error: {
    title: "عملیات ناموفق",
    icon: CircleAlert,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    border: "border-rose-100",
    accent: "bg-rose-500",
    progress: "bg-rose-500",
    glow: "shadow-rose-100/70",
  },

  warning: {
    title: "توجه",
    icon: TriangleAlert,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    border: "border-amber-100",
    accent: "bg-amber-500",
    progress: "bg-amber-500",
    glow: "shadow-amber-100/70",
  },

  info: {
    title: "اطلاعات",
    icon: Info,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "border-blue-100",
    accent: "bg-blue-500",
    progress: "bg-blue-500",
    glow: "shadow-blue-100/70",
  },
};

const showToast = (type, message, description = "") => {
  const variant = variants[type];
  const Icon = variant.icon;

  toast.custom(
    (id) => (
      <div
        dir="rtl"
        className={`
          dms-toast
          relative
          w-[420px]
          overflow-hidden
          rounded-[24px]
          border
          ${variant.border}
          bg-white
          shadow-2xl
          ${variant.glow}
        `}
      >
        {/* Top Accent */}
        <div
          className={`
            dms-toast-accent
            absolute
            right-0
            top-0
            h-full
            w-[4px]
            text-md
            ${variant.accent}
          `}
        />

        {/* Content */}
        <div className="relative p-5">

          {/* Header */}
          <div className="flex items-start gap-4">

            {/* Icon */}
            <div
              className={`
                dms-toast-icon
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                ${variant.iconBg}
                ${variant.iconColor}
              `}
            >
              <Icon
                className="h-6 w-6"
                strokeWidth={2.4}
              />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">

              <div className="flex items-center gap-2">

                <h4 className="text-[15px] font-bold text-slate-800">
                  {variant.title}
                </h4>

                <span
                  className={`
                    dms-toast-status
                    h-1.5
                    w-1.5
                    rounded-full
                    ${variant.accent}
                  `}
                />
              </div>

              <p className="dms-toast-message mt-2 text-[13px] leading-6 text-slate-600">
                {message}
              </p>

              {description && (
                <p className="dms-toast-description mt-1.5 text-[11px] leading-5 text-slate-400">
                  {description}
                </p>
              )}
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => toast.dismiss(id)}
              className="
                dms-toast-close
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-xl
                text-slate-300
                transition-all
                duration-200
                hover:bg-slate-100
                hover:text-slate-600
                active:scale-90
              "
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">

            <span className="text-[10px] font-medium text-slate-300">
              DMS Notification
            </span>

            <span className="text-[10px] text-slate-300">
              اکنون
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="h-[3px] w-full bg-slate-100">
          <div
            className={`
              dms-toast-progress
              h-full
              w-full
              ${variant.progress}
            `}
          />
        </div>
      </div>
    ),
    {
      duration,
      position: "bottom-left",
    }
  );
};

export const notify = {
  success: (message, description = "") =>
    showToast("success", message, description),

  error: (message, description = "") =>
    showToast("error", message, description),

  warning: (message, description = "") =>
    showToast("warning", message, description),

  info: (message, description = "") =>
    showToast("info", message, description),
};