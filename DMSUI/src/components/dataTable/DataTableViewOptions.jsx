

import { Settings2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function DataTableViewOptions({
  table,
}) {



  return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>

        <Button
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Settings2 className="h-4 w-4" />

          ستون‌ها

        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56"
      >

        <DropdownMenuLabel>

          نمایش ستون‌ها

        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {table
          .getAllColumns()
          .filter(
            (column) =>
              column.getCanHide()
          )
          .map((column) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              checked={column.getIsVisible()}
              onCheckedChange={(value) =>
                column.toggleVisibility(!!value)
              }
              className="capitalize"
            >
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}

      </DropdownMenuContent>

    </DropdownMenu>
  );
}