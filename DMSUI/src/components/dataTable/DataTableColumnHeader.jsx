

import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  EyeOff,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";



export default function DataTableColumnHeader({
  column,
  title,
}) {
  if (!column.getCanSort()) {
    return (
      <span className="font-medium">
        {title}
      </span>
    );
  }

  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>

        <Button
          variant="ghost"
          className="h-8 px-2 hover:bg-slate-100"
        >
          <span>{title}</span>

          {column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4 text-slate-400" />
          )}
        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">

        <DropdownMenuItem
          onClick={() => column.toggleSorting(false)}
        >
          <ArrowUp className="mr-2 h-4 w-4" />

          صعودی

        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => column.toggleSorting(true)}
        >
          <ArrowDown className="mr-2 h-4 w-4" />

          نزولی

        </DropdownMenuItem>

        {column.getCanHide() && (

          <DropdownMenuItem
            onClick={() => column.toggleVisibility(false)}
          >
            <EyeOff className="mr-2 h-4 w-4" />

            مخفی کردن ستون

          </DropdownMenuItem>

        )}

      </DropdownMenuContent>

    </DropdownMenu>
  );
}