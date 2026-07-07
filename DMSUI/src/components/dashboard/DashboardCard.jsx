import { ReactNode } from "react";
import { cn } from "@/lib/utils";



export default function DashboardCard({
  title,
  subtitle,
  action,
  children,
  className,
}) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg",
        className
      )}
    >
      <header className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        {action}
      </header>

      <div className="p-6">{children}</div>
    </section>
  );
}