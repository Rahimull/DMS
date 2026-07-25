import { useEffect, useState } from "react";

import RequirementRenderer from "./RequirementRenderer";
import ServiceRequirementMapApi from "../../api/ServiceRequirementMapApi";

export default function RequirementForm({ service, formData, updateSection }) {
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(false);

  const currentRequirements = formData.services?.currentRequirements ?? [];

  useEffect(() => {
    if (!service?.id) return;

    loadRequirements();
  }, [service?.id]);

  const loadRequirements = async () => {
    try {
      setLoading(true);

      const data = await ServiceRequirementMapApi.getByService(service.id);

      setRequirements(data);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (serviceRequirementId, value) => {
    const updated = [...currentRequirements];

    const index = updated.findIndex(
      (x) => x.serviceRequirementId === serviceRequirementId,
    );

    if (index === -1) {
      updated.push({
        serviceRequirementId,

        value,
      });
    } else {
      updated[index] = {
        ...updated[index],
        value,
      };
    }

    updateSection("services", {
      ...formData.services,

      currentRequirements: updated,
    });
  };

  if (loading) return <div>در حال بارگذاری ضروریات...</div>;

  return (
    <div
      className="
        p-1
        space-y-6
      "
    >
      <div>
        <h3 className="font-bold text-lg">{service.name}</h3>

        <p className="text-sm text-slate-500">ضروریات سرویس</p>
      </div>

      {requirements.map((item) => {
        const value =
          currentRequirements.find(
            (x) => x.serviceRequirementId === item.serviceRequirementId,
          )?.value ?? "";

        return (
          <RequirementRenderer
            key={item.id}
            requirement={item}
            value={value}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
}
