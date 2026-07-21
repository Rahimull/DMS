
export const PatientFields = [
  {
    name: "firstName",
    label: "اسم  *",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "اسم مریض",
  },
  {
    name: "lastName",
    label: "تخلص",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "تخلص بیمار",
  },
  {
    name: "fatherName",
    label: "نام پدر ",
    type: "text",

    maxLength: 100,
    placeholder: "نام پدر",
  },
  {
    name: "gender",
    label: "جنسیت",
    type: "select",
    options: [
      {label : "مذکر", value: "مذکر"},
      {label : "مونث", value: "مونث"},
    ],
    maxLength: 100,
    placeholder: "جنسیت",
  },
  {
    name: "age",
    label: "عمر",
    type: "number",
    required: true,
    maxLength: 100,
    placeholder: "عمر",
  },
  {
    name: "maritalStatus",
    label: "حالت مدنی",
    type: "select",
    options: [
      {label : "متحل", value: "متحل"},
      {label : "مجرد", value: "مجرد"},
    ],
    placeholder: "حالت مدنی",
  },
  {
    name: "phone",
    label: "شمار تماس",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "شماره تماس",
  },
  {
    name: "registrationDate",
    label: "تاریخ ثبت",
    type: "date",
    required: true,
    maxLength: 100,
    placeholder: "تاریخ ثبت",
  },
  {
    name: "bloodGroup",
    label: "گروپ خون",
    type: "select",
    options: [
      {label : "A+", value: "A+"},
      {label : "B+", value: "B+"},
      {label : "ORH", value: "ORH"},
      {label : "O+", value: "O+"},
      {label : "O-", value: "O-"},
      {label : "A-", value: "A-"},
      {label : "B-", value: "B-"},
    ],
  },
  {
    name: "address",
    label: "ادرس بیمار *",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "ادرس بیمار",
  },
  
 ];

