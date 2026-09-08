
export const PatientServiceFields = (
  patient = {},
  services = [],
  servicesRequirement = []
) => [
  {
    name: "serviceId",
    label: "خدمت درمانی",
    type: "select",
    options: services.map((service) => ({
      label: service.name,
      value: service.id,
    })),
    required: true,
    placeholder: "خدمت درمانی را انتخاب کنید",
  },

  {
    name: "serviceRequirementId",
    label: "نیازمندی خدمت",
    type: "select",
    options: servicesRequirement.map((requirement) => ({
      label: requirement.name,
      value: requirement.id,
    })),
    required: false,
    placeholder: "نیازمندی خدمت را انتخاب کنید",
  },

  {
    name: "value",
    label: "مقدار",
    type: "number",
    required: false,
    placeholder: "مقدار را وارد کنید",
  },

  {
    name: "unitPrice",
    label: "قیمت واحد",
    type: "number",
    required: true,
    placeholder: "قیمت واحد را وارد کنید",
  },

  {
    name: "quantity",
    label: "تعداد",
    type: "number",
    required: true,
    defaultValue: 1,
    placeholder: "تعداد را وارد کنید",
  },

  {
    name: "notes",
    label: "یادداشت",
    type: "textarea",
    required: false,
    maxLength: 300,
    placeholder: "یادداشت مربوط به خدمت را وارد کنید...",
  },

  {
    name: "patientId",
    type: "hidden",
    defaultValue: patient?.id || null,
  },

  {
    name: "appointmentId",
    type: "hidden",
    defaultValue: patient?.appointmentId || null,
  },

  {
    name: "treatmentPlanId",
    type: "hidden",
    defaultValue: patient?.treatmentPlanId || null,
  },
];
