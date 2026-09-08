export const ConditionDetailsFields = (
  patient = {},
  conditions = []
) => [
  {
    name: "conditionId",
    label: "نام بیماری",
    type: "select",
    options: conditions.map((c) => ({
      label: c.name,
      value: c.id,
    })),
    required: true,
    placeholder: "بیماری را انتخاب کنید",
  },

  {
    name: "severty",
    label: "شدت بیماری",
    type: "select",
    options: [
      {
        label: "خفیف",
        value: "Mild",
      },
      {
        label: "متوسط",
        value: "Moderate",
      },
      {
        label: "شدید",
        value: "Severe",
      },
    ],
    required: true,
    placeholder: "شدت بیماری را انتخاب کنید",
  },

  {
    name: "result",
    label: "نتیجه",
    type: "select",
    options: [
      {
        label: "مثبت",
        value: 1,
      },
      {
        label: "منفی",
        value: 0,
      },
    ],
    required: true,
    placeholder: "نتیجه را انتخاب کنید",
  },

  {
    name: "daignosisDate",
    label: "تاریخ تشخیص",
    type: "date",
    required: false,
  },

  {
    name: "notes",
    label: "یادداشت",
    type: "textarea",
    required: false,
    maxLength: 500,
    placeholder: "یادداشت مربوط به بیماری را وارد کنید...",
  },

  {
    name: "patientId",
    type: "hidden",
    defaultValue: patient?.id || null,
  },
];