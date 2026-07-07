import { patients } from "@/features/dashboard/data/patients";
import DashboardCard from "./DashboardCard";
import { Eye, Pencil, Phone,  Trash2 } from "lucide-react";

export default function RecentPatients() {
  return (
    <DashboardCard
      title="بیماران جدید"
      subtitle="آخرین بیماران ثبت شده"
    >
      <div className="space-y-3">

        {patients.map((patient) => (

          <div
            key={patient.id}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 hover:bg-slate-50 transition"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">

                {patient.firstName.charAt(0)}

              </div>

              <div>

                <h4 className="font-semibold">

                  {patient.firstName} {patient.lastName}

                </h4>

                <div className="flex items-center gap-2 text-sm text-slate-500">

                  <Phone size={15} />

                  {patient.phone}

                </div>

              </div>

            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                patient.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {patient.status}
            </span>

            <div className="flex gap-2">

              <button className="rounded-lg p-2 hover:bg-slate-100">

                <Eye size={18} />

              </button>

              <button className="rounded-lg p-2 hover:bg-blue-100 text-blue-600">

                <Pencil size={18} />

              </button>

              <button className="rounded-lg p-2 hover:bg-red-100 text-red-600">

                <Trash2 size={18} />

              </button>

            </div>

          </div>

        ))}

      </div>
    </DashboardCard>
  );
}