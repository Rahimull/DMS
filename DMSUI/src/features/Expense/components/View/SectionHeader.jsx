
const SectionHeader = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="mb-6 flex items-center gap-4">

      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/20">

        <Icon size={21} />

        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />

      </div>


      <div>

        <h2 className="text-lg font-black text-slate-800">
          {title}
        </h2>


        {description && (
          <p className="mt-1 text-sm text-slate-400">
            {description}
          </p>
        )}

      </div>

    </div>
  );
};

export default SectionHeader;

