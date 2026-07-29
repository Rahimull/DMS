import {
  ArrowDownAZ,
  ArrowUpAZ,
  ArrowUpDown,
  EyeOff,
  Check,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DataTableColumnHeader({ column, title }) {
  if (!column.getCanSort()) {
    return (
      <div
        className="
        px-3
        text-sm
        font-bold
        text-slate-700
        "
      >
        {title}
      </div>
    );
  }

  const sorted = column.getIsSorted();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`group relative h-10 rounded-xl px-3 gap-2 font-bold transition-all duration-200 ${
            sorted
              ? " bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 ring-1 ring-blue-200 "
              : " text-slate-600 hover:bg-slate-100 hover:text-blue-600"
          }
          `}
        >
          <span>{title}</span>

          <span
            className="
            flex
            items-center
            justify-center
            rounded-lg
            bg-slate-100
            p-1
            transition
            group-hover:bg-white
            "
          >
            {sorted === "asc" ? (
              <ArrowUpAZ
                className="
                h-4
                w-4
                text-blue-600
                "
              />
            ) : sorted === "desc" ? (
              <ArrowDownAZ
                className="
                h-4
                w-4
                text-blue-600
                "
              />
            ) : (
              <ArrowUpDown
                className="
                h-4
                w-4
                text-slate-400
                "
              />
            )}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="
        w-48
        rounded-2xl
        border-slate-200
        bg-white
        p-2
        shadow-xl
        "
      >
        <DropdownMenuItem
          onClick={() => column.toggleSorting(false)}
          className="
          flex
          cursor-pointer
          items-center
          rounded-xl
          px-3
          py-2.5
          hover:bg-blue-50
          "
        >
          <ArrowUpAZ
            className="
            me-3
            h-4
            w-4
            text-blue-600
            "
          />

          <span className="flex-1">مرتب سازی صعودی</span>

          {sorted === "asc" && (
            <Check
              className="
              h-4
              w-4
              text-blue-600
              "
            />
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => column.toggleSorting(true)}
          className="
          flex
          cursor-pointer
          items-center
          rounded-xl
          px-3
          py-2.5
          hover:bg-blue-50
          "
        >
          <ArrowDownAZ
            className="
            me-3
            h-4
            w-4
            text-blue-600
            "
          />

          <span className="flex-1">مرتب سازی نزولی</span>

          {sorted === "desc" && (
            <Check
              className="
              h-4
              w-4
              text-blue-600
              "
            />
          )}
        </DropdownMenuItem>

        {column.getCanHide() && (
          <>
            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => column.toggleVisibility(false)}
              className="
                cursor-pointer
                rounded-xl
                px-3
                py-2.5
                text-red-600
                hover:bg-red-50
                "
            >
              <EyeOff
                className="
                  me-3
                  h-4
                  w-4
                  "
              />
              مخفی کردن ستون
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
