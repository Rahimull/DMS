import {
  UserRound,
  Stethoscope,

  WalletCards,
  Check,
  BadgePlus,
} from "lucide-react";

const steps = [
   {
    title: "تاریخچه صحی",
    icon: Stethoscope,
  },
  {
    title: "خدمات",
    icon: BadgePlus,
  },
  {
    title: "فیس و پرداخت",
    icon: WalletCards,
  },
];

export default function AppointmentStepper({ currentStep = 1 }) {
  return (
    <div className="w-full px-3 py-2">
      <div
        className="
        flex
        items-start
        justify-between
        "
      >
        {steps.map((step, index) => {
          const number = index + 1;

          const active = currentStep === number;

          const completed = currentStep > number;

          const Icon = step.icon;

          return (
            <div
              key={number}
              className="
              flex
              flex-1
              items-center
              "
            >
              {/* Step Item */}

              <div
                className="
                flex
                flex-col
                items-center
                "
              >
                <div
                  className={`
                    relative
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    transition-all
                    duration-300


                    ${
                      completed
                        ? " border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-200 "
                        : active
                          ? " border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-200 scale-110 "
                          : " border-slate-300 bg-white text-slate-400 "
                    }

                  `}
                >
                  {completed ? (
                    <Check
                      className="
                      h-4
                      w-4
                      "
                    />
                  ) : (
                    <Icon
                      className="
                      h-2
                      w-2
                      "
                    />
                  )}

                  {active && (
                    <span
                      className="
                        absolute
                        -inset-2
                        rounded-full
                        border
                        border-blue-300
                        animate-ping
                        opacity-30
                        "
                    />
                  )}
                </div>

                <span
                  className={`
                    mt-1
                    text-xs
                    font-bold
                    whitespace-nowrap


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

                <span
                  className="
                  mt-1
                  text-[11px]
                  text-slate-400
                  "
                >
                  مرحله {number}
                </span>
              </div>

              {/* Connector */}

              {index !== steps.length - 1 && (
                <div
                  className="
                    mx-4
                    mb-9
                    flex-1
                    "
                >
                  <div
                    className="
                      h-1
                      rounded-full
                      bg-slate-200
                      overflow-hidden
                      "
                  >
                    <div
                      className={`
                        h-full
                        transition-all
                        duration-500


                        ${completed ? "w-full bg-emerald-500" : "w-0"}

                        `}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
