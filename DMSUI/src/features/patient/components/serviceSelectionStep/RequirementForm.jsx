import { useEffect, useState } from "react";

import RequirementRenderer from "./RequirementRenderer";
import ServiceRequirementMapApi from "../../api/ServiceRequirementMapApi";

export default function RequirementForm({
  service,
  formData,
  updateSection,
}) {
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(false);

  // =====================================================
  // این همان state قبلی است
  // =====================================================

  const currentRequirements =
    Array.isArray(formData?.currentRequirements)
      ? formData.currentRequirements
      : [];

  // =====================================================
  // Load requirements
  // =====================================================

  useEffect(() => {
    if (!service?.id) {
      setRequirements([]);
      return;
    }

    const loadRequirements = async () => {
      try {
        setLoading(true);

        const data =
          await ServiceRequirementMapApi.getByService(
            service.id
          );

        setRequirements(
          Array.isArray(data)
            ? data
            : []
        );
      } catch (error) {
        console.error(
          "LOAD REQUIREMENTS ERROR:",
          error
        );

        setRequirements([]);
      } finally {
        setLoading(false);
      }
    };

    loadRequirements();
  }, [service?.id]);

  // =====================================================
  // Change
  // =====================================================

  const handleChange = (
    serviceRequirementId,
    value
  ) => {
    console.log("CHANGE:", {
      serviceRequirementId,
      value,
    });

    const updatedRequirements = [
      ...currentRequirements,
    ];

    const index =
      updatedRequirements.findIndex(
        (item) =>
          Number(
            item.serviceRequirementId
          ) ===
          Number(serviceRequirementId)
      );

    if (index === -1) {
      updatedRequirements.push({
        serviceRequirementId:
          Number(serviceRequirementId),
        value,
      });
    } else {
      updatedRequirements[index] = {
        ...updatedRequirements[index],
        value,
      };
    }

    // -----------------------------------------
    // مهم: currentRequirements را update کن
    // -----------------------------------------

    updateSection(
      "currentRequirements",
      updatedRequirements
    );

    // -----------------------------------------
    // patientServices را هم update کن
    // -----------------------------------------

    const patientServices =
      Array.isArray(formData?.patientServices)
        ? formData.patientServices
        : [];

    const updatedServices =
      patientServices.map(
        (patientService) => {
          if (
            Number(
              patientService.serviceId
            ) !==
            Number(service?.id)
          ) {
            return patientService;
          }

          return {
            ...patientService,
            requirements:
              updatedRequirements,
          };
        }
      );

    updateSection(
      "patientServices",
      updatedServices
    );
  };

  // =====================================================
  // Loading
  // =====================================================

  if (loading) {
    return (
      <div className="py-4 text-center text-sm text-slate-500">
        در حال بارگذاری ضروریات...
      </div>
    );
  }

  // =====================================================
  // Render
  // =====================================================

  return (
    <div className="space-y-6 p-1">

      <div>
        <h3 className="text-lg font-bold">
          {service?.name}
        </h3>

        <p className="text-sm text-slate-500">
          ضروریات خدمات
        </p>
      </div>

      {requirements.map((item) => {

        const selectedRequirement =
          currentRequirements.find(
            (req) =>
              Number(
                req.serviceRequirementId
              ) ===
              Number(
                item.serviceRequirementId
              )
          );

        const value =
          selectedRequirement?.value ?? "";

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