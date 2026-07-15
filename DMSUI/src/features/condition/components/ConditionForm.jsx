import FormModal from "@/components/modal/FormModal";
import { ConditionFields } from "./ConditionFields";



const ConditionForm = ({ CURD }) => {
  

  return (
    <>
      <FormModal
        open={CURD.openModal}
        onClose={CURD.closeModal}
        title={CURD.editing ? "ویرایش عارضه" : "اضاف کردن عارضه"}
        onSubmit={CURD.handleSubmit}
        loading={CURD.loading}
        submitText={CURD.editing ? "اپدیت عارضه" : "اضاف کردن عارضه"}
        initialValues={CURD.editing}
        fields={ConditionFields}
      />
    </>
  );
};

export default ConditionForm;
