import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Input from "@/components/common/Input";

const PaymentSummary = ({
  services = [],
  discount = 0,
  installments = 1,
  onChange,
}) => {
  const total = services.reduce(
    (sum, item) => sum + Number(item.total || 0),

    0,
  );

  const finalAmount = total - Number(discount || 0);

  const monthlyPayment = finalAmount / Number(installments || 1);

  return (
    <Card dir="rtl">
  <CardHeader>
    <CardTitle className="text-right">
      💰 خلاصه پرداخت
    </CardTitle>
  </CardHeader>

  <CardContent>
    <div className="space-y-4 text-right">

      <div className="flex justify-between">
        <strong>
          {total} افغانی
        </strong>

        <span>مجموع خدمات</span>
      </div>

      <Input
        label="تخفیف"
        type="number"
        value={discount}
        onChange={(e) =>
          onChange({
            discount: e.target.value,
          })
        }
      />

      <div className="flex justify-between">
        <strong>
          {finalAmount} افغانی
        </strong>

        <span>مبلغ نهایی</span>
      </div>

      <Input
        label="تعداد اقساط"
        type="number"
        value={installments}
        min={1}
        onChange={(e) =>
          onChange({
            installments: e.target.value,
          })
        }
      />

      <div className="flex justify-between">
        <strong>
          {monthlyPayment.toFixed(2)} افغانی
        </strong>

        <span>قسط هر ماه</span>
      </div>
    </div>
  </CardContent>
</Card>
  );
};

export default PaymentSummary;
