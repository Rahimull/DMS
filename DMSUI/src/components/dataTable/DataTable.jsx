import { flexRender } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DataTableSkeleton from "./DataTableSkeleton";
import DataTableEmpty from "./DataTableEmpty";
import DataTablePagination from "./DataTablePagination";

export default function DataTable({
  table,
  loading = false,
  pageSize = 10,
}) {
  const getStickyClass = (column) => {
    const sticky = column.columnDef.meta?.sticky;

    switch (sticky) {
      case "right":
        return `
          sticky
          right-0
          z-30
          bg-white
          shadow-[-8px_0_12px_-10px_rgba(0,0,0,.18)]
        `;

      case "left":
        return `
          sticky
          left-0
          z-30
          bg-white
          shadow-[8px_0_12px_-10px_rgba(0,0,0,.18)]
        `;

      default:
        return "";
    }
  };

  const columnsCount = table.getAllColumns().length;

  return (
    <div
      className="
        overflow-hidden
        rounded-[10px]
        border
        border-slate-200
        bg-white
        shadow-xl
        shadow-slate-200/40"
    >
      {/* Top Accent */}
      <div
        className="
          h-1.5
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-emerald-500
        "
      />

      {/* Table */}
      <div
        className="
          relative
          max-h-[70vh]
          overflow-auto
        "
      >
        <Table className="min-w-[1000px]">
          {/* ================= HEADER ================= */}

          <TableHeader
            className="
              sticky
              top-0
              z-40
              bg-white
              backdrop-blur
            "
          >
            {table.getHeaderGroups().map((group) => (
              <TableRow
                key={group.id}
                className="
                  border-b
                  border-slate-200
                  bg-slate-50
                  hover:bg-slate-50
                "
              >
                {group.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={`
                      h-14
                      whitespace-nowrap
                      border-b
                      border-slate-200
                      bg-slate-50
                      px-4
                      text-sm
                      font-bold
                      text-slate-700

                      ${getStickyClass(header.column)}
                    `}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          {/* ================= BODY ================= */}

          <TableBody>
            {loading ? (
              <DataTableSkeleton
                columns={columnsCount}
                rows={pageSize}
              />
            ) : table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={
                    row.getIsSelected()
                      ? "selected"
                      : undefined
                  }
                  className={`
                    border-b
                    border-slate-100
                    transition-all
                    duration-200

                    ${
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50/40"
                    }

                    hover:bg-blue-50

                    data-[state=selected]:bg-blue-100
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`
                        whitespace-nowrap
                        px-4
                        py-3
                        align-middle
                        text-sm
                        text-slate-700

                        ${getStickyClass(cell.column)}
                      `}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <DataTableEmpty
                colSpan={columnsCount}
                title="اطلاعاتی یافت نشد"
                description="هیچ رکوردی مطابق جستجو وجود ندارد."
              />
            )}
          </TableBody>
        </Table>
      </div>

      {/* ================= FOOTER ================= */}

      <div
        className="
          border-t
          border-slate-200
          bg-slate-50
        "
      >
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}