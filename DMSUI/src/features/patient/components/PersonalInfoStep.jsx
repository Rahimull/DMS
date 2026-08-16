
import WirzadForm from "@/components/form/WizrdForm";
import { PatientFields } from "../fields/PatientFields";

export default function PersonalInfoStep({
  formData,
  updateSection,
  errors = {},
}) {

  const patientData = formData?.patient ?? {};

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;
    updateSection("patient", {

      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
   

  };

  return (

    <WirzadForm

      title=" "

      description=""

      fields={PatientFields}

      values={patientData}

      onChange={handleChange}

      errors={errors}

      showActions={false}

      border={false}

    />

  );
}