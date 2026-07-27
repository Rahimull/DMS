import WirzadForm from "@/components/form/WizrdForm";
import { PatientFields } from "../fields/PatientFields";

export default function PersonalInfoStep({
  formData,
  updateSection,
  errors,
}) {

  const handleChange = (e) => {
    updateSection("patient", {
      [e.target.name]: e.target.value,
    });
  };

  return (
    <WirzadForm
      fields={PatientFields}
      values={formData.patient}
      onChange={handleChange}
      errors={errors}
      showActions={false}
      border={false}
    />
  );
}





