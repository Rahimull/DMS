import { SmilePlus } from "lucide-react";

export default function DentalChart({ value = [], onChange }) {
  const upperLeft = [18, 17, 16, 15, 14, 13, 12, 11];
  const upperRight = [21, 22, 23, 24, 25, 26, 27, 28];

  const lowerLeft = [48, 47, 46, 45, 44, 43, 42, 41];
  const lowerRight = [31, 32, 33, 34, 35, 36, 37, 38];

  const selected = Array.isArray(value) ? value : [];

  const toggle = (tooth) => {
    const updated = selected.includes(tooth)
      ? selected.filter((x) => x !== tooth)
      : [...selected, tooth];

    onChange(updated);
  };

  const Tooth = ({ number }) => (
    <button
      type="button"
      onClick={() => toggle(number)}
      className={`
        relative
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-md
        border
        text-xs
        font-semibold
        transition


        ${
          selected.includes(number)
            ? `
          border-blue-600
          bg-blue-600
          text-white
          shadow
          `
            : `
          bg-white
          hover:bg-blue-50
          `
        }

      `}
    >
      {number}
    </button>
  );

  const Row = ({ left, right }) => (
    <div
      className="
        flex
        justify-center
        gap-1
      "
    >
      {left.map((t) => (
        <Tooth key={t} number={t} />
      ))}

      <div
        className="
          mx-2
          border-l
        "
      />

      {right.map((t) => (
        <Tooth key={t} number={t} />
      ))}
    </div>
  );

  return (
    <div
      className="
        rounded-xl
        border
        bg-white
        p-4
      "
    >
      <div
        className="
          mb-3
          flex
          items-center
          gap-2
        "
      >
        <SmilePlus size={20} className="text-blue-600" />

        <span className="font-bold">Dental Chart</span>
      </div>

      <div className="space-y-3">
        <div
          className="
            text-center
            text-xs
            text-slate-500
          "
        >
          فک بالا
        </div>

        <Row left={upperLeft} right={upperRight} />

        <div
          className="
            my-3
            border-t
          "
        />

        <div
          className="
            text-center
            text-xs
            text-slate-500
          "
        >
          فک پایین
        </div>

        <Row left={lowerLeft} right={lowerRight} />
      </div>

      <div
        className="
          mt-4
          rounded-lg
          bg-blue-50
          px-3
          py-2
          text-xs
        "
      >
        انتخاب شده:
        <span
          className="
            mr-2
            font-bold
            text-blue-700
          "
        >
          {selected.length ? selected.join(", ") : "-"}
        </span>
      </div>
    </div>
  );
}
