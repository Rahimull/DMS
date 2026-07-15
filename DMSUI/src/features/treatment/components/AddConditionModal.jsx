import { useEffect, useState } from "react";

import FormModal from "@/components/modal/FormModal";
import ConditionApi from "../api/ConditionApi";

const AddConditionModal = ({ open, onClose, onSave, editing }) => {
  const [conditions, setConditions] = useState([]);

  const [form, setForm] = useState({
    conditionId: null,

    severity: "",

    notes: "",
  });

  useEffect(() => {
    loadConditions();
  }, []);

  useEffect(() => {
    if (editing) {
      setForm(editing);
    } else {
      setForm({
        conditionId: null,

        severity: "",

        notes: "",
      });
    }
  }, [editing]);

  const loadConditions = async () => {
    const data = await ConditionApi.lookup({
      value: "id",

      label: (x) => x.name,
    });

    setConditions(data);
  };

  const submit = () => {
    onSave({
      ...form,
    });
  };

  const fields = [
    {
      name: "conditionId",

      label: "تشخیص",

      type: "select",

      options: conditions,

      required: true,
    },

    {
      name: "severity",

      label: "شدت بیماری",

      type: "select",

      options: [
        {
          label: "خفیف",
          value: "Low",
        },

        {
          label: "متوسط",
          value: "Medium",
        },

        {
          label: "شدید",
          value: "High",
        },
      ],
    },

    {
      name: "notes",

      label: "یادداشت",

      type: "textarea",
    },
  ];

  return (
    <FormModal
      open={open}
      onClose={onClose}
      title={editing ? "ویرایش تشخیص" : "اضافه کردن تشخیص"}
      fields={fields}
      initialValues={form}
      onSubmit={submit}
    />
  );
};

export default AddConditionModal;
