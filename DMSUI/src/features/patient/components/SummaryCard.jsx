function SummaryCard({ title, value, icon, color = "blue" }) {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      icon: "bg-blue-100 text-blue-600",
      text: "text-blue-700",
    },

    green: {
      bg: "bg-emerald-50",
      icon: "bg-emerald-100 text-emerald-600",
      text: "text-emerald-700",
    },

    red: {
      bg: "bg-red-50",
      icon: "bg-red-100 text-red-600",
      text: "text-red-700",
    },

    purple: {
      bg: "bg-purple-50",
      icon: "bg-purple-100 text-purple-600",
      text: "text-purple-700",
    },
  };

  const theme = colors[color] ?? colors.blue;

  return (
    <div
      className={`
        rounded-[10px]
        border
        bg-white
        p-2
        shadow-xl
        transition-all
        hover:-translate-y-1
        hover:shadow-md
      `}
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <div
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            ${theme.icon}
          `}
        >
          {icon}
        </div>
      </div>

      <div className="m-5">
        <p
          className="
            text-sm
            text-slate-500
          "
        >
          {title}
        </p>

        <h3
          className={`
            
            text-xl
            font-bold
            ${theme.text}
          `}
        >
          {value}
        </h3>
      </div>
    </div>
  );
}

export default SummaryCard;
