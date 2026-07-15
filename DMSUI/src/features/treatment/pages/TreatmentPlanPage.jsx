import { useEffect, useState } from "react";

import TreatmentHeader from "../components/TreatmentHeader";
import ConditionList from "../components/ConditionList";
import AddConditionModal from "../components/AddConditionModal";

import ServiceTable from "../components/ServiceTable";
import AddServiceModal from "../components/AddServiceModal";

import PaymentSummary from "../components/PaymentSummary";
import NotesCard from "../components/NotesCard";

import { createCrudApi } from "@/api/crudApi";

const patientApi = createCrudApi("/Patient");
const staffApi = createCrudApi("/Staff");
const treatmentApi = createCrudApi("/TreatmentPlan");

const TreatmentPlanPage = () => {
  const [form, setForm] = useState({
    patientId: null,

    staffId: null,

    startDate: "",

    endDate: "",

    status: "Draft",

    round: 1,

    installments: 1,

    discount: 0,

    totalFee: 0,

    conditions: [],

    services: [],

    notes: "",

    notification: "",
  });

  const [patients, setPatients] = useState([]);

  const [doctors, setDoctors] = useState([]);

  const [openCondition, setOpenCondition] = useState(false);

  const [openService, setOpenService] = useState(false);

  const [editingCondition, setEditingCondition] = useState(null);

  useEffect(() => {
    loadPatients();

    loadDoctors();
  }, []);

  const loadPatients = async () => {
    const data = await patientApi.lookup({
      value: "id",

      label: (x) => `${x.firstName} ${x.lastName}`,
    });

    setPatients(data);
  };

  const loadDoctors = async () => {
    const data = await staffApi.lookup({
      value: "id",

      label: (x) => `${x.firstName} ${x.lastName}`,
    });

    setDoctors(data);
  };

  const updateForm = (data) => {
    setForm((prev) => ({
      ...prev,

      ...data,
    }));
  };

  // Add Diagnosis

  const addCondition = (condition) => {
    setForm((prev) => ({
      ...prev,

      conditions: [
        ...prev.conditions,

        {
          ...condition,
          id: Date.now(),
        },
      ],
    }));

    setOpenCondition(false);
  };

  const deleteCondition = (id) => {
    setForm((prev) => ({
      ...prev,

      conditions: prev.conditions.filter((x) => x.id !== id),
    }));
  };

  // Add Service

  const addService = (service) => {
    setForm((prev) => ({
      ...prev,

      services: [
        ...prev.services,

        {
          ...service,
          id: Date.now(),
          total: Number(service.fee) * Number(service.quantity || 1),
        },
      ],
    }));

    setOpenService(false);
  };

  const saveTreatment = async () => {
    const payload = {
      patientId: form.patientId,

      staffId: form.staffId,

      startDate: form.startDate,

      endDate: form.endDate,

      status: form.status,

      round: form.round,

      installments: form.installments,

      discount: form.discount,

      notes: form.notes,

      notification: form.notification,

      conditions: form.conditions,

      services: form.services,
    };

    console.log("TREATMENT PAYLOAD", payload);

    // await treatmentApi.create(payload)
  };

  return (
    <div className="space-y-6 p-6">
      <TreatmentHeader
        form={form}
        setForm={setForm}
        patientOptions={patients}
        staffOptions={doctors}
      />

      <ConditionList
        conditions={form.conditions}
        onAdd={() => setOpenCondition(true)}
        onEdit={(item) => {
          setEditingCondition(item);

          setOpenCondition(true);
        }}
        onDelete={deleteCondition}
      />

      <ServiceTable
        services={form.services}
        onAdd={() => setOpenService(true)}
        onChange={(items) =>
          updateForm({
            services: items,
          })
        }
      />

      <PaymentSummary
        services={form.services}
        discount={form.discount}
        installments={form.installments}
        onChange={updateForm}
      />

      <NotesCard
        notes={form.notes}
        notification={form.notification}
        endDate={form.endDate}
        onChange={updateForm}
      />

      <div className="flex justify-end gap-3">
        <button
          className="
px-5
py-2
rounded-md
bg-primary
text-white
"
          onClick={saveTreatment}
        >
          Save Treatment
        </button>

        <button
          className="
px-5
py-2
rounded-md
border
"
        >
          Cancel
        </button>
      </div>

      <AddConditionModal
        open={openCondition}
        onClose={() => {
          setOpenCondition(false);

          setEditingCondition(null);
        }}
        patientId={form.patientId}
        editing={editingCondition}
        onSave={addCondition}
      />

      <AddServiceModal
        open={openService}
        onClose={() => setOpenService(false)}
        onSave={addService}
      />
    </div>
  );
};

export default TreatmentPlanPage;
