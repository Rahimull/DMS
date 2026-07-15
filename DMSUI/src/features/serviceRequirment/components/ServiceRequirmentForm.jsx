import FormModal from "@/components/modal/FormModal";
import { ServiceRequirmentFields } from "./ServiceRequirmentFields";



const ServiceRequirmentForm = ({ CURD }) => {
  

  return (
    <>
      <FormModal
        open={CURD.openModal}
        onClose={CURD.closeModal}
        title={CURD.editing ? "ویرایش نیازمندی خدامات" : "اضاف کردن نیازمندی خدامات"}
        onSubmit={CURD.handleSubmit}
        loading={CURD.loading}
        submitText={CURD.editing ? "اپدیت نیازمندی خدامات" : "اضاف کردن نیازمندی خدامات"}
        initialValues={CURD.editing}
        fields={ServiceRequirmentFields}
      />
    </>
  );
};

export default ServiceRequirmentForm;
