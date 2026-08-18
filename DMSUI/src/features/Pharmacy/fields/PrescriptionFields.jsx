export const PrescriptionFields = (
  patients = [],
  doctors = []
) => [
  {
    name: "patientId",
    label: "مریض",
    type: "select",
    required: true,
    placeholder: "مریض را انتخاب کنید",

    options: patients.map((patient) => ({
      value: patient.id,
      label: `${patient.firstName} ${patient.lastName}`,
    })),
  },

  {
    name: "staffId",
    label: "داکتر",
    type: "select",
    required: true,
    placeholder: "داکتر را انتخاب کنید",

    options: doctors.map((doctor) => ({
      value: doctor.id,
      label: `${doctor.firstName} ${doctor.lastName}`,
    })),
  },
];