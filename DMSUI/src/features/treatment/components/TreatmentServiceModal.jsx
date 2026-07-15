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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>🦷 Add Dental Service</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <label>Service</label>

          <select
            className="w-full border rounded p-2"
            value={form.serviceId}
            onChange={(e) => selectService(e.target.value)}
          >
            <option>Select Service</option>

            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>

          <Input
            label="Tooth Number"
            value={form.toothNumber}
            onChange={(e) =>
              setForm({
                ...form,

                toothNumber: e.target.value,
              })
            }
          />

          <select
            className="w-full border rounded p-2"
            value={form.surface}
            onChange={(e) =>
              setForm({
                ...form,

                surface: e.target.value,
              })
            }
          >
            <option>Surface</option>

            <option>Mesial</option>

            <option>Distal</option>

            <option>Buccal</option>

            <option>Lingual</option>
          </select>

          <select
            className="w-full border rounded p-2"
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,

                status: e.target.value,
              })
            }
          >
            <option>Planned</option>

            <option>Completed</option>

            <option>Cancelled</option>
          </select>

          <Input
            label="Fee"
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
            className="w-full border rounded p-3"
            placeholder="Doctor note"
            value={form.note}
            onChange={(e) =>
              setForm({
                ...form,

                note: e.target.value,
              })
            }
          />

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>

            <Button onClick={save}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TreatmentServiceModal;
