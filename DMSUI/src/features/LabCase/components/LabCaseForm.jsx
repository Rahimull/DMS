import FormModal from "@/components/modal/FormModal";
import { LabCaseFields } from "./LabCaseFields";


const LabCaseForm = ({ CURD, patients=[], doctors=[], labs=[] }) => {

  return (
    <>
      <FormModal
        open={CURD.openModal}
        onClose={CURD.closeModal}
        title={CURD.editing ? "ویرایش کیس لب" : "اضاف کردن کیس لب"}
        onSubmit={CURD.handleSubmit}
        loading={CURD.loading}
        submitText={CURD.editing ? "اپدیت کیس لب" : "اضاف کردن کیس لب"}
        initialValues={CURD.editing}
        fields={LabCaseFields(patients, doctors, labs)}
      />
    </>
  );
};

export default LabCaseForm;
