import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import Input from "../common/Input";

const WirzadForm = ({
  title = "ثبت معلومات",
  description = "لطفاً معلومات مورد نیاز را تکمیل نمایید",
  fields = [],
  values = {},
  errors = {},
  serverErrors = {},
  onChange,
  columns = 2,
  border = true,
  padding = "p-8",
  children,
}) => {
  return (
    <form
      dir="rtl"
      className={`rounded-3xl bg-whie ${border ? "boder border-slate-200 shadow-sm" : ""} ${padding}`}
    >
      {/* Header */}

      <div
        className="
          mb-8
          border-b
          border-slate-200
          pb-5
        "
      >
        <h2
          className="
            text-xl
            font-bold
            text-slate-800
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-slate-500
          "
        >
          {description}
        </p>
      </div>

      {/* General Error */}

      {serverErrors.general && (
        <div
          className="
            mb-6
            rounded-2xl
            border
            border-red-200
            bg-red-50
            p-4
            text-sm
            text-red-600
          "
        >
          {serverErrors.general}
        </div>
      )}

      {/* Fields */}

      <div
        className={`
            grid
          grid-cols-1
          gap-3
          ${columns === 2 ? "md:grid-cols-2" : ""}
          `}
      >
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.col === 2 ? "md:col-span-2" : ""}
          >
            <Input
              label={field.label}
              required={field.required}
              name={field.name}
              type={field.type || "text"}
              value={values[field.name] ?? ""}
              dateValue={values[field.name] ?? null}
              placeholder={field.placeholder}
              autoFocus={field.autoFocus}
              maxLength={field.maxLength}
              onKeyDown={field.onKeyDown}
              disabled={field.disabled}
              rows={field.rows}
              options={field.options || []}
              onChange={onChange}
              error={serverErrors[field.name] || errors[field.name]}
            />
          </div>
        ))}
      </div>
      <div className="mt-6">{children}</div>

      {/* Actions */}
    </form>
  );
};

export default WirzadForm;
