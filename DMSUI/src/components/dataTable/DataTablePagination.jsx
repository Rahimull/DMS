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

  const pageIndex =
    table.getState().pagination.pageIndex;

  const pageCount =
    table.getPageCount();


  return (

    <div
      className="
      flex
      flex-col
      gap-4
      border-t
      bg-white
      px-5
      py-4
      md:flex-row
      md:items-center
      md:justify-between
      "
    >



      {/* Page Size */}

      <div
        className="
        flex
        items-center
        gap-3
        text-sm
        text-slate-600
        "
      >

        <span className="font-medium">
          نمایش
        </span>


        <Select

          value={
            table
              .getState()
              .pagination
              .pageSize
              .toString()
          }

          onValueChange={(value)=>
            table.setPageSize(Number(value))
          }

        >

          <SelectTrigger
            className="
            h-9
            w-24
            rounded-xl
            border-slate-200
            bg-slate-50
            font-semibold
            "
          >

            <SelectValue />

          </SelectTrigger>


          <SelectContent
            className="
            rounded-xl
            "
          >

            {[5,10,20,50,100].map(size => (

              <SelectItem

                key={size}

                value={size.toString()}

                className="
                rounded-lg
                "

              >

                {size} مورد

              </SelectItem>

            ))}


          </SelectContent>


        </Select>


        <span className="text-slate-400">
          در هر صفحه
        </span>


      </div>





      {/* Current Page */}

      <div
        className="
        flex
        items-center
        gap-2
        text-sm
        text-slate-600
        "
      >

        <span>
          صفحه
        </span>


        <span
          className="
          flex
          h-8
          min-w-8
          items-center
          justify-center
          rounded-lg
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          px-2
          font-bold
          text-white
          shadow-sm
          "
        >

          {pageIndex + 1}

        </span>


        <span>
          از
        </span>


        <span
          className="
          font-bold
          text-slate-700
          "
        >

          {pageCount}

        </span>


      </div>





      {/* Navigation */}

      <div
        className="
        flex
        items-center
        gap-2
        "
      >


        <PaginationButton

          icon={<ChevronsRight />}

          onClick={() =>
            table.setPageIndex(0)
          }

          disabled={
            !table.getCanPreviousPage()
          }

          title="صفحه اول"

        />


        <PaginationButton

          icon={<ChevronRight />}

          onClick={() =>
            table.previousPage()
          }

          disabled={
            !table.getCanPreviousPage()
          }

          title="قبلی"

        />


        <PaginationButton

          icon={<ChevronLeft />}

          onClick={() =>
            table.nextPage()
          }

          disabled={
            !table.getCanNextPage()
          }

          title="بعدی"

        />



        <PaginationButton

          icon={<ChevronsLeft />}

          onClick={() =>
            table.setPageIndex(pageCount - 1)
          }

          disabled={
            !table.getCanNextPage()
          }

          title="آخرین صفحه"

        />


      </div>


    </div>

  );
}





function PaginationButton({
  icon,
  onClick,
  disabled,
  title,
}) {

  return (

    <Button

      variant="outline"

      size="icon"

      title={title}

      onClick={onClick}

      disabled={disabled}

      className="
      h-9
      w-9
      rounded-xl
      border-slate-200
      bg-white
      transition-all

      hover:-translate-y-0.5
      hover:border-blue-300
      hover:bg-blue-50
      hover:text-blue-600

      disabled:opacity-40
      "

    >

      {icon}

    </Button>

  );

}