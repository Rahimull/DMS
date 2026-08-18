export const PrescriptionItemFields = (
  medicines = []
) => [
  {
    name: "medicineInventoryId",
    label: "دوا",
    type: "select",
    required: true,
    placeholder: "دوا را انتخاب کنید",

    options: medicines.map((medicine) => ({
      value: medicine.id,
      label: medicine.name1,
    })),
  },

  {
    name: "dosage",
    label: "دوز",
    type: "text",
    placeholder: "مثلاً 500mg",
  },

 {
  name: "frequency",
  label: "تعداد مصرف",
  type: "select",
  required: false,
  placeholder: "تعداد مصرف را انتخاب کنید",
  options: [
    { value: "1x1", label: "1×1 — روزانه یک بار" },
    { value: "1x2", label: "1×2 — روزانه دو بار" },
    { value: "1x3", label: "1×3 — روزانه سه بار" },
    { value: "1x4", label: "1×4 — روزانه چهار بار" },
  ],
},

  {
    name: "duration",
    label: "مدت استفاده",
    type: "text",
    placeholder: "مثلاً 7 روز",
  },

  {
    name: "route",
    label: "روش مصرف",
    type: "select",
    options: [
      {
        value: "oral",
        label: "خوراکی",
      },
      {
        value: "topical",
        label: "موضعی",
      },
      {
        value: "injection",
        label: "تزریقی",
      },
    ],
  },

  {
    name: "quantity",
    label: "تعداد",
    type: "number",
    defaultValue: 1,
  },

  {
    name: "instructions",
    label: "دستور مصرف",
    type: "textarea",
    placeholder: "دستور خاص مصرف...",
  },

  {
    name: "notes",
    label: "یادداشت",
    type: "textarea",
  },
];