export const LabCaseFields = (
  patients = [],
  doctors = [],
  labs = []
) => [
  {
    name: "material",
    label: " نوع مورد",
    type: "text",
    maxLength: 150,
    placeholder: "نوع مورد",
  },
  {
    name: "patient",
    label: " نام مریض",
    type: "select",

    options: patients.map((patient) => ({
      value: patient.id,
      label: `${patient.firstName} ${patient.lastName}`,
    })),

    
  },
  {
    name: "staff",
    label: " نام داکتر",
    type: "select",
    placeholder: "نام داکتر",
    options: doctors.map((doctor) => ({
      value: doctor.id,
      label: `${doctor.firstName} ${doctor.lastName}`,
    })),
  },
  {
    name: "lab",
    label: "  لابراتوار",
    type: "select",
    placeholder: "لابراتوار",
    options: labs.map((lab) => ({
      value: lab.id,
      label: lab.name,
    })),
  },
 {
  name: "caseType",
  label: "نوع مورد",
  type: "select",
  placeholder: "نوع مورد را انتخاب کنید",
  options: [
    { value: "Crown", label: "روکش (Crown)" },
    { value: "Bridge", label: "بریج (Bridge)" },
    { value: "Veneer", label: "ونیر (Veneer)" },
    { value: "Implant", label: "ایمپلنت (Implant)" },
    { value: "Denture", label: "دندان مصنوعی (Denture)" },
    { value: "Orthodontic", label: "ارتودنسی" },
    { value: "Other", label: "سایر" },
  ],
},
{
  name: "caseStatus",
  label: "وضعیت مورد",
  type: "select",
  placeholder: "وضعیت مورد را انتخاب کنید",
  options: [
    { value: "Pending", label: "در انتظار" },
    { value: "Sent", label: "ارسال شده" },
    { value: "InProgress", label: "در حال انجام" },
    { value: "Completed", label: "تکمیل شده" },
    { value: "Received", label: "دریافت شده" },
    { value: "Cancelled", label: "لغو شده" },
  ],
},
  {
    name: "dateSent",
    label: "تاریخ ارسال",
    type: "datetime-local",
    placeholder: "تاریخ ارسال",
  },
  {
    name: "dateReceived",
    label: "تاریخ دریافت",
    type: "datetime-local",
    placeholder: "تاریخ دریافت",
  },
  {
    name: "quantity",
    label: "تعداد",
    type: "number",
    required: true,
    placeholder: "تعداد",
  },
  {
    name: "unitPrice",
    label: "قیمت واحد",
    type: "number",
    required: true,
    placeholder: "قیمت واحد",
  },
  {
    name: "otherServiceDetails",
    label: " جزئیات خدمات دیگر",
    type: "text-area",
    maxLength: 200,
    col: 2,
    placeholder: " جزئیات خدمات دیگر",
  },
  {
    name: "note",
    label: " توضیحات",
    type: "text-area",
    maxLength: 200,
    col: 2,
    placeholder: " توضیحات",
  },
];
