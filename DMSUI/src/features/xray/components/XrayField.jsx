
export const XrayFields = (patient = {}) => [
  {
    name: "xrayName",
    label: "نام فایل اکسرای",
    type: "text",
    required: true,
    maxLength: 150,
    col:2,
    placeholder: "نام اکسرای را وارد کنید",
  },

  {
    name: "filePath",
    label: "فایل اکسرای",
    type: "file",
    required: true,
    accept: "image/*,.pdf",
    placeholder: "فایل اکسرای را انتخاب کنید",
  },

  {
    name: "description",
    label: "توضیحات",
    type: "textarea",
    required: false,
    maxLength: 200,
    placeholder: "توضیحات مربوط به اکسرای...",
  },

  {
    name: "patientId",
    type: "hidden",
    defaultValue: patient?.id || null,
  },
];

