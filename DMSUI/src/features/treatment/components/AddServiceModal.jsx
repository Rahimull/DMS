import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";

import Input from "@/components/common/Input";

import { createCrudApi } from "@/api/crudApi";

const serviceApi = createCrudApi("/Service");

const AddServiceModal = ({ open, onClose, onSave }) => {
  const [services, setServices] = useState([]);

  const [form, setForm] = useState({
    serviceId: "",
    serviceName: "",
    fee: 0,
    quantity: 1,
    total: 0,
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

      fee: service.fee ?? 0,

      total: Number(service.fee ?? 0) * Number(form.quantity),
    });
  };

  const changeQuantity = (value) => {
    setForm({
      ...form,

      quantity: value,

      total: Number(form.fee) * Number(value),
    });
  };

  const submit = () => {
    onSave(form);

    setForm({
      serviceId: "",
      serviceName: "",
      fee: 0,
      quantity: 1,
      total: 0,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>🦷 Add Treatment Service</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <label>Service</label>

          <select
            className="w-full border rounded-md p-2"
            value={form.serviceId}
            onChange={(e) => selectService(e.target.value)}
          >
            <option>Select Service</option>

            {services.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          <Input label="Service Fee" type="number" value={form.fee} readOnly />

          <Input
            label="Quantity"
            type="number"
            value={form.quantity}
            onChange={(e) => changeQuantity(e.target.value)}
          />

          <Input label="Total Fee" type="number" value={form.total} readOnly />

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>

            <Button onClick={submit}>Add</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddServiceModal;
