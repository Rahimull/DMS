export const clinicFields = [
  {
    name: "clinic_name",
    label: "نام کلینیک",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "نام کلینیک",
  },
  {
    name: "clinic_address",
    label: "ادرس کلینیک",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "ادرس کلینیک",
  },
  {
    name: "clinic_founder",
    label: " کلینیک فوندر",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: " کلینیک فوندر",
  },
  {
    name: "staffId",
    label: " کلینیک کارمند",
    type: "select",
    required: true,
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
    name: "clinic_email",
    label: "ایمیل",
    type: "email",
    maxLength: 100,
    placeholder: "example@gmail.com",
  },

 ];