import PrescriptionCard from "./PrescriptionCard";

export default function PrescriptionCardList({
  prescriptions = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
  onPrint,
}) {
  // ==========================================
  // Loading
  // ==========================================

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="
              h-64
              animate-pulse
              rounded-2xl
              border
              border-slate-200
              bg-slate-100
            "
          />
        ))}
      </div>
    );
  }

  // ==========================================
  // Empty
  // ==========================================

  if (!prescriptions.length) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-dashed
          border-slate-300
          bg-slate-50
          p-10
          text-center
        "
      >
        <div className="text-4xl">💊</div>

        <h3 className="mt-3 font-bold text-slate-700">
          هیچ نسخه‌ای پیدا نشد
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          هنوز هیچ نسخه‌ای ثبت نشده است.
        </p>
      </div>
    );
  }

  // ==========================================
  // Cards
  // ==========================================

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {prescriptions.map((prescription) => (
        <PrescriptionCard
          key={prescription.id}
          prescription={prescription}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          onPrint={onPrint}
        />
      ))}
    </div>
  );
}

