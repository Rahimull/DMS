import {
  Search,
  Plus,
  RefreshCcw,
  Download,
  Printer,
  Trash2,
  Rows3,
  Users,
  SlidersHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import DataTableViewOptions from "./DataTableViewOptions";

export default function DataTableToolbar({
  table,

  title = "مدیریت اطلاعات",
  description = "مشاهده و مدیریت رکوردها",

  icon: Icon = Users,

  search = "",
  onSearchChange,

  onAdd,
  addButtonText = "ثبت جدید",

  onRefresh,
  onExport,
  onPrint,

  onDeleteSelected,

  selectedRows = 0,

  children,
}) {
  if (!table) return null;

  const total = table.getPrePaginationRowModel().rows.length;

  return (
    <div
      className="
      mb-2
      overflow-hidden
      rounded-[10px]
      border
      border-slate-200
      bg-white
      bg-gradient-to-br from-white via-sky-50 to-indigo-100
      shadow-[0_10px_35px_-15px_rgba(0,0,0,.15)]
      "
    >
      {/* ================= HEADER ================= */}

      <div
        className="
        relative
        overflow-hidden
        bg-gradient-to-r
        from-blue-700
        via-indigo-600
        to-cyan-500
        px-6
        py-5
        text-white
        "
      >
        <div
          className="
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-white/10
          "
        />

        <div
          className="
          relative
          flex
          flex-col
          gap-4

          lg:flex-row
          lg:items-center
          lg:justify-between
          "
        >
          {/* Title */}

          <div
            className="
            flex
            items-center
            gap-4
            "
          >
            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white/20
              backdrop-blur
              "
            >
              <Icon className="h-7 w-7" />
            </div>

            <div>
              <h2
                className="
                text-xl
                font-black
                "
              >
                {title}
              </h2>

              <p
                className="
                mt-1
                text-sm
                text-blue-100
                "
              >
                {description}
              </p>
            </div>
          </div>

          {/* Statistics */}

          <div
            className="
            flex
            gap-3
            "
          >
            <div
              className="
              rounded-full
              bg-white/15
              px-5
              py-3
              text-center
              backdrop-blur
              "
            >
              <p
                className="
                text-xs
                text-blue-100
                "
              >
                مجموع
              </p>

              <p
                className="
                text-xl
                font-black
                "
              >
                {total}
              </p>
            </div>

            {selectedRows > 0 && (
              <div
                className="
                  rounded-2xl
                  bg-white/15
                  px-5
                  py-3
                  text-center
                  "
              >
                <p
                  className="
                    text-xs
                    text-blue-100
                    "
                >
                  انتخاب
                </p>

                <p
                  className="
                    text-xl
                    font-black
                    "
                >
                  {selectedRows}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= TOOLBAR ================= */}

      <div
        className="
        flex
        flex-col
        gap-4
        p-5

        xl:flex-row
        xl:items-center
        xl:justify-between
        "
      >
        {/* Search */}

        <div
          className="
          relative
          w-full

          xl:max-w-xl
          "
        >
          <Search
            className="
            absolute
            left-4
            top-1/2
            h-5
            w-5
            -translate-y-1/2
            text-slate-400
            "
          />

          <Input
            value={search}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="جستجو..."
            className="
            h-12
            rounded-[10px]
            bg-slate-50
            pl-12
            border-slate-200
            focus:bg-white
            "
          />
        </div>

        {/* Buttons */}

        <div
          className="
          flex
          flex-wrap
          items-center
          gap-2
          "
        >
          {children}

          {selectedRows > 0 && (
            <Button
              variant="destructive"
              onClick={onDeleteSelected}
              className="
                h-11
                rounded-full
                "
            >
              <Trash2 className="mr-2 h-4 w-4" />
              حذف ({selectedRows})
            </Button>
          )}

          {onAdd && (
            <Button
              onClick={onAdd}
              className="
                h-11
                rounded-xl

                bg-gradient-to-r
                from-blue-600
                to-cyan-500

                shadow-md

                hover:scale-105

                transition
                "
            >
              <Plus className="mr-2 h-4 w-4" />

              {addButtonText}
            </Button>
          )}

          {/* Small Actions */}

          <div
            className="
            flex
            items-center
            rounded-xl
            border
            bg-slate-50
            p-1
            "
          >
            {onRefresh && (
              <Button
                size="icon"
                variant="ghost"
                onClick={onRefresh}
                className="rounded-lg text-blue-600"
              >
                <RefreshCcw className="h-4 w-4" />
              </Button>
            )}

            {onExport && (
              <Button
                size="icon"
                variant="ghost"
                onClick={onExport}
                className="rounded-lg text-blue-600"
              >
                <Download className="h-4 w-4" />
              </Button>
            )}

            {onPrint && (
              <Button
                size="icon"
                variant="ghost"
                onClick={onPrint}
                className="rounded-lg text-blue-600"
              >
                <Printer className="h-4 w-4" />
              </Button>
            )}

            <DataTableViewOptions table={table} />
          </div>
        </div>
      </div>

      {selectedRows > 0 && (
        <div
          className="
            flex
            items-center
            gap-2

            border-t

            bg-blue-50

            px-5
            py-3

            text-sm
            font-medium
            text-blue-700
            "
        >
          <Rows3 className="h-4 w-4" />
          {selectedRows} مورد انتخاب شده
        </div>
      )}
    </div>
  );
}
