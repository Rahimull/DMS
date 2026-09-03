export const LabCaseFields = (
  patients = [],
  doctors = [],
  labs = [],
  services = [],
) => [
  {
    name: "material",
    label: " نوع مورد",
    type: "text",
    maxLength: 150,
    placeholder: "نوع مورد",
  },
   {
  name: "caseType",
  label: "نوع مورد",
  type: "select",
  defaultValue: null,
  placeholder: "نوع مورد را انتخاب کنید",
  options: services.map((service) => ({
    value: service.id,
    label: service.name,
  })),
},
{
  name: "caseStatus",
  label: "وضعیت مورد",
  type: "select",
  placeholder: "وضعیت مورد را انتخاب کنید",
  required: true,
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
    name: "labId",
    label: "  لابراتوار",
    type: "select",
      defaultValue: null,
    placeholder: "لابراتوار",
    options: labs.map((lab) => ({
      value: lab.id,
      label: lab.name,
    })),
  },
  {
    name: "patientId",
    label: " نام مریض",
    type: "select",

    options: patients.map((patient) => ({
      value: patient.id || null,
      label: `${patient.firstName} ${patient.lastName}`,
    })),
  },
  
  {
    name: "staffId",
    label: " نام داکتر",
    type: "select",
    placeholder: "نام داکتر",
    options: doctors.map((doctor) => ({
      value: doctor.id,
      label: `${doctor.firstName} ${doctor.lastName}`,
    })),
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
    name: "totalPrice",
    label: "قیمت کل",
    type: "number",
    value: (formData) => {
      return Number(formData.quantity || 1) * Number(formData.unitPrice || 1);
    },
    maxLength: 200,
    placeholder: "قیمت کل",
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
