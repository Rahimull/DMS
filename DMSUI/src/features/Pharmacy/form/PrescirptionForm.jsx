
import Modal from "@/components/modal/Modal";
import WizardForm from "@/components/form/WizrdForm";
import { Button } from "@/components/ui/button";

import { PrescriptionFields } from "../fields/PrescriptionFields";
import PrescriptionItemForm from "./PrescirptionItemForm";
import PrescriptionItemsTable from "../components/PrescriptionItemsTable";

export default function PrescriptionForm({
  CURD,
  patients = [],
  doctors = [],
  medicines = [],
}) {
  const formData = CURD.formData ?? {};

  const prescriptionItems = Array.isArray(
    formData.prescriptionItems
  )
    ? formData.prescriptionItems
    : [];

  // ==========================================
  // Main Prescription Change
  // ==========================================

  const handlePrescriptionChange = (e) => {
    const { name, value } = e.target;

    CURD.updateSection(name, value);
  };

  // ==========================================
  // Remove Prescription Item
  // ==========================================

  const handleRemoveItem = (index) => {
    const updatedItems = prescriptionItems.filter(
      (_, i) => i !== index
    );

    CURD.updateSection(
      "prescriptionItems",
      updatedItems
    );
  };

  // ==========================================
  // Validation
  // ==========================================

  const isValid =
    formData.patientId &&
    formData.staffId &&
    prescriptionItems.length > 0;

  // ==========================================
  // Submit
  // ==========================================

  const handleSubmit = async (shouldPrint = false) => {
    if (!isValid) {
      return;
    }

    await CURD.handleSubmit(
      formData,
      shouldPrint
    );
  };

  return (
    <Modal
      open={CURD.openModal}
      onClose={CURD.closeModal}
      title={
        CURD.editing
          ? "ویرایش نسخه"
          : "اضافه کردن نسخه"
      }
      footer={
        <div className="flex items-center justify-end gap-3">

          {/* Cancel */}
          <Button
            type="button"
            variant="outline"
            onClick={CURD.closeModal}
            disabled={CURD.loading}
          >
            انصراف
          </Button>

          {/* Save */}
          <Button
            type="button"
            onClick={() => handleSubmit(false)}
            disabled={
              CURD.loading || !isValid
            }
            className="min-w-[130px] gap-2"
          >
            {CURD.loading ? (
              <>
                <span
                  className="
                    h-4
                    w-4
                    animate-spin
                    rounded-full
                    border-2
                    border-white
                    border-t-transparent
                  "
                />

                در حال ذخیره...
              </>
            ) : (
              <>
                💾
                {CURD.editing
                  ? "آپدیت نسخه"
                  : "ثبت نسخه"}
              </>
            )}
          </Button>

          {/* Save & Print */}
          <Button
            type="button"
            onClick={() => handleSubmit(true)}
            disabled={
              CURD.loading || !isValid
            }
            className="
              min-w-[150px]
              gap-2
              bg-emerald-600
              hover:bg-emerald-700
            "
          >
            {CURD.loading ? (
              <>
                <span
                  className="
                    h-4
                    w-4
                    animate-spin
                    rounded-full
                    border-2
                    border-white
                    border-t-transparent
                  "
                />

                در حال ذخیره...
              </>
            ) : (
              <>
                🖨
                ثبت و پرنت
              </>
            )}
          </Button>

        </div>
      }
    >
      <div className="space-y-5">

        {/* ======================================
            Prescription Information
        ======================================= */}

        <div>
          <div className="mb-3">
            <h3 className="text-lg font-bold text-slate-800">
              معلومات نسخه
            </h3>

            <p className="text-sm text-slate-500">
              معلومات اصلی نسخه را وارد نمایید.
            </p>
          </div>

          <WizardForm
            title=""
            description=""
            columns={2}
            border={false}
            padding=""
            fields={PrescriptionFields(
              patients,
              doctors
            )}
            values={formData}
            onChange={handlePrescriptionChange}
          />
        </div>

        {/* Separator */}

        <hr className="border-slate-200" />

        {/* ======================================
            Prescription Items
        ======================================= */}

        <div>
          <div className="mb-3">
            <h3 className="text-lg font-bold text-slate-800">
              دواهای نسخه
            </h3>

            <p className="text-sm text-slate-500">
              دواهای مورد نیاز نسخه را اضافه نمایید.
            </p>
          </div>

          <PrescriptionItemForm
            formData={formData}
            updateSection={CURD.updateSection}
            medicines={medicines}
          />
        </div>

        {/* ======================================
            Selected Items
        ======================================= */}

        {prescriptionItems.length > 0 && (
          <>
            <hr className="border-slate-200" />

            <PrescriptionItemsTable
              items={prescriptionItems}
              onRemove={handleRemoveItem}
            />
          </>
        )}

      </div>
    </Modal>
  );
}

