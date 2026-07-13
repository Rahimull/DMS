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

export default function DataTable({ table, loading = false, pageSize = 10 }) {
  const getStickyClass = (column) => {
    const sticky = column.columnDef.meta?.sticky;

    switch (sticky) {
      case "right":
        return "sticky right-0 z-30 bg-white";

      case "left":
        return "sticky left-0 z-30 bg-white";

      default:
        return "";
    }
  };

  const columnsCount = table.getAllColumns().length;

  return (
    <div className="space-y-4">
      <div className="relative overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={getStickyClass(header.column)}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {loading ? (
              <DataTableSkeleton columns={columnsCount} rows={pageSize} />
            ) : table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={getStickyClass(cell.column)}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <DataTableEmpty
                colSpan={columnsCount}
                title="اطلاعاتی برای نمایش وجود ندارد"
                description="هیچ رکوردی یافت نشد."
              />
            )}
          </TableBody>
        </Table>

        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
