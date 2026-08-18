import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrescriptionItemsTable({
  items = [],
  onRemove,
}) {
  if (!items.length) {
    return (
      <div className="rounded-xl border border-dashed bg-slate-50 p-6 text-center">
        <p className="text-sm text-slate-500">
          هنوز هیچ دوایی به نسخه اضافه نشده است.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white">

      <div className="border-b bg-slate-50 px-4 py-3">
        <h3 className="font-bold text-slate-800">
          دواهای نسخه
        </h3>

        <p className="text-xs text-slate-500">
          {items.length} دوا به نسخه اضافه شده است.
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead>
            <tr className="border-b bg-slate-50 text-right">

              <th className="px-4 py-3">
                #
              </th>

              <th className="px-4 py-3">
                دوا
              </th>

              <th className="px-4 py-3">
                دوز
              </th>

              <th className="px-4 py-3">
                دفعات
              </th>

              <th className="px-4 py-3">
                مدت
              </th>

              <th className="px-4 py-3">
                روش مصرف
              </th>

              <th className="px-4 py-3">
                مقدار
              </th>

              <th className="px-4 py-3 text-center">
                عملیات
              </th>

            </tr>
          </thead>

          <tbody>

            {items.map((item, index) => (

              <tr
                key={`${item.medicineInventoryId}-${index}`}
                className="border-b last:border-b-0 hover:bg-slate-50"
              >

                <td className="px-4 py-3">
                  {index + 1}
                </td>

                <td className="px-4 py-3 font-medium">
                  {item.medicineName ||
                    item.name ||
                    item.medicineInventoryId}
                </td>

                <td className="px-4 py-3">
                  {item.dosage || "-"}
                </td>

                <td className="px-4 py-3">
                  {item.frequency || "-"}
                </td>

                <td className="px-4 py-3">
                  {item.duration || "-"}
                </td>

                <td className="px-4 py-3">
                  {item.route || "-"}
                </td>

                <td className="px-4 py-3">
                  {item.quantity}
                </td>

                <td className="px-4 py-3 text-center">

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      onRemove(index)
                    }
                    className="text-red-500 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={17} />
                  </Button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}