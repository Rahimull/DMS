import {
  Stethoscope,
  Smile,
  Scissors,
  Activity,
  Shield,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "معاینه",
    icon: Stethoscope,
    color: "text-blue-600",
  },
  {
    id: 2,
    title: "پر کردن",
    icon: Smile,
    color: "text-green-600",
  },
  {
    id: 3,
    title: "کشیدن دندان",
    icon: Scissors,
    color: "text-red-500",
  },
  {
    id: 4,
    title: "عصب کشی",
    icon: Activity,
    color: "text-purple-600",
  },
  {
    id: 5,
    title: "کرون",
    icon: Shield,
    color: "text-yellow-600",
  },
  {
    id: 6,
    title: "ایمپلنت",
    icon: Sparkles,
    color: "text-cyan-600",
  },
];

export default function ServiceSelectionStep() {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          خدمات مورد نیاز
        </h2>

        <p className="text-slate-500 mt-2">
          خدمات مورد نیاز بیمار را انتخاب نمایید.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="
                cursor-pointer
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition
                hover:border-blue-500
                hover:shadow-md
              "
            >
              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-slate-100 p-3">
                  <Icon
                    className={`h-6 w-6 ${service.color}`}
                  />
                </div>

                <div>

                  <h3 className="font-semibold">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    انتخاب خدمت
                  </p>

                </div>

              </div>
            </div>
          );
        })}

      </div>

      <div className="rounded-2xl border bg-white p-6">

        <h3 className="mb-4 text-lg font-bold">
          نقشه دندان (Dental Chart)
        </h3>

        <div className="grid gap-3">

          <div className="flex justify-center gap-2 flex-wrap">

            {[
              18,17,16,15,14,13,12,11,
              21,22,23,24,25,26,27,28,
            ].map((tooth)=>(
              <button
                key={tooth}
                className="
                  h-12
                  w-12
                  rounded-xl
                  border
                  bg-white
                  hover:bg-blue-50
                  hover:border-blue-500
                "
              >
                {tooth}
              </button>
            ))}

          </div>

          <div className="flex justify-center gap-2 flex-wrap">

            {[
              48,47,46,45,44,43,42,41,
              31,32,33,34,35,36,37,38,
            ].map((tooth)=>(
              <button
                key={tooth}
                className="
                  h-12
                  w-12
                  rounded-xl
                  border
                  bg-white
                  hover:bg-blue-50
                  hover:border-blue-500
                "
              >
                {tooth}
              </button>
            ))}

          </div>

        </div>

      </div>

      <div className="rounded-2xl border bg-white p-6">

        <h3 className="mb-4 text-lg font-bold">
          خدمات انتخاب شده
        </h3>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="p-3 text-right">
                خدمت
              </th>

              <th className="p-3 text-right">
                دندان
              </th>

              <th className="p-3 text-right">
                قیمت
              </th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="p-3">
                عصب کشی
              </td>

              <td className="p-3">
                26
              </td>

              <td className="p-3">
                ۳۵۰۰ افغانی
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}