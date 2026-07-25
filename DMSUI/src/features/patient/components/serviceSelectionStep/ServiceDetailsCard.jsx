import ServiceRequirementInput from "./ServiceRequirementInput";

export default function ServiceDetailsCard({ service, onRequirementChange }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between border-b pb-3">
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            {service.serviceName}
          </h3>

          <p className="text-sm text-slate-500">{service.description}</p>
        </div>

        <div className="rounded-xl bg-blue-50 px-4 py-2">
          <span className="text-sm text-slate-500">قیمت</span>

          <div className="font-bold text-blue-600">{service.fee} افغانی</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {service.requirements.map((requirement) => (
          <ServiceRequirementInput
            key={requirement.requirementId}
            serviceId={service.serviceId}
            requirement={requirement}
            onChange={onRequirementChange}
          />
        ))}
      </div>
    </div>
  );
}
