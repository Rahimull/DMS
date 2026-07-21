import Form from "@/components/form/Form";
import { PatientFields } from "../fields/PatientFields";

export default function PersonalInfoStep() {

  return (
    
     <Form
        fields={PatientFields}
        showActions={false}
       />
  );
}
