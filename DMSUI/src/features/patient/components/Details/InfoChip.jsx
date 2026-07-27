export default function InfoChip({ icon, text }) {
  return (
    <div
      className="flex items-center gap-2 rounded bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
    >
      <span className="text-blue-600">{icon}</span>

      {text}
    </div>
  );
}