export default function SummaryCard({ title, value, icon, color }) {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      ring: "ring-blue-100",
    },

    red: {
      bg: "bg-red-50",
      text: "text-red-600",
      ring: "ring-red-100",
    },

    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      ring: "ring-green-100",
    },

    emerald: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      ring: "ring-emerald-100",
    },
  };

  const style = colors[color];

  return (
    <Card
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <CardContent
        className="
          relative
          p-6
        "
      >
        {/* Background Effect */}

        <div
          className={`
            absolute
            -right-8
            -top-8
            h-24
            w-24
            rounded-full
            opacity-50
            blur-2xl
            ${style.bg}
          `}
        />

        <div
          className="
            relative
            flex
            items-center
            justify-between
          "
        >
          <div>
            <p
              className="
                text-sm
                font-medium
                text-slate-500
              "
            >
              {title}
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                tracking-tight
                text-slate-900
              "
            >
              {value}
            </h2>
          </div>

          <div
            className={`
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              ring-8
              ${style.bg}
              ${style.text}
              ${style.ring}
              transition
              group-hover:scale-110
            `}
          >
            {React.cloneElement(icon, {
              size: 28,
            })}
          </div>
        </div>

        {/* Bottom Line */}

        <div
          className="
            mt-6
            h-1
            w-full
            rounded-full
            bg-slate-100
          "
        >
          <div
            className={`
              h-full
              w-2/3
              rounded-full
              ${style.bg}
            `}
          />
        </div>
      </CardContent>
    </Card>
  );
}
