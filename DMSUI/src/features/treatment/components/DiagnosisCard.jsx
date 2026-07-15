import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Plus, Edit, Trash2 } from "lucide-react";

const DiagnosisCard = ({ diagnoses = [], onAdd, onEdit, onDelete }) => {
  return (
    <Card>
      <CardHeader
        className="
flex
flex-row
justify-between
items-center
"
      >
        <CardTitle>🩺 Diagnosis</CardTitle>

        <Button size="sm" onClick={onAdd}>
          <Plus size={16} />
          Add
        </Button>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {diagnoses.length === 0 ? (
            <div className="text-gray-500 text-center">No diagnosis found</div>
          ) : (
            diagnoses.map((item) => (
              <div
                key={item.id}
                className="
border
rounded-xl
p-4
space-y-2
"
              >
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.conditionName}</h3>

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
                    {item.severity}
                  </span>
                </div>

                <div className="text-sm">
                  <p>
                    📅 Date:
                    {item.diagnosisDate}
                  </p>

                  <p>
                    📝
                    {item.notes || "No notes"}
                  </p>
                </div>

                <div className="flex justify-end gap-2">
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
