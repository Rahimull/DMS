function StatusBox({ title, value, icon, color = "green" }) {
  const colors = {
    green: {
      bg: "bg-emerald-50",
      icon: "bg-emerald-100 text-emerald-600",
      value: "text-emerald-700",
    },

    red: {
      bg: "bg-red-50",
      icon: "bg-red-100 text-red-600",
      value: "text-red-700",
    },

    blue: {
      bg: "bg-blue-50",
      icon: "bg-blue-100 text-blue-600",
      value: "text-blue-700",
    },

    orange: {
      bg: "bg-orange-50",
      icon: "bg-orange-100 text-orange-600",
      value: "text-orange-700",
    },
  };

  const theme = colors[color] ?? colors.green;

  return (
    <div
      className="
        rounded-[10px]
        border
        bg-white
        p-5
        shadow-xl
        transition-all
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div
        className="
          flex
          items-center
          gap-4
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

        <div>
          <p
            className="
              text-sm
              text-slate-500
            "
          >
            {title}
          </p>

          <h4
            className={`
              mt-1
              text-xl
              font-bold
              ${theme.value}
            `}
          >
            {value}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default StatusBox;
