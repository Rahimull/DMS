import DentalChart from "./DentalChart";

export default function RequirementRenderer({ requirement, value, onChange }) {
  const handleChange = (val) => {
    onChange(requirement.serviceRequirementId, val);
  };

  switch (requirement.serviceRequirementId) {
    // Teeth Selection
    case 1:
      return <DentalChart 
        value={value} 
        onChange={(teeth)=> 
            onChange(requirement.serviceRequirementId, teeth)
        } 

    />;

    // Description
    case 2:
      
      return (
        <textarea
          label="توضیحات"
          name={`req_${requirement.id}`}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      );

    // Procedure Type
    case 3:
      return (
        <select
          label="نوع عملیات"
          name={`req_${requirement.id}`}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          options={[
            {
              value: "Single",
              label: "Single",
            },
            {
              value: "Multiple",
              label: "Multiple",
            },
          ]}
        />
      );

    // Materials
    case 4:
      return (
        <input
          label="مواد استفاده شده"
          name={`req_${requirement.id}`}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      );

    // Bleaching Steps
    case 5:
      return (
        <input
          label="Bleaching Steps"
          name={`req_${requirement.id}`}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      );

    // Gum Selection
    case 7:
      return (
        <select
          label="انتخاب لثه"
          name={`req_${requirement.id}`}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          options={[
            {
              value: "Upper",
              label: "فک بالا",
            },
            {
              value: "Lower",
              label: "فک پایین",
            },
          ]}
        />
      );

    // Affected Area
    case 9:
      return (
        <input
          label="محل آسیب"
          name={`req_${requirement.id}`}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      );

    default:
      return null;
  }
}
