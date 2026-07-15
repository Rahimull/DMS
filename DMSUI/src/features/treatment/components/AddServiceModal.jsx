import { useEffect, useState } from "react";

import FormModal from "@/components/modal/FormModal";

import ServiceApi from "../../service/api/ServiceApi";

const AddServiceModal = ({ open, onClose, onSave }) => {
  const [services, setServices] = useState([]);

  const [form, setForm] = useState({
    serviceId: null,

    serviceFee: 0,

    quantity: 1,

    totalFee: 0,
  });


 

  useEffect(() => {
    if (open) {
      loadServices();

      setForm({
        serviceId: null,

        serviceFee: 0,

        quantity: 1,

        totalFee: 0,
      });
    }
  }, [open]);

  const loadServices = async () => {
    const data = await ServiceApi.lookup({
      value: "id",

      label: (x) => x.name,
    });

    setServices(data);
  };

  const changeService = (id) => {
    const service = services.find((x) => x.value == id);

    setForm((prev) => ({
      ...prev,

      serviceId: id,

      serviceFee: service?.fee ?? 0,

      totalFee: Number(service?.fee ?? 0) * Number(prev.quantity),
    }));
  };

  const changeQuantity = (qty) => {
    setForm((prev) => ({
      ...prev,

      quantity: qty,

      totalFee: Number(prev.serviceFee) * Number(qty),
    }));
  };

  const submit = () => {
    onSave({
      serviceId: form.serviceId,

      serviceFee: Number(form.serviceFee),

      totalFee: Number(form.totalFee),

      quantity: Number(form.quantity),
    });
  };

  const fields = [
    {
      name: "serviceId",

      label: "خدمت",

      type: "select",

      required: true,

      options: services,

      onChange: changeService,
    },

    {
      name: "serviceFee",

      label: "قیمت",

      type: "number",

      disabled: true,
    },

    {
      name: "quantity",

      label: "تعداد",

      type: "number",

      value: form.quantity,

      onChange: (e) => changeQuantity(e.target.value),
    },

    {
      name: "totalFee",

      label: "مجموع",

      type: "number",

      disabled: true,
    },
  ];


   const selected = services.find(
  (x) => x.value === Number(serviceId)
);

// setForm((prev) => ({
//   ...prev,
//   serviceId: selected.value,
//   serviceFee: selected.fee,
//   totalFee: selected.fee * prev.quantity,
// }));

  return (
    <FormModal
      open={open}
      onClose={onClose}
      title="اضافه کردن خدمت"
      fields={fields}
      initialValues={form}
      onSubmit={submit}
    />
  );
};

export default AddServiceModal;
