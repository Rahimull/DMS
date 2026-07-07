import { Plus, RefreshCcw, Search } from "lucide-react";



export default function PatientToolbar({
  search,
  onSearchChange,
  onAdd,
  onRefresh,
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      {/* Search */}
      <div className="relative w-full md:w-1/2">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="جستجوی بیمار..."
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-white
            py-3
            pl-10
            pr-4
            text-sm
            outline-none
            focus:border-blue-400
            focus:ring-2
            focus:ring-blue-100
            transition
          "
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">

        <button
          onClick={onRefresh}
          className="
            flex items-center gap-2 rounded-xl border
            border-slate-200 bg-white px-4 py-2
            text-sm text-slate-600
            hover:bg-slate-50 transition
          "
        >
          <RefreshCcw size={16} />
          تازه‌سازی
        </button>

        <button
          onClick={onAdd}
          className="
            flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2
            text-sm text-white hover:bg-blue-700 transition
          "
        >
          <Plus size={16} />
          ثبت بیمار
        </button>

      </div>
    </div>
  );
}