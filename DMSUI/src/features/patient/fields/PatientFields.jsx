
export const PatientFields = [
  {
    name: "firstName",
    label: "اسم",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "اسم مریض",
  },
  {
    name: "lastName",
    label: "تخلص",
    type: "text",
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
    name: "phone",
    label: "شمار تماس",
    type: "text",
    required: true,
    maxLength: 20,
    placeholder: "شماره تماس",
  },
   {
    name: "age",
    label: "عمر",
    type: "number",
    required: true,
    maxLength: 10,
    placeholder: "عمر",
  },
  {
    name: "gender",
    label: "جنسیت",
    type: "select",
    required: true,
    options: [
      {label : "مرد", value: "مرد"},
      {label : "زن", value: "زن"},
    ],
    maxLength: 100,
    placeholder: "جنسیت",
  },
 
  {
    name: "maritalStatus",
    label: "حالت مدنی",
    type: "select",
    options: [
      {label : "متاهل", value: "متاهل"},
      {label : "مجرد", value: "مجرد"},
    ],
    placeholder: "حالت مدنی",
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
    name: "registrationDate",
    label: "تاریخ ثبت",
    type: "date",
    required: true,
    maxLength: 100,
    placeholder: "تاریخ ثبت",
  },
  {
    name: "address",
    label: "ادرس بیمار",
    type: "textarea",
    maxLength: 200,
    placeholder: "ادرس بیمار",
  },
  
 ];

