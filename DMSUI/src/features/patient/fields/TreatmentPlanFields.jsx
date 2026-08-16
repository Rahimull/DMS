import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { maxLength } from "zod";

export const TreatmentPlanFields = (services, doctors, onAddFee) => [
  // =========================
  // Doctor
  // =========================
  {
    name: "staffId",
    label: "داکتر",
    type: "select",
    required: true,
    options: doctors,
  },

  // =========================
  // Meeting Date
  // =========================
  {
    name: "startDate",
    label: "تاریخ شروع پلان",
    type: "datetime-local",
    required: true,
  },
  {
    name: "endDate",
    label: "تاریخ ختم پلان",
    type: "datetime-local",
    required: true,
  },

  // =========================
  // Details
  // =========================
  {
    name: "details",
    label: "توضیحات",
    type: "text",
    maxLength: 200,
    placeholder:"توضیحات"
  },

  // =========================
  // Services
  // =========================
  {
    name: "serviceId",
    label: "خدمات",
    type: "checkbox-group",
    required: true,
    options: services,
    col: 2,

    render: ({ value = [], onChange, error }) => {
      const selectedServices = Array.isArray(value)
        ? value.map(Number)
        : [];

      // =========================
      // Select / Unselect
      // =========================
      const handleSelect = (serviceId) => {
        const id = Number(serviceId);

        const exists = selectedServices.includes(id);

        const newValue = exists
          ? selectedServices.filter(
              (item) => item !== id
            )
          : [...selectedServices, id];

        onChange({
          target: {
            name: "serviceId",
            value: newValue,
          },
        });
      };

      // =========================
      // Add Fee
      // =========================
      const handleAddFee = (e, service) => {
        e.stopPropagation();

        const serviceId = Number(service.value);

        // اگر انتخاب نشده باشد Modal باز نشود
        if (!selectedServices.includes(serviceId)) {
          return;
        }

        // باز کردن Modal در Parent
        if (onAddFee) {
          onAddFee(service);
        }
      };

      return (
        <div className="mt-2 h-[500px] overflow-auto">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <label className="text-sm font-semibold text-slate-700">
                خدمات

                <span className="ms-1 text-red-500">
                  *
                </span>
              </label>

              {selectedServices.length > 0 && (
                <p className="mt-1 text-xs text-blue-600">
                  {selectedServices.length} خدمت انتخاب شده
                </p>
              )}
            </div>
          </div>

          {/* Services */}
          <div
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {services.map((service) => {
              const serviceId = Number(service.value);

              const selected =
                selectedServices.includes(serviceId);

              return (
                <div
                  key={service.value}
                  className={`
                    overflow-hidden
                    rounded-[10px]
                    border
                    transition-all
                    duration-200

                    ${
                      selected
                        ? `
                          border-blue-500
                          bg-blue-50
                          shadow-sm
                          ring-1
                          ring-blue-200
                        `
                        : `
                          border-slate-200
                          bg-white
                          hover:border-blue-300
                          hover:bg-slate-50
                        `
                    }
                  `}
                >
                  {/* Service Header */}
                  <div
                    onClick={() =>
                      handleSelect(serviceId)
                    }
                    className="
                      flex
                      cursor-pointer
                      items-center
                      gap-3
                      px-4
                      py-4
                    "
                  >
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() =>
                        handleSelect(serviceId)
                      }
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                      className="
                        h-4
                        w-4
                        shrink-0
                        cursor-pointer
                        accent-blue-600
                      "
                    />

                    {/* Service Name */}
                    <span
                      className={`
                        flex-1
                        text-sm
                        font-medium
                        ${
                          selected
                            ? "font-semibold text-blue-700"
                            : "text-slate-700"
                        }
                      `}
                    >
                      {service.label}
                    </span>

                    {/* Default Fee */}
                    <span
                      className="
                        text-xs
                        font-semibold
                        text-slate-500
                      "
                    >
                      {Number(
                        service.fee || 0
                      ).toLocaleString()}{" "}
                      AFN
                    </span>
                  </div>

                  {/* Add Fee */}
                  <div
                    className="
                      border-t
                      border-slate-200
                      bg-white
                      px-3
                      py-3
                    "
                  >
                    <Button
                      type="button"
                      size="sm"
                      variant="add"
                      disabled={!selected}
                      onClick={(e) =>
                        handleAddFee(e, service)
                      }
                      className="
                        w-full
                        gap-2
                        rounded-[7px]
                      "
                    >
                      <Plus size={16} />

                      افزودن فیس
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Error */}
          {error && (
            <p
              className="
                mt-2
                text-xs
                font-medium
                text-red-600
              "
            >
              {error}
            </p>
          )}
        </div>
      );
    },
  },
];