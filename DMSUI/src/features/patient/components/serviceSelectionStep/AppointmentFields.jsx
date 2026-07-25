
export const  AppointmentFields =(services, doctors) => [
    {
      name: "serviceId",
      label: "خدمات",
      type: "select",
      required: true,
      options: services,
  
    },
    {
      name: "staffId",
      label: "داکتر",
      type: "select",
      required: true,
      options: doctors,
  
    },

    {
      name: "meetDate",
      label: "تاریخ ملاقات",
      type: "datetime-local",
      required: true,
    },

    {
      name: "details",
      label: "توضیحات",
      type: "textarea",
      rows: 3,
      col: 2,
    },
  ]

 
