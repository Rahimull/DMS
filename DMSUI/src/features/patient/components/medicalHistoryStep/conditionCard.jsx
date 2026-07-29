import { Activity, CheckCircle2, SquarePen } from "lucide-react";

export default function ConditionCard({
  condition,
  checked,
  onCheck,
  onEdit,
}) {
  return (
    <div
      onClick={() => onCheck(condition.id, !checked)}
      className={`
        group
        cursor-pointer
        rounded-[10px]
        border
        p-4
        transition-all
        duration-200

        ${
          checked
            ? "border-blue-500 bg-blue-50 shadow-md"
            : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
        }
      `}
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-1">

          <div
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full

              ${
                checked
                  ? "bg-blue-100"
                  : "bg-slate-100 group-hover:bg-blue-50"
              }
            `}
          >
            <Activity className="text-blue-600" size={16} />
          </div>

          <div>

            <h4 className="font-bold text-slate-800">
              {condition.name}
            </h4>

            <span
              className={`
                mt-1
                inline-flex
                items-center
                rounded-full
                px-
                py-0.5
                text-xs

                ${
                  checked
                    ? "bg-blue-100 text-blue-700"
                    : "bg-slate-100 text-slate-500"
                }
              `}
            >
              {checked ? "انتخاب شده" : "انتخاب نشده"}
            </span>

          </div>

        </div>

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            disabled={!checked}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-white
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            <SquarePen size={18} />
          </button>

          <input
            type="checkbox"
            checked={checked}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) =>
              onCheck(condition.id, e.target.checked)
            }
            className="
              h-5
              w-5
              accent-blue-600
            "
          />

        </div>

      </div>

      {/* Description */}

      <p className="mt-4 text-sm leading-6 text-slate-600">
        {condition.description || "توضیحی برای این بیماری ثبت نشده است."}
      </p>

      {/* Footer */}

      {checked && (
        <div className="mt-5 flex items-center gap-2 text-sm text-green-600">
          <CheckCircle2 size={18} />
          <span>آماده ثبت جزئیات بیماری</span>
        </div>
      )}
    </div>
  );
}