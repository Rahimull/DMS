import { Skeleton } from "../ui/skeleton";

export default function DataTableSkeleton({ columns = 6, rows = 8 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="
          border-b
          hover:bg-slate-50
          "
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td
              key={colIndex}
              className="
              px-4
              py-4
              "
            >
              {colIndex === 0 ? (
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    "
                >
                  <Skeleton
                    className="
                      h-9
                      w-9
                      rounded-full
                      "
                  />

                  <div
                    className="
                      space-y-2
                      "
                  >
                    <Skeleton
                      className="
                        h-3
                        w-24
                        rounded-full
                        "
                    />

                    <Skeleton
                      className="
                        h-3
                        w-16
                        rounded-full
                        "
                    />
                  </div>
                </div>
              ) : colIndex === columns - 1 ? (
                <Skeleton
                  className="
                    h-7
                    w-20
                    rounded-full
                    "
                />
              ) : (
                <Skeleton
                  className={`
                    h-4
                    rounded-md

                    ${colIndex % 2 === 0 ? "w-full" : "w-3/4"}

                    `}
                />
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
