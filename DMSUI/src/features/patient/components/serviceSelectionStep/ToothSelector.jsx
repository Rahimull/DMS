export default function ToothSelector({
  value,

  onChange,
}) {
  const teeth = [
    18, 17, 16, 15, 14, 13, 12, 11,

    21, 22, 23, 24, 25, 26, 27, 28,

    48, 47, 46, 45, 44, 43, 42, 41,

    31, 32, 33, 34, 35, 36, 37, 38,
  ];

  return (
    <div>
      <label className="font-medium">انتخاب دندان</label>

      <div className="grid grid-cols-8 gap-2 mt-3">
        {teeth.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => onChange(t)}
            className={`
                            h-10 rounded-lg border
                            ${
                              value == t ? "bg-blue-600 text-white" : "bg-white"
                            }
                        `}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
