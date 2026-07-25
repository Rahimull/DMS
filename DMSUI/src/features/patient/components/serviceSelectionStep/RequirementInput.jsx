export default function RequirementInput({ requirement, value, onChange }) {
  const name = requirement.requirmentName;

  /*
        TextArea
        ----------------
        Description
    */

  if (name === "Description") {
    return (
      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    p-3
                    outline-none
                    focus:border-blue-500
                "
        placeholder={`وارد کردن ${name}`}
      />
    );
  }

  /*
        Select
        ----------------
        Procedure Type
    */

  if (name === "Procedure Type") {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    p-3
                    outline-none
                    focus:border-blue-500
                "
      >
        <option value="">انتخاب کنید</option>

        <option value="Normal">Normal</option>

        <option value="Surgical">Surgical</option>

        <option value="Emergency">Emergency</option>
      </select>
    );
  }

  /*
        Default Text Input
    */

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
                w-full
                rounded-xl
                border
                border-slate-300
                p-3
                outline-none
                focus:border-blue-500
            "
      placeholder={`وارد کردن ${name}`}
    />
  );
}
