import {
  Wallet,
  CreditCard,
  Banknote,
  Receipt,
  Percent,
  Calculator,
} from "lucide-react";

export default function FeePaymentStep() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          فیس و پرداخت
        </h2>

        <p className="mt-2 text-slate-500">
          هزینه خدمات و اطلاعات پرداخت مریض را ثبت نمایید.
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="rounded-2xl bg-green-50 border border-green-200 p-4">
          <p className="text-sm text-slate-600">
            مجموع خدمات
          </p>

          <h3 className="mt-2 text-xl font-bold text-green-700">
            ۵٬۵۰۰ افغانی
          </h3>
        </div>

        <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-4">
          <p className="text-sm text-slate-600">
            تخفیف
          </p>

          <h3 className="mt-2 text-xl font-bold text-yellow-700">
            ۵۰۰ افغانی
          </h3>
        </div>

        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm text-slate-600">
            پیش پرداخت
          </p>

          <h3 className="mt-2 text-xl font-bold text-blue-700">
            ۲٬۰۰۰ افغانی
          </h3>
        </div>

        <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
          <p className="text-sm text-slate-600">
            باقی مانده
          </p>

          <h3 className="mt-2 text-xl font-bold text-red-700">
            ۳٬۰۰۰ افغانی
          </h3>
        </div>

      </div>

      {/* Payment Form */}

      <div className="rounded-2xl border bg-white p-6">

        <h3 className="mb-5 text-lg font-bold">
          اطلاعات پرداخت
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <label className="mb-2 block font-medium">
              مجموع فیس
            </label>

            <div className="relative">
              <Calculator className="absolute right-3 top-3 h-5 w-5 text-slate-400" />

              <input
                className="w-full rounded-xl border p-3 pr-12"
                placeholder="مجموع فیس"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              تخفیف
            </label>

            <div className="relative">
              <Percent className="absolute right-3 top-3 h-5 w-5 text-slate-400" />

              <input
                className="w-full rounded-xl border p-3 pr-12"
                placeholder="تخفیف"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              پیش پرداخت
            </label>

            <div className="relative">
              <Wallet className="absolute right-3 top-3 h-5 w-5 text-slate-400" />

              <input
                className="w-full rounded-xl border p-3 pr-12"
                placeholder="پیش پرداخت"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              باقی مانده
            </label>

            <div className="relative">
              <Receipt className="absolute right-3 top-3 h-5 w-5 text-slate-400" />

              <input
                className="w-full rounded-xl border p-3 pr-12 bg-slate-50"
                placeholder="باقی مانده"
                readOnly
              />
            </div>
          </div>

        </div>

      </div>

      {/* Payment Method */}

      <div className="rounded-2xl border bg-white p-6">

        <h3 className="mb-5 text-lg font-bold">
          روش پرداخت
        </h3>

        <div className="grid grid-cols-3 gap-4">

          <label className="cursor-pointer rounded-xl border p-4 hover:border-blue-500 hover:bg-blue-50">
            <input
              type="radio"
              name="paymentMethod"
              className="mb-3"
            />

            <div className="flex items-center gap-2">
              <Banknote className="h-5 w-5 text-green-600" />
              <span>نقدی</span>
            </div>
          </label>

          <label className="cursor-pointer rounded-xl border p-4 hover:border-blue-500 hover:bg-blue-50">
            <input
              type="radio"
              name="paymentMethod"
              className="mb-3"
            />

            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <span>کارت بانکی</span>
            </div>
          </label>

          <label className="cursor-pointer rounded-xl border p-4 hover:border-blue-500 hover:bg-blue-50">
            <input
              type="radio"
              name="paymentMethod"
              className="mb-3"
            />

            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-purple-600" />
              <span>انتقال آنلاین</span>
            </div>
          </label>

        </div>

      </div>

      {/* Installment */}

      <div className="rounded-2xl border bg-white p-6">

        <h3 className="mb-5 text-lg font-bold">
          وضعیت پرداخت
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <label className="flex items-center gap-3 rounded-xl border p-4">
            <input type="radio" name="paymentStatus" />
            پرداخت کامل
          </label>

          <label className="flex items-center gap-3 rounded-xl border p-4">
            <input type="radio" name="paymentStatus" />
            پرداخت اقساطی
          </label>

        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">

          <input
            className="rounded-xl border p-3"
            placeholder="تعداد اقساط"
          />

          <input
            className="rounded-xl border p-3"
            placeholder="مبلغ قسط اول"
          />

        </div>

      </div>

    </div>
  );
}