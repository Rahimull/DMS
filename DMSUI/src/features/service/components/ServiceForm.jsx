import FormModal from "@/components/modal/FormModal";
import { ServiceFields } from "./ServiceFields";



const ServiceForm = ({ CURD }) => {
  

  return (
    <>
      <FormModal
        open={CURD.openModal}
        onClose={CURD.closeModal}
        title={CURD.editing ? "ویرایش خدامات" : "اضاف کردن خدامات"}
        onSubmit={CURD.handleSubmit}
        loading={CURD.loading}
        submitText={CURD.editing ? "اپدیت خدامات" : "اضاف کردن خدامات"}
        initialValues={CURD.editing}
        fields={ServiceFields}
      />
    </>
  );
};

export default ServiceForm;
