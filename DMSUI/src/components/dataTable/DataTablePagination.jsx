import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";



export default function DataTablePagination({
  table,
}) {
  return (
    <div className="flex flex-col gap-4 border-t bg-slate-50 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">

      {/* Left */}

      <div className="flex items-center gap-3 text-sm text-slate-600">

        <span>تعداد در صفحه</span>

        <Select
          value={table.getState().pagination.pageSize.toString()}
          onValueChange={(value) =>
            table.setPageSize(Number(value))
          }
        >
          <SelectTrigger className="w-24">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>

            <SelectItem value="5">
              5
            </SelectItem>
            <SelectItem value="10">
              10
            </SelectItem>

            <SelectItem value="20">
              20
            </SelectItem>

            <SelectItem value="50">
              50
            </SelectItem>

            <SelectItem value="100">
              100
            </SelectItem>

          </SelectContent>

        </Select>

      </div>

      {/* Center */}

      <div className="text-sm text-slate-600">

        صفحه

        <span className="mx-2 font-bold">

          {table.getState().pagination.pageIndex + 1}

        </span>

        از

        <span className="mx-2 font-bold">

          {table.getPageCount()}

        </span>

      </div>

      {/* Right */}

      <div className="flex items-center gap-2">

        <Button
          variant="outline"
          size="icon"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            table.setPageIndex(table.getPageCount() - 1)
          }
          disabled={!table.getCanNextPage()}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

      </div>

    </div>
  );
}