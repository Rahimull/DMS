import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  
} from "@tanstack/react-table";

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
  columns,
  data,

  loading = false,

  pageSize = 10,

}) {
  const [sorting, setSorting] = useState([]);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize,
  });

  const [columnFilters, setColumnFilters] =
    useState([]);

  const [rowSelection, setRowSelection] =
    useState({});

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting,
      pagination,
      columnFilters,
      rowSelection,
    },
    

    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,

    enableRowSelection: true,

    getCoreRowModel: getCoreRowModel(),

    getFilteredRowModel: getFilteredRowModel(),

    getSortedRowModel: getSortedRowModel(),

    getPaginationRowModel: getPaginationRowModel(),
  });


  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <Table>

          <TableHeader>

            {table.getHeaderGroups().map((group) => (

              <TableRow key={group.id}>

                {group.headers.map((header) => (

                  <TableHead key={header.id}>

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

          <TableBody>

            {loading ? (

              <DataTableSkeleton
                columns={columns.length}
                rows={pageSize}
              />

            ) : table.getRowModel().rows.length ? (

              table.getRowModel().rows.map((row) => (

                <TableRow
                  key={row.id}
                  data-state={
                    row.getIsSelected()
                      ? "selected"
                      : undefined
                  }
                >

                  {row.getVisibleCells().map((cell) => (

                    <TableCell key={cell.id}>

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
                colSpan={columns.length}
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