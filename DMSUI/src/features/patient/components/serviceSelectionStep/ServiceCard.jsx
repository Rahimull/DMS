import { BadgeCheck, CircleDollarSign, CheckCircle2 } from "lucide-react";

export default function ServiceCard({
  service,
  checked,
  active,
  onCheck,
  onSelect,
}) {
  const handleClick = () => {
    if (!checked) {
      onCheck(true);
    } else {
      onSelect();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative
        cursor-pointer
        rounded-2xl
        border
        p-5
        transition-all
        duration-200
        hover:shadow-lg
        hover:-translate-y-1

        ${checked ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white"}

        ${active ? "ring-2 ring-blue-300" : ""}
      `}
    >
      {/* Selected Badge */}

      {checked && (
        <div className="absolute left-3 top-3">
          <CheckCircle2 className="text-green-600" size={22} />
        </div>
      )}

      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="text-blue-600" size={20} />

            <h3 className="font-bold text-lg">{service.name}</h3>
          </div>

          <p className="mt-2 text-sm text-slate-500 leading-6">
            {service.description}
          </p>
        </div>

        <input
          type="checkbox"
          checked={checked}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => onCheck(e.target.checked)}
          className="h-5 w-5"
        />
      </div>

      <div className="mt-5 border-t pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CircleDollarSign className="text-emerald-600" size={18} />

          <span className="text-sm text-slate-500">هزینه</span>
        </div>

        <span
          className="
            rounded-xl
            bg-emerald-50
            px-3
            py-1
            text-sm
            font-bold
            text-emerald-700
          "
        >
          {Number(service.fee).toLocaleString()} افغانی
        </span>
      </div>

      {active && (
        <div
          className="
            mt-4
            rounded-xl
            bg-blue-600
            py-2
            text-center
            text-sm
            font-semibold
            text-white
          "
        >
          مشخصات این خدمت در پایین نمایش داده می‌شود
        </div>
      )}
    </div>
  );
}
