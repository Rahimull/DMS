import FormModal from "@/components/modal/FormModal";
import { PatientServiceFields } from "./PatientServiceField";

const PatientServiceForm = ({ CURD, patient, services, serviceRequirment }) => {
  return (
    <FormModal
      open={CURD.openModal}
      onClose={CURD.closeModal}
      title={
        CURD.editing
          ? "ویرایش امراض "
          : "اضافه کردن امراض "
      }
      submitText={CURD.editing ? "اپدیت امراض" : "اضاف کردن امراض"}
      initialValues={CURD.initialvalues}
      fields={PatientServiceFields(patient, services, serviceRequirment)}
      onSubmit={CURD.handleSubmit}
      loading={CURD.loading}
    />
  );
};

export default PatientServiceForm;