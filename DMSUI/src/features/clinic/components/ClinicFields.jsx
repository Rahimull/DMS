export const clinicFields = [
  {
    name: "name",
    label: "نام کلینیک",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "نام کلینیک",
  },
  {
    name: "address",
    label: "ادرس کلینیک",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "ادرس کلینیک",
  },
  {
    name: "founderId",
    label: " کلینیک فوندر",
    type: "select",
    required: true,
    maxLength: 100,
    placeholder: " کلینیک فوندر",
    options: 
      [
    { label: "Medicine", value: 1 },
    { label: "Equipment", value: 2 },
    { label: "Consumable", value: 3 },
    { label: "Service", value: 4 },
  ],
  },
  {
    name: "staffId",
    label: " کلینیک کارمند",
    type: "select",
    required: true,
    options: 
      [
    { label: "Medicine", value: 1 },
    { label: "Equipment", value: 2 },
    { label: "Consumable", value: 3 },
    { label: "Service", value: 4 },
  ],
    
    maxLength: 100,
    placeholder: " کلینیک کارمند",
  },
   {
    name: "phone1",
    label: "شماره تماس اصلی",
    type: "text",
    required: true,
    maxLength: 20,
    placeholder: "07xxxxxxxx",
  },

  {
    name: "phone2",
    label: "شماره تماس دوم",
    type: "text",
    maxLength: 20,
    placeholder: "اختیاری",
  },

  {
    name: "email",
    label: "ایمیل",
    type: "email",
    maxLength: 100,
    placeholder: "example@gmail.com",
  },

 ];