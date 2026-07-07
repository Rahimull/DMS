



export default function DataTableSkeleton({
  columns = 6,
  rows = 8,
}) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr
          key={rowIndex}
          className="border-b"
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td
              key={colIndex}
              className="px-4 py-4"
            >
              <Skeleton className="h-5 w-full rounded-md" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}