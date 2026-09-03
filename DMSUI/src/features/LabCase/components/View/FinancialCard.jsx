
import {
  DollarSign,
  ReceiptText,
} from "lucide-react";

import {
  formatPrice,
} from "../../utils/labCaseHelpers"


export default function FinancialCard({
  labCase,
}) {

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-6 text-white shadow-xl shadow-blue-600/25 xl:col-span-4">

      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/20 bg-white/10" />

      <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-indigo-900/30 blur-3xl" />


      <div className="relative">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur">

            <DollarSign size={24} />

          </div>


          <ReceiptText
            size={21}
            className="text-blue-200"
          />

        </div>


        <p className="mt-7 text-xs font-bold tracking-[0.18em] text-blue-100">

          TOTAL AMOUNT

        </p>


        <p className="mt-2 text-3xl font-black">

          {formatPrice(labCase?.totalPrice)}

          <span className="mr-2 text-sm font-medium text-blue-100">
            AFN
          </span>

        </p>


        <div className="mt-7 grid grid-cols-2 gap-3">

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">

            <p className="text-xs text-blue-100">
              مقدار
            </p>

            <p className="mt-2 font-black">
              {labCase?.quantity || 0}
            </p>

          </div>


          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">

            <p className="text-xs text-blue-100">
              قیمت واحد
            </p>

            <p className="mt-2 font-black">
              {formatPrice(labCase?.unitPrice)}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

