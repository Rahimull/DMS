import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Plus, Edit, Trash2 } from "lucide-react";

const DiagnosisCard = ({ diagnoses = [], onAdd, onEdit, onDelete }) => {
  return (
<Card dir="rtl">
  <CardHeader
    className="
      flex
      flex-row-reverse
      justify-between
      items-center
    "
  >
    <CardTitle className="text-right">
      🩺 تشخیص بیماری
    </CardTitle>

    <Button size="sm" onClick={onAdd}>
      <Plus size={16} />
      افزودن
    </Button>
  </CardHeader>

  <CardContent>
    <div className="space-y-4">

      {diagnoses.length === 0 ? (
        <div className="text-gray-500 text-center">
          هیچ تشخیصی ثبت نشده است
        </div>
      ) : (
        diagnoses.map((item) => (
          <div
            key={item.id}
            className="
              border
              rounded-xl
              p-4
              space-y-2
              text-right
            "
          >
            <div className="flex justify-between items-center">
              <span
                className={`
                  px-2
                  py-1
                  rounded
                  text-xs

                  ${
                    item.severity === "High"
                      ? "bg-red-100 text-red-600"
                      : item.severity === "Medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                  }
                `}
              >
                {item.severity === "High"
                  ? "شدید"
                  : item.severity === "Medium"
                    ? "متوسط"
                    : "خفیف"}
              </span>

              <h3 className="font-semibold">
                {item.conditionName}
              </h3>
            </div>

            <div className="text-sm space-y-1">
              <p>
                📅 تاریخ تشخیص:
                {" "}
                {item.diagnosisDate}
              </p>

              <p>
                📝 یادداشت:
                {" "}
                {item.notes || "یادداشتی موجود نیست"}
              </p>
            </div>

            <div className="flex justify-start gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(item)}
              >
                <Edit size={16} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(item.id)}
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  </CardContent>
</Card>
  );
};

export default DiagnosisCard;
