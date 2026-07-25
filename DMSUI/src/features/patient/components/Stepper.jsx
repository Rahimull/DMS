const steps = [
  {
    title: "معلومات شخصی",
    icon: "👤",
  },
  {
    title: "تاریخچه صحی",
    icon: "🩺",
  },
  {
    title: "خدمات",
    icon: "🦷",
  },
  {
    title: "فیس و پرداخت",
    icon: "💰",
  },
];

export default function Stepper({ currentStep }) {
  return (
    <div className="px-2">
      <div className="flex items-start justify-around">
        {steps.map((step, index) => {
          const number = index + 1;

          const active = currentStep === number;
          const completed = currentStep > number;

          return (
            <div
              key={number}
              className="flex flex-1 items-center"
            >
              {/* Step */}

              <div className="flex flex-col items-center">

                <div
                  className={`
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    text-lg
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "border-emerald-500 bg-emerald-500 text-white shadow-md shadow-emerald-200"
                        : active
                        ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "border-slate-300 bg-white"
                    }
                  `}
                >
                  {completed ? "✓" : step.icon}
                </div>

                <span
                  className={`
                    mt-2
                    whitespace-nowrap
                    text-xs
                    font-semibold

                    ${
                      completed
                        ? "text-emerald-600"
                        : active
                        ? "text-blue-700"
                        : "text-slate-500"
                    }
                  `}
                >
                  {step.title}
                </span>
              </div>

              {/* Connector */}

              {index !== steps.length - 1 && (
                <div className="mx-3 mb-6 flex-1">
                  <div
                    className={`
                      h-[4px]
                      rounded-full
                      transition-all

                      ${
                        completed
                          ? "bg-emerald-500"
                          : "bg-slate-200"
                      }
                    `}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}