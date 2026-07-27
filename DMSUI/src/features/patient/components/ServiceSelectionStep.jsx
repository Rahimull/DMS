import { useEffect, useState } from "react";
import { CalendarClock, ClipboardList, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import WirzadForm from "@/components/form/WizrdForm";

import ServiceApi from "@/features/service/api/ServiceApi";
import StaffApi from "@/features/staff/api/StaffApi";

import RequirementForm from "./serviceSelectionStep/RequirementForm";
import SelectedServicesTable from "./serviceSelectionStep/SelectedServicesTable";
import { AppointmentFields } from "./serviceSelectionStep/AppointmentFields";

export default function ServiceSelectionStep({ formData, updateSection,updateValue, errors }) {
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      const serviceList = await ServiceApi.lookup({
        mapper: (item) => ({
          value: item.id,
          label: item.serviceName,
          fee: item.fee,
          description: item.description,
          data: item,
        }),
      });

      const doctorList = await StaffApi.lookup({
        mapper: (item) => ({
          value: item.id,
          label: `${item.firstName} ${item.lastName}`,
          data: item,
        }),
      });

      setServices(serviceList);
      setDoctors(doctorList);
    } finally {
      setLoading(false);
    }
  };

  const appointment = formData.services?.appointment ?? {};

  const selectedServices = formData.services?.patientServices ?? [];

  const currentRequirements = formData.services?.currentRequirements ?? [];

  const fields = AppointmentFields(services, doctors);

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;

    updateSection("services", {
      ...formData.services,

      appointment: {
        ...appointment,
        [name]: value,
      },
    });
  };

  const activeService = services.find(
    (x) => x.value === Number(appointment.serviceId),
  );


  // اضافه کردن خدمت انتخاب شده

  const handleAddService = () => {
    if (!activeService) return;

    const exists = selectedServices.some(
      (x) => x.serviceId === activeService.value,
    );

    if (exists) return;

    const newService = {
      serviceId: activeService.value,

      serviceName: activeService.label,

      description: activeService.description,

      fee: activeService.fee,

      requirements: currentRequirements,
    };

    updateSection("services", {
      ...formData.services,

      patientServices: [...selectedServices, newService],
      appointment: {
        ...appointment,
        serviceFee: newService.fee,
      },

      currentRequirements: [],
    });
  };

  const handleRemoveService = (id) => {
    updateSection("services", {
      ...formData.services,

      patientServices: selectedServices.filter((x) => x.serviceId !== id),
    });
  };

  return (
    <div className="space-y-1">
      {/* Appointment */}

      <div
       
      >

        {loading ? (
          <div className="py-10 text-center">در حال بارگذاری...</div>
        ) : (
          <WirzadForm
            title=""
            description=""
            border={false}
            padding="p-0"
            columns={2}
            fields={fields}
            errors={errors}
            values={appointment}
            onChange={handleAppointmentChange}
          />
        )}
      </div>

      {/* Requirements */}

      {activeService && (
        <div
          className="
              rounded-3xl
              border
              bg-white
              p-6
              shadow-sm
            "
        >
          <RequirementForm
            service={activeService.data}
            formData={formData}
            updateSection={updateSection}
          />

          <div className="mt-6 flex justify-end">
            <Button type="button" onClick={handleAddService}>
              <Plus size={18} />
              اضافه کردن خدمت
            </Button>
          </div>
        </div>
      )}

      {/* Selected Services */}

      <div
        className="
          rounded-3xl
          border
          bg-white
          p-6
          shadow-sm
        "
      >
        <div className="mb-5 flex items-center gap-3">
          <ClipboardList className="text-indigo-600" />

          <div>
            <h3 className="font-bold">خدمات ثبت شده</h3>

            <p className="text-sm text-slate-500">خلاصه خدمات بیمار</p>
          </div>
        </div>

        <SelectedServicesTable
          services={selectedServices}
          onRemove={handleRemoveService}
        />
      </div>
    </div>
  );
}
