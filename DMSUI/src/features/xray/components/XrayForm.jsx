import FormModal from "@/components/modal/FormModal";
import { XrayFields } from "./XrayField";

const XrayForm = ({ CURD, patient }) => {
  return (
    <FormModal
      open={CURD.openModal}
      onClose={CURD.closeModal}
      title={
        CURD.editing
          ? "ویرایش فایل اکسرای"
          : "اضافه کردن فایل اکسرای"
      }
      initialValues={CURD.initialvalues}
      fields={XrayFields(patient)}
      onSubmit={CURD.handleSubmit}
      loading={CURD.loading}
    />
  );
};

export default XrayForm;