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
    if (open) {
      loadConditions();
    }
  }, [open]);

  useEffect(() => {
    if (editing) {
      setForm({
        conditionId: editing.conditionId,

        severity: editing.severity,

        notes: editing.notes,
      });
    } else {
      setForm({
        conditionId: null,

        severity: "",

        notes: "",
      });
    }
  }, [editing, open]);

  const loadConditions = async () => {
    try {
      const data = await ConditionApi.lookup({
        value: "id",

        label: (x) => x.name,
      });
      console.log("Condiation name: ", data);

      setConditions(data);
    } catch (error) {
      console.log("LOAD CONDITION ERROR", error);
    }
  };

  const submit = (data) => {
    

    if (!data.conditionId) {
      alert("لطفاً تشخیص را انتخاب کنید");

      return;
    }
    const selected = conditions.find((x)=> x.value === Number(data.conditionId))

    onSave({
      conditionId: Number(data.conditionId),

      severity: data.severity,
      name: selected?.label,
      notes: data.notes,
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
