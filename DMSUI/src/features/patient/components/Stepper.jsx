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
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="flex items-center justify-between">

        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const isActive =
            currentStep === stepNumber;

          const isCompleted =
            currentStep > stepNumber;

          return (
            <div
              key={index}
              className="
                flex
                flex-1
                items-center
              "
            >
              <div className="flex flex-col items-center">

                {/* Circle */}

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    text-lg
                    font-bold
                    transition-all

                    ${
                      isCompleted
                        ? "border-green-500 bg-green-500 text-white"
                        : isActive
                        ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "border-slate-300 bg-slate-100 text-slate-500"
                    }
                  `}
                >
                  {isCompleted ? "✓" : step.icon}
                </div>

                {/* Title */}

                <span
                  className={`
                    mt-3
                    text-sm
                    font-medium

                    ${
                      isActive
                        ? "text-blue-700"
                        : isCompleted
                        ? "text-green-700"
                        : "text-slate-500"
                    }
                  `}
                >
                  {step.title}
                </span>
              </div>

              {/* Line */}

              {index !== steps.length - 1 && (
                <div
                  className={`
                    mx-4
                    mt-[-35px]
                    h-1
                    flex-1
                    rounded-full

                    ${
                      currentStep > stepNumber
                        ? "bg-green-500"
                        : "bg-slate-200"
                    }
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}