const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className = "",
  options = [],
  maxLength,
  autoFocus,
  onKeyDown,
  error,
  disabled = false,
}) => {
  const baseClass = `
    h-10 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40
    ${error ? "border-red-300" : "border-gray-300"}
    ${className}
  `;

  return (
    <div className="flex flex-col space-y-1">

      {label && type !== "checkbox" && (
        <label className="text-sm font-medium text-right">{label}</label>
      )}

      {type === "textarea" && (
        <textarea
          className={baseClass}
          name={name}
          value={value ?? ""}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
      )}

      {type === "select" && (
        <select
          className={baseClass}
          name={name}
          value={value ?? ""}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="" disabled>Select...</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {type === "checkbox" && (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name={name}
            checked={value || false}
            onChange={(e) =>
              onChange({ target: { name, value: e.target.checked } })
            }
          />
          <span>{label}</span>
        </label>
      )}

      {!["textarea", "select", "checkbox"].includes(type) && (
        <input
          className={baseClass}
          type={type}
          name={name}
          value={value ?? ""}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
        />
      )}

      {error && <span className="text-red-500 text-xs text-right">{error}</span>}
    </div>
  );
};

export default Input;