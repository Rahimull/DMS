import {
  Wallet,
  Receipt,
  Percent,
  Calculator,
  CreditCard,
  CircleDollarSign,
  BadgeCheck,
  AlertCircle,
} from "lucide-react";
import SummaryCard from "./SummaryCard";
import StatusBox from "./StatusBox";

export default function FeePaymentStep({
  formData,
  updateSection,
  updateValue,
  errors,
}) {
  const payment = formData.payment ?? {
    totalFee: 0,
    discount: 0,
    payable: 0,
    paidAmount: 0,
    dueAmount: 0,
    installment: 1,
  };

  const totalFee = Number(payment.totalFee || 0);

  const discount = Number(payment.discount || 0);

  const discountAmount = (totalFee * discount) / 100;

  const payable = totalFee - discountAmount;

  const paid = Number(payment.paidAmount || 0);

  const remaining = payable - paid;

  const handleChangePayment = (name, value) => {
    const newPayment = {
      ...payment,
      [name]: value,
    };

    const totalFee = Number(newPayment.totalFee || 0);
    const discount = Number(newPayment.discount || 0);
    const paidAmount = Number(newPayment.paidAmount || 0);

    const discountAmount = (totalFee * discount) / 100;
    const payable = totalFee - discountAmount;
    const dueAmount = payable - paidAmount;

    newPayment.payable = payable;
    newPayment.dueAmount = dueAmount;

    updateSection("payment", newPayment);

    updateValue("appointment.totalFee", payable);
    updateValue("appointment.discount", discount);
    updateValue(
      "appointment.installment",
      Number(newPayment.installment) || 1,
    );
  };

  return (
    <div className="space-y-6 px-6 py-5">
      {/* Cards */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-4
          "
      >
        <SummaryCard
          title="مجموع فیس"
          value={`${totalFee.toLocaleString()} افغانی`}
          icon={<Calculator size={18} />}
        />

        <SummaryCard title="تخفیف" value={`${discount}%`} icon={<Percent size={18} />} />

        <SummaryCard
          title="قابل پرداخت"
          value={`${payable.toLocaleString()} افغانی`}
          icon={<CircleDollarSign size={18} />}
        />

        <SummaryCard
          title="باقی مانده"
          value={`${remaining.toLocaleString()} افغانی`}
          icon={<AlertCircle size={18} />}
        />
      </div>

      {/* Form */}
      <div className="rounded-[10px] border bg-white p-6">
        <div className="grid md:grid-cols-2 gap-5">
          <PaymentInput
            label="مجموع فیس"
            icon={<Calculator />}
            value={payment.totalFee}
            error={errors?.totalFee}
            required={true}
            onChange={(v) => {
              handleChangePayment("totalFee", v);
            }}
          />

          <PaymentInput
            label="تخفیف (%)"
            icon={<Percent />}
            value={payment.discount}
            error={errors?.discount}
            onChange={(v) => {
              handleChangePayment("discount", v);
            }}
          />

          <div>
            <label className="block mb-2 font-medium">تعداد اقساط</label>

            <div className="relative">
              <CreditCard className="absolute right-3 top-3 text-slate-400 h-5 w-5" />

              <select
                value={payment.installment}
                onChange={(e) => {
                  handleChangePayment("installment", Number(e.target.value));
                }}
                className="w-full rounded-xl border p-3 pr-12 focus:ring-2 focus:ring-blue-500"
              >
                <option value={1}>1 قسط (پرداخت کامل)</option>
                <option value={2}>2 قسط</option>
                <option value={3}>3 قسط</option>
                <option value={4}>4 قسط</option>
                <option value={5}>5 قسط</option>
              </select>
            </div>
          </div>

          <PaymentInput
            label="مبلغ دریافت شده"
            icon={<Receipt />}
            value={payment.paidAmount}
            error={errors?.paidAmount}
            required={true}
            onChange={(v) => {
              handleChangePayment("paidAmount", Number(v));
            }}
          />
        </div>
      </div>

      {/* Status */}

      <div
        className="
          grid
          md:grid-cols-3
          gap-4
          "
      >
        <StatusBox
          title="پرداخت شده"
          value={`${paid.toLocaleString()} افغانی`}
          icon={<BadgeCheck />}
        />

        <StatusBox
          title="باقی مانده"
          value={`${remaining.toLocaleString()} افغانی`}
          icon={<AlertCircle />}
        />

        <StatusBox
          title="وضعیت"
          value={remaining <= 0 ? "تکمیل شده" : "باقی دارد"}
        />
      </div>
    </div>
  );
}

function PaymentInput({ label, icon, value, onChange, error, required }) {
  return (
    <div>
      <label className="block mb-2 font-medium text-right">
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </label>

      <div className="relative">
        <div
          className="
          absolute
          right-3
          top-3
          text-slate-400
          "
        >
          {icon}
        </div>

        <input
          type="number"
          required={required ?? false}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full
            h-12
            rounded-[5px]
            border
            p-3
            pr-12
            focus:ring-2
            ${
              error
                ? "border-red-500 focus:ring-red-300"
                : "border-slate-300 focus:ring-blue-500"
            }
          `}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    
    </div>
  );
}
