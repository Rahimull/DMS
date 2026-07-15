import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Plus, Trash2 } from "lucide-react";

const ServiceTable = ({ services = [], onChange, onAdd }) => {
  const removeService = (id) => {
    const result = services.filter((item) => item.id !== id);

    onChange(result);
  };

  const total = services.reduce(
    (sum, item) => sum + Number(item.total || 0),

    0,
  );

  return (
    <Card dir="rtl">
  <CardHeader className="flex flex-row-reverse justify-between items-center">
    <CardTitle className="text-right">
      🦷 خدمات تداوی
    </CardTitle>

    <Button size="sm" onClick={onAdd}>
      <Plus size={16} />
      افزودن خدمت
    </Button>
  </CardHeader>

  <CardContent>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-right">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-right">خدمت</th>
            <th className="text-right">فیس</th>
            <th className="text-right">تعداد</th>
            <th className="text-right">مجموع</th>
            <th className="text-right">عملیات</th>
          </tr>
        </thead>

        <tbody>
          {services.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-3">{item.serviceName}</td>

              <td>
                {item.fee} افغانی
              </td>

              <td>{item.quantity}</td>

              <td>
                {item.total} افغانی
              </td>

              <td>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => removeService(item.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="flex justify-start mt-5 font-bold text-right">
      مجموع کل:
      <span className="mr-2">
        {total} افغانی
      </span>
    </div>
  </CardContent>
</Card>
  );
};

export default ServiceTable;
