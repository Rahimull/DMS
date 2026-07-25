import { CircleDollarSign, FileCheck2, Trash2 } from "lucide-react";

export default function SelectedServicesTable({ services = [], onRemove }) {
  const total = services.reduce((sum, item) => sum + Number(item.fee || 0), 0);

  const getRequirementValue = (service) => {
    if (!service.requirements?.length) return "-";

    return service.requirements
      .map((x) => {
        if (Array.isArray(x.value)) {
          return x.value.join(", ");
        }

        return x.value;
      })
      .filter(Boolean)
      .join(" | ");
  };

  if (!services.length) {
    return (
      <div
        className="
          rounded-xl
          border
          bg-slate-50
          p-6
          text-center
          text-slate-500
        "
      >
        هیچ خدمتی انتخاب نشده است
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div
        className="
          overflow-x-auto
          rounded-2xl
          border
        "
      >
        <table className="w-full text-sm">
          <thead>
            <tr
              className="
                border-b
                bg-slate-50
              "
            >
              <th className="p-4 text-right">خدمت</th>

              <th className="p-4 text-right">ضروریات</th>

              <th className="p-4 text-right">هزینه</th>

              <th className="p-4">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr
                key={service.serviceId}
                className="
                border-b
                hover:bg-slate-50
              "
              >
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <FileCheck2 size={18} className="text-blue-600" />

                    <span className="font-semibold">{service.serviceName}</span>
                  </div>
                </td>

                <td
                  className="
                  p-4
                  text-slate-600
                "
                >
                  {getRequirementValue(service)}
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <CircleDollarSign size={18} className="text-green-600" />
                    {Number(service.fee || 0).toLocaleString()} افغانی
                  </div>
                </td>

                <td className="p-4 text-center">
                  {onRemove && (
                    <button
                      type="button"
                      onClick={() => onRemove(service.serviceId)}
                      className="
                        rounded-lg
                        p-2
                        text-red-500
                        hover:bg-red-50
                      "
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <div
          className="
            rounded-2xl
            bg-blue-50
            px-6
            py-4
            font-bold
            text-blue-700
          "
        >
          مجموع: {total.toLocaleString()} افغانی
        </div>
      </div>
    </div>
  );
}
