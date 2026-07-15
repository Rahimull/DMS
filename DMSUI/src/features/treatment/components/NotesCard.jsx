import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Input from "@/components/common/Input";

const NotesCard = ({ notes, notification, endDate, onChange }) => {
  const change = (key, value) => {
    onChange({
      [key]: value,
    });
  };

  return (
    <Card dir="rtl">
  <CardHeader>
    <CardTitle className="text-right">
      📝 یادداشت‌های تداوی
    </CardTitle>
  </CardHeader>

  <CardContent>
    <div className="space-y-4 text-right">

      <div>
        <label className="block mb-2">
          یادداشت‌ها
        </label>

        <textarea
          className="
            w-full
            border
            rounded-md
            p-3
            min-h-[120px]
            text-right
          "
          placeholder="یادداشت‌های تداوی..."
          value={notes || ""}
          onChange={(e) => change("notes", e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-2">
          اطلاعیه
        </label>

        <textarea
          className="
            w-full
            border
            rounded-md
            p-3
            min-h-[100px]
            text-right
          "
          placeholder="متن اطلاعیه..."
          value={notification || ""}
          onChange={(e) => change("notification", e.target.value)}
        />
      </div>

      <Input
        label="تاریخ مراجعه بعدی"
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
