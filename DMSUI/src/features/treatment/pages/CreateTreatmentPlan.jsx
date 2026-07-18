import TreatmentPlanForm from "../components/TreatmentPlanForm";
import useTreatmentPlan from "../hooks/useTreatmentPlan";

export default function CreateTreatmentPlan() {
  const treatment = useTreatmentPlan();

  return <TreatmentPlanForm treatment={treatment} />;
}