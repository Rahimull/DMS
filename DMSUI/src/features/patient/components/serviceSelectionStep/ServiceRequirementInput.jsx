import Input from "@/components/common/Input";

export default function ServiceRequirementInput({
  serviceId,
  requirement,
  onChange,
}) {
  const handleChange = (e) => {
    onChange(
      serviceId,
      requirement.requirementId,
      e.target.value
    );
  };

  return (
    <Input
      label={requirement.requirementName}
      value={requirement.value ?? ""}
      onChange={handleChange}
    />
  );
}