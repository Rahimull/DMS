export default function DentalLogo({ size = "md" }) {
  const sizes = {
    sm: {
      wrapper: "h-14 w-14",
      icon: "h-11 w-11",
    },
    md: {
      wrapper: "h-20 w-20",
      icon: "h-16 w-16",
    },
    lg: {
      wrapper: "h-28 w-28",
      icon: "h-24 w-24",
    },
  };

  const current = sizes[size] || sizes.md;

  return (
    <div
      className={`flex ${current.wrapper} items-center justify-center rounded-full bg-blue-50 shadow-2xl`}
    >
      <svg
        viewBox="0 0 64 64"
        className={`${current.icon} text-blue-300`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tooth */}
        <path
          d="
            M20 10
            C14 10 10 15 10 22
            C10 29 14 36 16 42
            C18 48 19 55 24 56
            C28 57 30 50 31 45
            C32 41 33 40 34 45
            C35 50 37 57 41 56
            C46 55 47 48 49 42
            C51 36 55 29 55 22
            C55 15 51 10 45 10
            C40 10 37 13 32 17
            C28 13 25 10 20 10Z
          "
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Tooth Detail */}
        <path
          d="
            M20 25
            C24 22 28 22 32 25
            C36 22 40 22 44 25
          "
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Medical Cross */}
        <circle
          cx="49"
          cy="15"
          r="8"
          className="fill-blue-500"
        />

        <path
          d="M49 11V19M45 15H53"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}