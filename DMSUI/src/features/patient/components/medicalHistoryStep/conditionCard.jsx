import { Activity, SquarePen } from "lucide-react";

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
        cursor-pointer
        rounded-2xl
        border
        bg-white
        p-4
        transition-all
        ${
          checked
            ? "border-blue-500 bg-blue-50"
            : "border-slate-200 hover:border-blue-500"
        }
      `}
    >
      <div className="flex justify-between">

        <Activity className="text-blue-600" />

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation(); // جلوگیری از انتخاب کارت
              onEdit();
            }}
            disabled={!checked}
            className="
              rounded-lg
              p-1
              hover:bg-slate-100
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
          />

        </div>

      </div>

      <h4 className="mt-4 font-semibold">
        {condition.name}
      </h4>

      <p className="mt-2 text-sm text-slate-500">
        {condition.description}
      </p>
    </div>
  );
}