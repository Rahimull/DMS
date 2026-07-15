import TreatmentHeader from "../components/TreatmentHeader";
import ConditionList from "../components/ConditionList";
import AddConditionModal from "../components/AddConditionModal";

import ServiceTable from "../components/ServiceTable";
import AddServiceModal from "../components/AddServiceModal";

import PaymentSummary from "../components/PaymentSummary";
import NotesCard from "../components/NotesCard";
import useTreatmentPlan from "@/hooks/useTreatmentPlan";



const TreatmentPlanPage = () => {
  const treatment = useTreatmentPlan();

  return (
    <div dir="rtl" className="space-y-6 p-6 text-right">
      <TreatmentHeader
        form={treatment.form}
        updateForm={treatment.updateForm}
        patientOptions={treatment.patients}
        staffOptions={treatment.doctors}
      />

      <ConditionList
        conditions={treatment.form.conditions}
        onAdd={() => treatment.setOpenCondition(true)}
        onEdit={treatment.editCondition}
        onDelete={treatment.deleteCondition}
      />

      <ServiceTable
        services={treatment.form.services}
        onAdd={() => treatment.setOpenService(true)}
        onChange={(items) =>
          treatment.updateForm({
            services: items,
          })
        }
      />

      <PaymentSummary
        services={treatment.form.services}
        discount={treatment.form.discount}
        installments={treatment.form.installments}
        onChange={treatment.updateForm}
      />

      <NotesCard
        notes={treatment.form.notes}
        notification={treatment.form.notification}
        endDate={treatment.form.endDate}
        onChange={treatment.updateForm}
      />

      <div className="flex justify-start gap-3">
        <button
          className="
px-5
py-2
rounded-md
bg-primary
text-white
"
          onClick={treatment.save}
        >
          ذخیره پلان تداوی
        </button>

        <button
          className="
px-5
py-2
rounded-md
border
"
        >
          انصراف
        </button>
      </div>

      <AddConditionModal
        open={treatment.openCondition}
        onClose={treatment.closeCondition}
        patientId={treatment.form.patientId}
        editing={treatment.editingCondition}
        onSave={treatment.addCondition}
      />

      <AddServiceModal
        open={treatment.openService}
        onClose={treatment.closeService}
        onSave={treatment.addService}
      />
    </div>
  );
};

export default TreatmentPlanPage;
