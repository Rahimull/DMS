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
    <Card>
      <CardHeader>
        <CardTitle>💰 Payment Summary</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Total Services</span>

            <strong>
              {total}
              AFN
            </strong>
          </div>

          <Input
            label="Discount"
            type="number"
            value={discount}
            onChange={(e) =>
              onChange({
                discount: e.target.value,
              })
            }
          />

          <div className="flex justify-between">
            <span>Final Amount</span>

            <strong>
              {finalAmount}
              AFN
            </strong>
          </div>

          <Input
            label="Installments"
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
            <span>Monthly Payment</span>

            <strong>
              {monthlyPayment.toFixed(2)}
              AFN
            </strong>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentSummary;
