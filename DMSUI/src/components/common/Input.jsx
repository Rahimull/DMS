import React from "react";
import PersianDatePicker from "../datePicker/PersianDatePicker";

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
  rows,
  required = false,
  dateValue,
}) => {
  const baseClass = `
    w-full
    rounded-2xl
    border
    px-4
    py-3
    text-sm
    text-slate-800
    bg-white

    shadow-sm

    transition-all
    duration-200

    placeholder:text-slate-400

    hover:border-slate-400

    focus:outline-none
    focus:border-blue-500
    focus:ring-4
    focus:ring-blue-100

    disabled:bg-slate-100
    disabled:cursor-not-allowed
    disabled:opacity-70

    ${
      error
        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
        : "border-slate-300"
    }

    ${className}
  `;

  return (
    <div className="flex flex-col gap-2">
      {label && type !== "checkbox" && (
        <label
          className="
            flex
            items-center
            gap-1
            text-sm
            font-semibold
            text-slate-700
          "
        >
          {label}

          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Textarea */}

      {type === "textarea" && (
        <textarea
          name={name}
          value={value ?? ""}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          rows={rows || 5}
          className={`
            ${baseClass}
            min-h-[140px]
            resize-none
          `}
        />
      )}
            {/* Persian Date */}

      {type === "date" && (
        <PersianDatePicker
          value={dateValue || null}
          onChange={(date) =>
            onChange({
              target: {
                name,
                value: date,
              },
            })
          }
        />
      )}

      {/* Select */}

      {type === "select" && (
        <select
          name={name}
          value={value ?? ""}
          onChange={onChange}
          disabled={disabled}
          className={`${baseClass} h-12`}
        >
          <option value="">انتخاب نمایید</option>

          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {/* Checkbox */}

      {type === "checkbox" && (
        <label
          className="
            flex
            items-center
            gap-3

            rounded-xl
            border
            border-slate-200

            p-3

            transition

            hover:bg-slate-50

            cursor-pointer
          "
        >
          <input
            type="checkbox"
            name={name}
            checked={value || false}
            onChange={(e) =>
              onChange({
                target: {
                  name,
                  type: "checkbox",
                  checked: e.target.checked,
                },
              })
            }
            className="
              h-4
              w-4
              rounded
              border-slate-300
              text-blue-600
            "
          />

          <span className="text-sm text-slate-700">{label}</span>
        </label>
      )}

      {/* File Upload */}

      {type === "file" && (
        <div
          className="relative rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50
           p-8 text-center transition hover:bg-slate-100"
        >
          <input
            id={name}
            type="file"
            name={name}
            onChange={onChange}
            disabled={disabled}
            className="hidden"
          />

          <label
            htmlFor={name}
            className="flex cursor-pointer flex-col items-center gap-2"
          >
            <span className="text-4xl">📷</span>

            <span className="font-semibold text-slate-700">انتخاب فایل</span>

            <span className="text-xs text-slate-500">JPG, PNG, PDF</span>
          </label>
        </div>
      )}

      {/* Normal Input */}

      {!["textarea", "select", "checkbox", "file", "date"].includes(type) && (
        <input
          className={`${baseClass} h-12`}
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

      {/* Error */}

      {error && (
        <span
          className="
            text-xs
            font-medium
            text-red-600
          "
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
