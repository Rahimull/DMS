import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Input from "@/components/common/Input";

const TreatmentHeader = ({
  form,
  setForm,
  patientOptions = [],
  staffOptions = [],
}) => {
  const change = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <Card dir="rtl">
  <CardHeader>
    <CardTitle className="text-right">
      📝 معلومات تداوی
    </CardTitle>
  </CardHeader>

  <CardContent>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">

      {/* Patient */}
      <div>
        <label className="block mb-1">مریض *</label>

        <select
          className="w-full border rounded-md p-2 text-right"
          value={form.patientId || ""}
          onChange={(e) => change("patientId", Number(e.target.value))}
        >
          <option value="">انتخاب مریض</option>

          {patientOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Doctor */}
      <div>
        <label className="block mb-1">داکتر *</label>

        <select
          className="w-full border rounded-md p-2 text-right"
          value={form.staffId || ""}
          onChange={(e) => change("staffId", Number(e.target.value))}
        >
          <option value="">انتخاب داکتر</option>

          {staffOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <Input
        label="تاریخ شروع"
        type="date"
        value={form.startDate || ""}
        onChange={(e) => change("startDate", e.target.value)}
        className="text-right"
      />

      <Input
        label="تاریخ ختم"
        type="date"
        value={form.endDate || ""}
        onChange={(e) => change("endDate", e.target.value)}
        className="text-right"
      />

      <div>
        <label className="block mb-1">وضعیت</label>

        <select
          className="w-full border rounded-md p-2 text-right"
          value={form.status || ""}
          onChange={(e) => change("status", e.target.value)}
        >
          <option value="">انتخاب کنید</option>
          <option value="Draft">پیش‌نویس</option>
          <option value="Active">فعال</option>
          <option value="Completed">تکمیل شده</option>
          <option value="Cancelled">لغو شده</option>
        </select>
      </div>

      <Input
        label="دَوْر"
        type="number"
        value={form.round || 1}
        onChange={(e) => change("round", e.target.value)}
      />

      <Input
        label="اقساط"
        type="number"
        value={form.installments || 1}
        onChange={(e) => change("installments", e.target.value)}
      />

      <Input
        label="تخفیف"
        type="number"
        value={form.discount || 0}
        onChange={(e) => change("discount", e.target.value)}
      />
    </div>
  </CardContent>
</Card>
  );
};

export default TreatmentHeader;
