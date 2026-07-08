import FormModal from "@/components/modal/FormModal";
import { clinicFields } from "./ClinicFields";


const ClinicForm = ({ CURD }) => {
  return (
    <>
      <FormModal
        open={CURD.openModal}
        onClose={CURD.closeModal}
        title={CURD.editing ? "ویرایش کلینیک" : "اضاف کردن کلینیک"}
        onSubmit={CURD.handleSubmit}
        loading={CURD.loading}
        submitText={CURD.editing ? "اپدیت کلینیک" : "اضاف کردن کلینیک"}
        initialValues={CURD.editing}
        fields={clinicFields}
      />
    </>
  );
};

export default ClinicForm;
