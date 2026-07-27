
export const ConditionDetailsFields = [
 
  
    
  {
    name: "severity",
    label: " شدت بیماری",
    type: "select",
    options: [
      {label :  "خفیف", value:"mild"},
      {label :"منوسط" , value:"moderate" },
      {label :"شدید", value:  "severe"},
    ]
  },
   {
    name: "diagnosisDate",
    label: "تاریخ ثبت",
    type: "date",
    maxLength: 100,
    placeholder: "اسم مریض",
  },
  {
    name: "result",
    label: "نتیجه",
    type: "number",
    maxLength: 10,
    placeholder: "نتیجه",
  },
  {
    name: "notes",
    label: "یاد داشت",
    type: "textarea",
    maxLength: 200,
    placeholder: " یاد داشت",
  },
    
 ];

