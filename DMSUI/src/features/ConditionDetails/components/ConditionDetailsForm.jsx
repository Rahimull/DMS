import FormModal from "@/components/modal/FormModal";
import { ConditionDetailsFields } from "./ConditionDetailsField";

const ConditionDetailsForm = ({ CURD, patient, conditions }) => {
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
      fields={ConditionDetailsFields(patient, conditions)}
      onSubmit={CURD.handleSubmit}
      loading={CURD.loading}
    />
  );
};

export default ConditionDetailsForm;