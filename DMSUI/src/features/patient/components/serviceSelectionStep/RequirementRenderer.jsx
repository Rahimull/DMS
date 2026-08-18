import DentalChart from "./DentalChart";

export default function RequirementRenderer({
  requirement,
  value,
  onChange,
}) {
  // Requirement اصلی
  const requirementId = Number(
    requirement?.requirement?.id ??
    requirement?.requirementId ??
    requirement?.id
  );

  const handleChange = (newValue) => {
    onChange(
      requirement.serviceRequirementId,
      newValue
    );
  };

  // =====================================================
  // Dental Chart
  // =====================================================

  if (requirementId === 1) {
    return (
      <DentalChart
        value={Array.isArray(value) ? value : []}
        onChange={handleChange}
      />
    );
  }

  // =====================================================
  // Description
  // =====================================================

  if (requirementId === 2) {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">
          توضیحات
        </label>

        <textarea
          value={value ?? ""}
          onChange={(e) =>
            handleChange(e.target.value)
          }
          rows={3}
          className="
            w-full
            rounded-lg
            border
            border-slate-300
            p-3
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-100
          "
        />
      </div>
    );
  }

  // =====================================================
  // Procedure Type
  // =====================================================

  if (requirementId === 3) {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">
          نوع عملیات
        </label>

        <select
          value={value ?? ""}
          onChange={(e) =>
            handleChange(e.target.value)
          }
          className="
            h-11
            w-full
            rounded-lg
            border
            border-slate-300
            px-3
            outline-none
            focus:border-blue-500
          "
        >
          <option value="">
            انتخاب کنید
          </option>

          <option value="Single">
            Single
          </option>

          <option value="Multiple">
            Multiple
          </option>
        </select>
      </div>
    );
  }

  // =====================================================
  // Materials
  // =====================================================

  if (requirementId === 4) {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">
          مواد استفاده شده
        </label>

        <input
          type="text"
          value={value ?? ""}
          onChange={(e) =>
            handleChange(e.target.value)
          }
          className="
            h-11
            w-full
            rounded-lg
            border
            border-slate-300
            px-3
            outline-none
            focus:border-blue-500
          "
        />
      </div>
    );
  }

  // =====================================================
  // Bleaching Steps
  // =====================================================

  if (requirementId === 5) {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Bleaching Steps
        </label>

        <input
          type="text"
          value={value ?? ""}
          onChange={(e) =>
            handleChange(e.target.value)
          }
          className="
            h-11
            w-full
            rounded-lg
            border
            border-slate-300
            px-3
            outline-none
            focus:border-blue-500
          "
        />
      </div>
    );
  }

  // =====================================================
  // Gum
  // =====================================================

  if (requirementId === 7) {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">
          انتخاب لثه
        </label>

        <select
          value={value ?? ""}
          onChange={(e) =>
            handleChange(e.target.value)
          }
          className="
            h-11
            w-full
            rounded-lg
            border
            border-slate-300
            px-3
            outline-none
            focus:border-blue-500
          "
        >
          <option value="">
            انتخاب کنید
          </option>

          <option value="Upper">
            فک بالا
          </option>

          <option value="Lower">
            فک پایین
          </option>
        </select>
      </div>
    );
  }

  // =====================================================
  // Affected Area
  // =====================================================

  if (requirementId === 9) {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">
          محل آسیب
        </label>

        <input
          type="text"
          value={value ?? ""}
          onChange={(e) =>
            handleChange(e.target.value)
          }
          className="
            h-11
            w-full
            rounded-lg
            border
            border-slate-300
            px-3
            outline-none
            focus:border-blue-500
          "
        />
      </div>
    );
  }

  return null;
}