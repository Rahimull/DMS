import FormModal from "@/components/modal/FormModal";
import { ExpenseDetailsFields } from "./ExpenseDetailsFields";



const ExpenseDetailsForm = ({ CURD, expense=[], staff=[] }) => {



  return (
    <>
      <FormModal
        open={CURD.openModal}
        onClose={CURD.closeModal}
        title={CURD.editing ? "ویرایش مصرف" : "اضاف کردن مصرف"}
        onSubmit={CURD.handleSubmit}
        loading={CURD.loading}
        submitText={CURD.editing ? "اپدیت مصرف" : "اضاف کردن مصرف"}
        initialValues={CURD.editing}
        fields={ExpenseDetailsFields(expense, staff)}
      />
    </>
  );
};

export default ExpenseDetailsForm;
