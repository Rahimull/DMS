import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TreatmentPlanApi from "../api/TreatmentPlanApi";
import TreatmentPlanPage from "./TreatmentPlanPage";

export default function EditTreatmentPlan() {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    load();
  }, [id]);

  const load = async () => {
    const res = await TreatmentPlanApi.getById(id);
    setInitialData(res.data);
  };

  if (!initialData) return <>Loading...</>;

  return <TreatmentPlanPage initialData={initialData} />;
}