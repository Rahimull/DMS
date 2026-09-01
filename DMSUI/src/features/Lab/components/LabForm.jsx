import FormModal from "@/components/modal/FormModal";
import { LabFields } from "./LabFields";


const LabForm = ({ CURD }) => {
  

  return (
    <>
      <FormModal
        open={CURD.openModal}
        onClose={CURD.closeModal}
        title={CURD.editing ? "ویرایش لب" : "اضاف کردن لب"}
        onSubmit={CURD.handleSubmit}
        loading={CURD.loading}
        submitText={CURD.editing ? "اپدیت لب" : "اضاف کردن لب"}
        initialValues={CURD.editing}
        fields={LabFields}
      />
    </>
  );
};

export default LabForm;
