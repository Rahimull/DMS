import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Input from "@/components/common/Input";

const NotesCard = ({ notes, notification, endDate, onChange }) => {
  const change = (key, value) => {
    onChange({
      [key]: value,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>📝 Treatment Notes</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Notes</label>

            <textarea
              className="
w-full
border
rounded-md
p-3
min-h-[120px]
"
              placeholder="Treatment notes..."
              value={notes || ""}
              onChange={(e) => change("notes", e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2">Notification</label>

            <textarea
              className="
w-full
border
rounded-md
p-3
min-h-[100px]
"
              placeholder="Notification..."
              value={notification || ""}
              onChange={(e) => change("notification", e.target.value)}
            />
          </div>

          <Input
            label="Follow Up Date"
            type="date"
            value={endDate || ""}
            onChange={(e) => change("endDate", e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default NotesCard;
