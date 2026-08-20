
import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceCardList({
  services = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="
              h-[280px]
              animate-pulse
              rounded-2xl
              border
              border-slate-200
              bg-slate-100
            "
          />
        ))}
      </div>
    );
  }

  if (!services.length) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-dashed
          border-slate-300
          bg-white
          py-16
          text-center
        "
      >
        <p className="text-sm text-slate-500">
          هیچ خدامتی ثبت نشده است.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-5
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
      dir="rtl"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

