export const clinicFields = [
  {
    name: "name",
    label: "نام کلینیک *",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "نام کلینیک",
  },
  {
    name: "address",
    label: "ادرس کلینیک *",
    type: "text",
    required: true,
    maxLength: 100,
    placeholder: "ادرس کلینیک",
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