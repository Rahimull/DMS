import FormModal from "@/components/modal/FormModal";
import { ExpenseFields } from "./ExpenseFields";


const ExpenseForm = ({ CURD, patients=[], doctors=[], labs=[], services=[] }) => {

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
        fields={ExpenseFields(patients, doctors, labs, services)}
      />
    </>
  );
};

export default ExpenseForm;
