import FormModal from "@/components/modal/FormModal";
import { InventoryFields } from "../fields/InventoryFields";

const InventoryForm = ({ CURD }) => {
  return (
    <FormModal
      discription=""
      open={CURD.openModal}
      onClose={CURD.closeModal}
      title={
        CURD.editing
          ? "ویرایش دوا"
          : "اضافه کردن دوا"
      }
      onSubmit={CURD.handleSubmit}
      loading={CURD.loading}
      submitText={
        CURD.editing
          ? "آپدیت دوا"
          : "اضافه کردن دوا"
      }
      initialValues={
        CURD.editing ?? CURD.initialvalues ?? {}
      }
      fields={InventoryFields}
    />
  );
};

export default InventoryForm;