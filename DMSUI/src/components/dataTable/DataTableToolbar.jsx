import { useEffect, useState } from "react";


import {
  Search,
  Plus,
  RefreshCw,
  Download,
  Printer,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DataTableViewOptions from "./DataTableViewOptions";


export default function DataTableToolbar({
  table,
  search,
  onSearchChange,
  onAdd,
  onRefresh,
  onExport,
  onPrint,
  onDeleteSelected,
  selectedRows = 0,
  addButtonText = "ثبت جدید",
  children,
}) {
  const [value, setValue] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(value);
    }, 400);

    return () => clearTimeout(timer);
  }, [value, onSearchChange]);
console.log("Toolbar Table:", table);

if (!table)
  return null;

  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

        {/* Search */}

        <div className="relative w-full xl:max-w-md">

          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          />

          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="جستجو..."
            className="pl-10"
          />

        </div>

        {/* Actions */}

        <div className="flex flex-wrap items-center gap-2">

          {children}

          {selectedRows > 0 && (

            <Button
              variant="destructive"
              onClick={onDeleteSelected}
            >
              <Trash2 className="mr-2 h-4 w-4" />

              حذف ({selectedRows})

            </Button>

          )}

          {onAdd && (

            <Button onClick={onAdd}>

              <Plus className="mr-2 h-4 w-4" />

              {addButtonText}

            </Button>

          )}

          {onRefresh && (

            <Button
              variant="outline"
              size="icon"
              onClick={onRefresh}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>

          )}

          {onExport && (

            <Button
              variant="outline"
              size="icon"
              onClick={onExport}
            >
              <Download className="h-4 w-4" />
            </Button>

          )}

          {onPrint && (

            <Button
              variant="outline"
              size="icon"
              onClick={onPrint}
            >
              <Printer className="h-4 w-4" />
            </Button>

          )}

          <DataTableViewOptions  table={table}/>

        </div>

      </div>

    </div>
  );
}