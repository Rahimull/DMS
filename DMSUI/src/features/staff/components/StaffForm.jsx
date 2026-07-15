import FormModal from "@/components/modal/FormModal";
import { StaffFields } from "./StaffFields";


const StaffForm = ({ CURD }) => {
  

  return (
    <>
      <FormModal
        open={CURD.openModal}
        onClose={CURD.closeModal}
        title={CURD.editing ? "ویرایش کارمند" : "اضاف کردن کارمند"}
        onSubmit={CURD.handleSubmit}
        loading={CURD.loading}
        submitText={CURD.editing ? "اپدیت کارمند" : "اضاف کردن کارمند"}
        initialValues={CURD.editing}
        fields={StaffFields}
      />
    </>
  );
};

export default StaffForm;
