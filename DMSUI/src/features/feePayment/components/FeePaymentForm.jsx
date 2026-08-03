import FormModal from "@/components/modal/FormModal";
import { FeePaymentFields } from "./FeePaymentFields";

const FeePaymentForm = ({ CURD }) => {
  console.log("patient information: ", CURD);
  const totalFee = CURD.editing?.totalFee ?? 0;
  const dueAmount = CURD.editing?.dueAmount ?? 0;

  return (
    <>
      <FormModal
        open={CURD.openModal}
        onClose={CURD.closeModal}
        title={CURD.editing ? "ویرایش پرداخت" : "اضافه کردن پرداخت"}
        discription={
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-blue-50 p-4 border border-blue-100">
              <p className="text-xs text-slate-500">مجموع فیس</p>

              <p className="mt-1 text-xl font-bold text-blue-700">
                {totalFee.toLocaleString("fa-AF")} افغانی
              </p>
            </div>

            <div className="rounded-xl bg-red-50 p-4 border border-red-100">
              <p className="text-xs text-slate-500">باقی‌مانده</p>

              <p className="mt-1 text-xl font-bold text-red-600">
                {dueAmount.toLocaleString("fa-AF")} افغانی
              </p>
            </div>
          </div>
        }
        initialValues={CURD.initialvalues}
        fields={FeePaymentFields}
        onSubmit={CURD.handleSubmit}
        loading={CURD.loading}
      />
    </>
  );
};

export default FeePaymentForm;
