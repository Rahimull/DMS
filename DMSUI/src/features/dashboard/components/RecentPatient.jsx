import DashboardCard from "./DashboardCard";
import {
  Eye,
  Pencil,
  Phone,
  Trash2,
} from "lucide-react";

export default function RecentPatients({
  patients = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <DashboardCard
      title="بیماران جدید"
      subtitle="آخرین بیماران ثبت شده"
    >
      {loading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-[76px] animate-pulse rounded-2xl bg-slate-100"
            />
          ))}
        </div>
      ) : patients.length === 0 ? (
        <div className="flex h-[200px] items-center justify-center text-sm text-slate-400">
          هیچ بیماری ثبت نشده است.
        </div>
      ) : (
        <div className="space-y-3">
          {patients.map((patient) => {
            const fullName =
              `${patient.firstName ?? ""} ${
                patient.lastName ?? ""
              }`.trim() || "بدون نام";

            const firstLetter =
              patient.firstName?.charAt(0) || "؟";

            const isActive =
              patient.status === "Active" ||
              patient.status === "فعال";

            return (
              <div
                key={patient.id}
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  rounded-2xl
                  border
                  border-slate-100
                  p-4
                  transition
                  hover:bg-slate-50
                "
              >
                {/* Patient */}
                <div className="flex min-w-0 items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-100
                      font-bold
                      text-blue-600
                    "
                  >
                    {firstLetter}
                  </div>

                  <div className="min-w-0">
                    <h4 className="truncate font-semibold text-slate-800">
                      {fullName}
                    </h4>

                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                      <Phone size={15} />

                      <span dir="ltr">
                        {patient.phone ||
                          patient.phoneNumber ||
                          "-"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <span
                  className={`
                    shrink-0
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-medium
                    ${
                      isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >
                  {isActive ? "فعال" : "غیرفعال"}
                </span>

                {/* Actions */}
                <div className="flex shrink-0 gap-1">
                  <button
                    type="button"
                    onClick={() => onView?.(patient)}
                    className="
                      rounded-lg
                      p-2
                      text-slate-500
                      transition
                      hover:bg-slate-100
                      hover:text-slate-700
                    "
                    title="مشاهده"
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onEdit?.(patient)}
                    className="
                      rounded-lg
                      p-2
                      text-blue-600
                      transition
                      hover:bg-blue-100
                    "
                    title="ویرایش"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => onDelete?.(patient.id)}
                    className="
                      rounded-lg
                      p-2
                      text-red-600
                      transition
                      hover:bg-red-100
                    "
                    title="حذف"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </DashboardCard>
  );
}