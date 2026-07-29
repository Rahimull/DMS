import { useMemo, useState } from "react";
import { Settings2, Check, Columns3, Search, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DataTableViewOptions({ table }) {
  const [search, setSearch] = useState("");

  const columns = table.getAllColumns().filter((column) => column.getCanHide());

  const filteredColumns = useMemo(() => {
    if (!search.trim()) {
      return columns;
    }

    return columns.filter((column) =>
      (column.columnDef.meta?.label ?? column.id)
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [columns, search]);

  const visibleCount = columns.filter((column) => column.getIsVisible()).length;

  const showAllColumns = () => {
    columns.forEach((column) => column.toggleVisibility(true));
  };

  const hideAllColumns = () => {
    columns.forEach((column) => column.toggleVisibility(false));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="
            h-10
            rounded-xl
            gap-2
            border-slate-200
            bg-white
            px-4
            font-semibold
            text-slate-700

            hover:border-blue-300
            hover:bg-blue-50
            hover:text-blue-600

            transition-all
          "
        >
          <Settings2
            className="
              h-4
              w-4
            "
          />
          تنظیمات جدول
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          w-80
          rounded-2xl
          border-slate-200
          bg-white
          p-0
          shadow-2xl
        "
      >
        {/* Header */}

        <div
          className="
            rounded-t-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            p-4
            text-white
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-white/20
              "
            >
              <Columns3 className="h-5 w-5" />
            </div>

            <div>
              <p
                className="
                  font-bold
                "
              >
                مدیریت ستون‌ها
              </p>

              <p
                className="
                  text-xs
                  text-blue-100
                "
              >
                {visibleCount} از {columns.length} فعال
              </p>
            </div>
          </div>
        </div>

        <div className="p-3">
          {/* Search */}

          <div
            className="
              relative
              mb-3
            "
          >
            <Search
              className="
                absolute
                left-3
                top-3
                h-4
                w-4
                text-slate-400
              "
            />

            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجوی ستون..."
              className="
                h-10
                rounded-xl
                bg-slate-50
                pl-10
              "
            />
          </div>

          {/* Actions */}

          <div
            className="
              mb-3
              flex
              gap-2
            "
          >
            <Button
              size="sm"
              variant="outline"
              onClick={showAllColumns}
              className="
                flex-1
                rounded-xl
                text-xs
              "
            >
              <Check className="mr-1 h-3 w-3" />
              همه
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={hideAllColumns}
              className="
                flex-1
                rounded-xl
                text-xs
              "
            >
              <RotateCcw className="mr-1 h-3 w-3" />
              پاک کردن
            </Button>
          </div>

          <DropdownMenuSeparator />

          {/* Columns */}

          <div
            className="
              max-h-72
              overflow-y-auto
              space-y-1
              py-2
            "
          >
            {filteredColumns.map((column) => (
              <label
                key={column.id}
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-2.5

                  hover:bg-blue-50

                  transition
                "
              >
                <input
                  type="checkbox"
                  checked={column.getIsVisible()}
                  onChange={(e) => column.toggleVisibility(e.target.checked)}
                  className="
                    h-4
                    w-4
                    accent-blue-600
                  "
                />

                <span
                  className="
                    flex-1
                    text-sm
                    text-slate-700
                  "
                >
                  {column.columnDef.meta?.label ?? column.id}
                </span>

                {column.getIsVisible() && (
                  <Check
                    className="
                      h-4
                      w-4
                      text-blue-600
                    "
                  />
                )}
              </label>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
