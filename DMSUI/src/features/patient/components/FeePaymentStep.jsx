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

export default function FeePaymentStep({ formData, updateSection }) {
  const payment = formData.payment ?? {
    totalFee: 0,
    discount: 0,
    paidAmount: 0,
    paymentType: "full",
  };

  const totalFee = Number(payment.totalFee || 0);

  const discount = Number(payment.discount || 0);

  const discountAmount = (totalFee * discount) / 100;

  const payable = totalFee - discountAmount;

  const paid = Number(payment.paidAmount || 0);

  const remaining = payable - paid;

  const handleChange = (name, value) => {
    updateSection("payment", {
      ...payment,

      [name]: value,
    });
  };

  return (
    <div className="space-y-6">
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
          icon={<Calculator />}
        />

        <SummaryCard title="تخفیف" value={`${discount}%`} icon={<Percent />} />

        <SummaryCard
          title="قابل پرداخت"
          value={`${payable.toLocaleString()} افغانی`}
          icon={<CircleDollarSign />}
        />

        <SummaryCard
          title="باقی مانده"
          value={`${remaining.toLocaleString()} افغانی`}
          icon={<AlertCircle />}
        />
      </div>

      {/* Form */}

      <div
        className="
rounded-3xl
border
bg-white
p-6
"
      >
        <div
          className="
grid
md:grid-cols-2
gap-5
"
        >
          <PaymentInput
            label="مجموع فیس"
            icon={<Calculator />}
            value={payment.totalFee}
            onChange={(v) => handleChange("totalFee", v)}
          />

          <PaymentInput
            label="تخفیف فیصدی"
            icon={<Percent />}
            value={payment.discount}
            onChange={(v) => handleChange("discount", v)}
          />

          <PaymentInput
            label="مبلغ دریافت شده"
            icon={<Receipt />}
            value={payment.paidAmount}
            onChange={(v) => handleChange("paidAmount", v)}
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

function PaymentInput({ label, icon, value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-medium">{label}</label>

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
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className="
w-full
rounded-xl
border
p-3
pr-12
focus:ring-2
focus:ring-blue-500
"
        />
      </div>
    </div>
  );
}
