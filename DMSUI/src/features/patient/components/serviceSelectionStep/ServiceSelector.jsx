import ServiceCard from "./ServiceCard";

export default function ServiceSelector({
  services,
  formData,
  updateSection,
  activeServiceId,
  setActiveServiceId,
}) {
  const selectedServices = formData.services?.patientServices ?? [];

  const handleCheck = (service, checked) => {
    let updated = [...selectedServices];

    if (checked) {
      // جلوگیری از ثبت دوباره
      if (updated.some((x) => x.serviceId === service.id)) {
        setActiveServiceId(service.id);
        return;
      }

      updated.push({
        serviceId: service.id,
        serviceName: service.serviceName,
        description: service.description,
        fee: service.fee,

        values: [],
      });

      setActiveServiceId(service.id);
    } else {
      updated = updated.filter((x) => x.serviceId !== service.id);

      if (activeServiceId === service.id) {
        setActiveServiceId(updated.length ? updated[0].serviceId : null);
      }
    }

    updateSection("services", {
      ...formData.services,
      patientServices: updated,
    });
  };

  return (
    <div
      className="
        grid
        gap-4
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          checked={selectedServices.some((x) => x.serviceId === service.id)}
          active={activeServiceId === service.id}
          onCheck={(checked) => handleCheck(service, checked)}
          onSelect={() => setActiveServiceId(service.id)}
        />
      ))}
    </div>
  );
}
