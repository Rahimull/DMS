import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import Input from "@/components/common/Input";

import { useEffect, useState } from "react";

import { createCrudApi } from "@/api/crudApi";

const serviceApi = createCrudApi("/Service");

const TreatmentServiceModal = ({ open, onClose, onSave }) => {
  const [services, setServices] = useState([]);

  const [form, setForm] = useState({
    serviceId: "",

    serviceName: "",

    toothNumber: "",

    surface: "",

    status: "Planned",

    fee: 0,

    note: "",
  });

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    const data = await serviceApi.lookup({
      value: "id",

      label: (x) => x.name,
    });

    setServices(data);
  };

  const selectService = (id) => {
    const service = services.find((x) => x.value == id);

    setForm({
      ...form,

      serviceId: id,

      serviceName: service.label,
    });
  };

  const save = () => {
    const result = {
      ...form,

      value: `
Tooth:${form.toothNumber}
|
Surface:${form.surface}
|
Status:${form.status}
|
Note:${form.note}
`,
    };

    onSave(result);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent dir="rtl" className="text-right">
        <DialogHeader>
          <DialogTitle>🦷 افزودن خدمت دندان‌پزشکی</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="block mb-1">خدمت</label>

            <select
              className="w-full border rounded p-2 text-right"
              value={form.serviceId}
              onChange={(e) => selectService(e.target.value)}
            >
              <option value="">انتخاب خدمت</option>

              {services.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <Input
            label="شماره دندان"
            value={form.toothNumber}
            onChange={(e) =>
              setForm({
                ...form,
                toothNumber: e.target.value,
              })
            }
          />

          <select
            className="w-full border rounded p-2 text-right"
            value={form.surface}
            onChange={(e) =>
              setForm({
                ...form,
                surface: e.target.value,
              })
            }
          >
            <option value="">سطح دندان</option>
            <option value="Mesial">مزیال (Mesial)</option>
            <option value="Distal">دیستال (Distal)</option>
            <option value="Buccal">باکال (Buccal)</option>
            <option value="Lingual">لینگوال (Lingual)</option>
          </select>

          <select
            className="w-full border rounded p-2 text-right"
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value,
              })
            }
          >
            <option value="Planned">برنامه‌ریزی شده</option>
            <option value="Completed">تکمیل شده</option>
            <option value="Cancelled">لغو شده</option>
          </select>

          <Input
            label="فیس"
            type="number"
            value={form.fee}
            onChange={(e) =>
              setForm({
                ...form,
                fee: e.target.value,
              })
            }
          />

          <textarea
            className="w-full border rounded p-3 text-right"
            placeholder="یادداشت داکتر"
            value={form.note}
            onChange={(e) =>
              setForm({
                ...form,
                note: e.target.value,
              })
            }
          />

          <div className="flex justify-start gap-3">
            <Button variant="outline" onClick={onClose}>
              انصراف
            </Button>

            <Button onClick={save}>ذخیره</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TreatmentServiceModal;
