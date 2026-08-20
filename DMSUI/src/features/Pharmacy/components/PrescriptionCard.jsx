import {
  CalendarDays,
  Edit,
  Eye,
  Pill,
  Printer,
  Trash2,
  UserRound,
} from "lucide-react";

export default function PrescriptionCard({
  prescription,
  onView,
  onEdit,
  onDelete,
  onPrint,
}) {
  const items = prescription?.prescriptionItem ?? [];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-blue-200 p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Patient & Doctor */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

        <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <UserRound size={19} />
          </div>

          <div className="min-w-0">
            <p className="text-xs text-slate-400">
              مریض
            </p>

            <p className="truncate font-semibold text-slate-800">
              {prescription?.patient
              ? `${prescription.patient.firstName} ${prescription.patient.lastName}` 
              : "-"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
            <UserRound size={19} />
          </div>

          <div className="min-w-0">
            <p className="text-xs text-slate-400">
              داکتر
            </p>

            <p className="truncate font-semibold text-slate-800">
              {prescription?.staff?.firstName && prescription?.staff?.lastName
                ? `${prescription.staff.firstName} ${prescription.staff.lastName}`
                : prescription?.staffName || "-"}
            </p>
          </div>
        </div>

      </div>

      {/* Prescription Info */}
      <div className="mt-4 flex items-center justify-between">

        <div>
          <p className="text-xs text-slate-400">
            شماره نسخه
          </p>

          <p className="text-lg font-bold text-slate-800">
            #{prescription?.id}
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm text-slate-500 shadow-sm">
          <CalendarDays size={16} />

          {prescription?.prescriptionDate
            ? new Date(
                prescription.prescriptionDate
              ).toLocaleDateString("fa-AF")
            : "-"}
        </div>

      </div>

      {/* Medicines */}
      <div className="mt-5">

        <div className="mb-3 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <Pill size={18} />
            </div>

            <span className="font-semibold text-slate-700">
              دواها
            </span>
          </div>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            {items.length} دوا
          </span>

        </div>

        <div className="space-y-2">

          {items.slice(0, 3).map((item, index) => (
            <div
              key={item.id ?? index}
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-4 py-3"
            >

              <div className="flex min-w-0 items-center gap-3">

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                  {index + 1}
                </span>

                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-800">
                    {item.medicineInventory?.name1 ||
                      item.medicineInventory?.name2 ||
                      "-"}
                  </p>

                  <p className="text-xs text-slate-400">
                    {item.dosage || "-"}{" "}
                    {item.frequency
                      ? `• ${item.frequency}`
                      : ""}
                  </p>
                </div>

              </div>

              <span className="ml-2 shrink-0 text-sm font-semibold text-slate-500">
                × {item.quantity ?? 1}
              </span>

            </div>
          ))}

          {items.length > 3 && (
            <button
              type="button"
              onClick={() => onView?.(prescription)}
              className="w-full py-2 text-center text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              مشاهده {items.length - 3} دوا دیگر
            </button>
          )}

          {items.length === 0 && (
            <div className="rounded-2xl bg-white/70 p-4 text-center text-sm text-slate-400">
              هیچ دوایی ثبت نشده است.
            </div>
          )}

        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-200/70 pt-4">

        <span className="text-xs text-slate-400">
          ایجاد شده:{" "}
          {prescription?.createdAt
            ? new Date(
                prescription.createdAt
              ).toLocaleDateString("fa-AF")
            : "-"}
        </span>

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={() => onView?.(prescription)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200"
          >
            <Eye size={17} />
          </button>

          <button
            type="button"
            onClick={() => onEdit?.(prescription)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition hover:bg-blue-100"
          >
            <Edit size={17} />
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(prescription.id)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-600 transition hover:bg-red-100"
          >
            <Trash2 size={17} />
          </button>
          <button 
            type="button"
            onClick={() => onPrint?.(prescription)}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600 transition hover:bg-green-100"
          >
            <Printer size={17} />
          </button>

        </div>

      </div>

    </div>
  );
}