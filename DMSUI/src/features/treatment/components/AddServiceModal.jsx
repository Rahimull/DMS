import { useEffect, useState } from "react";

import FormModal from "@/components/modal/FormModal";
import ServiceApi from "../../service/api/ServiceApi";

const AddServiceModal = ({ open, onClose, onSave, editing }) => {
  const [services, setServices] = useState([]);

  const [form, setForm] = useState({
    serviceId: null,
    serviceFee: 0,
    quantity: 1,
    totalFee: 0,
  });

  // ==========================
  // Load Services
  // ==========================

  useEffect(() => {
    if (open) {
      loadServices();
    }
  }, [open]);

  // ==========================
  // Edit Mode
  // ==========================

  useEffect(() => {
    if (editing) {
      setForm({
        serviceId: editing.serviceId,
        serviceFee: editing.serviceFee,
        quantity: editing.quantity,
        totalFee: editing.totalFee,
      });
    } else {
      setForm({
        serviceId: null,
        serviceFee: 0,
        quantity: 1,
        totalFee: 0,
      });
    }
  }, [editing, open]);

  // ==========================
  // Load Lookup
  // ==========================

  const loadServices = async () => {
    try {
      const data = await ServiceApi.lookup({
        value: "id",
        label: (x) => x.name,
        extra: ["fee"],
      });

      setServices(data);
    } catch (error) {
      console.log(error);
    }
  };

  // ==========================
  // Submit
  // ==========================

  const submit = (data) => {
    const selected = services.find((x) => x.value === Number(data.serviceId));

    if (!selected) {
      alert("لطفاً خدمت را انتخاب کنید");
      return;
    }

    const serviceFee = Number(selected.fee);
    const quantity = Number(data.quantity || 1);

    onSave({
      serviceId: Number(selected.value),
      serviceName: selected.label,
      serviceFee,
      quantity,
      totalFee: serviceFee * quantity,
    });

    onClose();
  };

  const fields = [
    {
      name: "serviceId",
      label: "خدمت",
      type: "select",
      required: true,
      options: services,
    },

    {
      name: "quantity",
      label: "تعداد",
      type: "number",
    },
  ];

  return (
    <FormModal
      open={open}
      onClose={onClose}
      title={editing ? "ویرایش خدمت" : "اضافه کردن خدمت"}
      fields={fields}
      initialValues={form}
      onSubmit={submit}
    />
  );
};

export default AddServiceModal;
