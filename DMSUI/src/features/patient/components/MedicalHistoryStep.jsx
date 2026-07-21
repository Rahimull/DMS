import ConditionApi from "@/features/condition/api/ConditionApi";
import useLoadData from "@/hooks/useLoadData";
import { Activity, HeartPulse, Plus } from "lucide-react";
import { useMemo, useState } from "react";

export default function MedicalHistoryStep() {
  const filters = useMemo(() => ({}), []);

  const {
    data: conditions = [],
    dataLoading,
    error,
  } = useLoadData(
    ConditionApi,
    { filters }
  );

  const [selectedConditions, setSelectedConditions] =
    useState({});

  const handleConditionChange = (
    conditionId,
    checked
  ) => {
    if (checked) {
      setSelectedConditions((prev) => ({
        // ...prev,

        // {
        //   conditionId,
        //   severity: "",
        //   diagnosisDate: "",
        //   result: "",
        //   notes: "",
        // },
      }));
    } else {
      setSelectedConditions((prev) => {
        const copy = { ...prev };

        delete copy[conditionId];

        return copy;
      });
    }
  };

  const handleFieldChange = (
    conditionId,
    field,
    value
  ) => {
    setSelectedConditions((prev) => ({
      ...prev,

      // {
      //   ...prev[conditionId],
      //   value,
      // },
    }));
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold text-slate-800">
          تاریخچه صحی مریض
        </h2>

        <p className="mt-2 text-slate-500">
          بیماری‌های زمینه‌ای و سوابق طبی مریض
        </p>

      </div>

      {/* Summary */}

      <div className="grid md:grid-cols-3 gap-4">

        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm text-slate-500">
            تعداد بیماری‌ها
          </p>

          <h3 className="text-2xl font-bold text-blue-600">
            {conditions.length}
          </h3>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm text-slate-500">
            انتخاب شده
          </p>

          <h3 className="text-2xl font-bold text-green-600">
            {Object.keys(
              selectedConditions
            ).length}
          </h3>
        </div>

        <div className="rounded-xl border bg-white p-4">
          <p className="text-sm text-slate-500">
            وضعیت
          </p>

          <h3 className="text-2xl font-bold text-orange-600">
            آماده ثبت
          </h3>
        </div>

      </div>

      {/* Conditions */}

      <div className="rounded-2xl border bg-white p-6">

        <div className="mb-5 flex items-center gap-2">

          <HeartPulse
            className="text-blue-600"
            size={22}
          />

          <h3 className="font-bold text-lg">
            بیماری‌های زمینه‌ای
          </h3>

        </div>

        {dataLoading && (
          <p>در حال بارگذاری...</p>
        )}

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-4">

          {conditions.map((item) => (

            <label
              key={item.id}
              className="
                cursor-pointer
                rounded-2xl
                border
                p-4
                transition-all
                hover:border-blue-500
                hover:bg-blue-50
              "
            >

              <div className="flex items-center justify-between">

                <Activity
                  size={20}
                  className="text-blue-600"
                />

                <input
                  type="checkbox"
                  checked={
                    !!selectedConditions[
                      item.id
                    ]
                  }
                  onChange={(e) =>
                    handleConditionChange(
                      item.id,
                      e.target.checked
                    )
                  }
                />

              </div>

              <h4 className="mt-4 font-semibold">
                {item.name}
              </h4>

            </label>

          ))}

          {/* Add New Condition */}

          <div
            className="
              rounded-2xl
              border-2
              border-dashed
              border-blue-300
              p-4
              bg-blue-50
            "
          >

            <div className="flex flex-col items-center justify-center h-full">

              <Plus
                className="text-blue-600"
                size={26}
              />

              <p className="mt-2 font-semibold">
                بیماری جدید
              </p>

              <p className="text-xs text-slate-500 text-center">
                اگر در لیست موجود نیست
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Selected Condition Details */}

      {Object.values(
        selectedConditions
      ).map((condition) => {

        const conditionInfo =
          conditions.find(
            (x) =>
              x.id ===
              condition.conditionId
          );

        return (
          <div
            key={condition.conditionId}
            className="
              rounded-2xl
              border
              bg-white
              p-6
            "
          >

            <h3 className="mb-4 text-lg font-bold">
              {conditionInfo?.name}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <select
                className="
                  rounded-xl
                  border
                  p-3
                "
                value={condition.severity}
                onChange={(e) =>
                  handleFieldChange(
                    condition.conditionId,
                    "severity",
                    e.target.value
                  )
                }
              >
                <option value="">
                  شدت بیماری
                </option>

                <option value="mild">
                  خفیف
                </option>

                <option value="moderate">
                  متوسط
                </option>

                <option value="severe">
                  شدید
                </option>

              </select>

              <input
                type="date"
                className="
                  rounded-xl
                  border
                  p-3
                "
                value={
                  condition.diagnosisDate
                }
                onChange={(e) =>
                  handleFieldChange(
                    condition.conditionId,
                    "diagnosisDate",
                    e.target.value
                  )
                }
              />

              <input
                type="text"
                placeholder="نتیجه"
                className="
                  md:col-span-2
                  rounded-xl
                  border
                  p-3
                "
                value={condition.result}
                onChange={(e) =>
                  handleFieldChange(
                    condition.conditionId,
                    "result",
                    e.target.value
                  )
                }
              />

            </div>

            <textarea
              rows={4}
              className="
                mt-4
                w-full
                rounded-xl
                border
                p-3
              "
              placeholder="یادداشت"
              value={condition.notes}
              onChange={(e) =>
                handleFieldChange(
                  condition.conditionId,
                  "notes",
                  e.target.value
                )
              }
            />

          </div>
        );
      })}

      {/* General Notes */}

      <div className="rounded-2xl border bg-white p-6">

        <h3 className="mb-4 text-lg font-bold">
          یادداشت عمومی داکتر
        </h3>

        <textarea
          rows={6}
          className="
            w-full
            rounded-xl
            border
            p-3
          "
          placeholder="
تشخیص اولیه
توضیحات
نکات مهم
          "
        />

      </div>

    </div>
  );
}