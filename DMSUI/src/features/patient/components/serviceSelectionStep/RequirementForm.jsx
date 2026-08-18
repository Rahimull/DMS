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
  // Load requirements of selected service
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
          Array.isArray(data) ? data : []
        );
      } catch (error) {
        console.error(
          "Load requirements error:",
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
  // Patient Services
  // =====================================================

  const patientServices = Array.isArray(
    formData?.patientServices
  )
    ? formData.patientServices
    : [];

  // =====================================================
  // Current Service
  // =====================================================

  const currentService = patientServices.find(
    (item) =>
      Number(item.serviceId) ===
      Number(service?.id)
  );

  // =====================================================
  // Requirements of Current Service
  // =====================================================

  const currentRequirements =
    Array.isArray(currentService?.requirements)
      ? currentService.requirements
      : [];

  // =====================================================
  // HANDLE CHANGE
  // =====================================================

  const handleChange = (
    serviceRequirementId,
    value
  ) => {
    console.log("================================");
    console.log("REQUIREMENT CHANGE");

    console.log("SERVICE ID:", service?.id);

    console.log(
      "REQUIREMENT ID:",
      serviceRequirementId
    );

    console.log("VALUE:", value);

    // ===================================================
    // Update current service requirements
    // ===================================================

    const updatedRequirements = [
      ...currentRequirements,
    ];

    const index =
      updatedRequirements.findIndex(
        (item) =>
          Number(item.serviceRequirementId) ===
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

    console.log(
      "UPDATED REQUIREMENTS:",
      updatedRequirements
    );

    // ===================================================
    // Update patientServices
    // ===================================================

    const updatedPatientServices =
      patientServices.map(
        (patientService) => {

          // ---------------------------------------------
          // اگر سرویس فعلی نیست
          // ---------------------------------------------

          if (
            Number(patientService.serviceId) !==
            Number(service?.id)
          ) {
            return patientService;
          }

          // ---------------------------------------------
          // سرویس فعلی
          // ---------------------------------------------

          return {
            ...patientService,

            requirements:
              updatedRequirements,
          };
        }
      );

    console.log(
      "UPDATED PATIENT SERVICES:",
      updatedPatientServices
    );

    // ===================================================
    // Update parent state
    // ===================================================

    updateSection(
      "patientServices",
      updatedPatientServices
    );

    console.log("================================");
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
  // No service
  // =====================================================

  if (!service?.id) {
    return null;
  }

  // =====================================================
  // Render
  // =====================================================

  return (
    <div className="space-y-6 p-1">

      {/* Service */}

      <div>
        <h3 className="text-lg font-bold">
          {service.name}
        </h3>

        <p className="text-sm text-slate-500">
          ضروریات خدمات
        </p>
      </div>

      {/* Requirements */}

      {requirements.length === 0 ? (
        <div className="rounded-lg border bg-slate-50 p-4 text-center text-sm text-slate-500">
          برای این خدمت ضرورتی ثبت نشده است.
        </div>
      ) : (
        requirements.map((item) => {

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
        })
      )}
    </div>
  );
}