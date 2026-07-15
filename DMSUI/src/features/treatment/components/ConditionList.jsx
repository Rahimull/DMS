import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Plus, Trash2, Edit } from "lucide-react";

const ConditionList = ({ conditions = [], onAdd, onEdit, onDelete }) => {
  return (
    <Card dir="rtl">
  <CardHeader className="flex flex-row-reverse justify-between items-center">
    <CardTitle className="text-right">
      🩺 تشخیص‌ها / وضعیت‌های صحی
    </CardTitle>

    <Button onClick={onAdd} size="sm">
      <Plus size={16} />
      افزودن
    </Button>
  </CardHeader>

  <CardContent>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-right">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-right">تشخیص</th>
            <th className="text-right">شدت</th>
            <th className="text-right">تاریخ</th>
            <th className="text-right">عملیات</th>
          </tr>
        </thead>

        <tbody>
          {conditions.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-3">
                {item.conditionName}
              </td>

              <td>
                {item.severity === "High"
                  ? "شدید"
                  : item.severity === "Medium"
                  ? "متوسط"
                  : item.severity === "Low"
                  ? "خفیف"
                  : item.severity}
              </td>

              <td>{item.diagnosisDate}</td>

              <td>
                <div className="flex justify-start gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit(item)}
                  >
                    <Edit size={16} />
                  </Button>

                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onDelete(item.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {conditions.length === 0 && (
        <div className="text-center text-muted-foreground py-6">
          هیچ تشخیصی ثبت نشده است
        </div>
      )}
    </div>
  </CardContent>
</Card>
  );
};

export default ConditionList;
