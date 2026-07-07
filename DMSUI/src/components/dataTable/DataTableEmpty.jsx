import { FileSearch } from "lucide-react";

import { Button } from "@/components/ui/button";



export default function DataTableEmpty({
  title = "اطلاعاتی یافت نشد",
  description = "هیچ رکوردی برای نمایش وجود ندارد.",
  buttonText,
  onButtonClick,
  colSpan,
}) {
  return (
    <tr>

      <td
        colSpan={colSpan}
        className="py-16"
      >

        <div className="flex flex-col items-center justify-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">

            <FileSearch className="h-10 w-10 text-slate-400" />

          </div>

          <h3 className="mt-6 text-xl font-semibold text-slate-700">

            {title}

          </h3>

          <p className="mt-2 max-w-sm text-center text-slate-500">

            {description}

          </p>

          {buttonText && (

            <Button
              className="mt-6"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>

          )}

        </div>

      </td>

    </tr>
  );
}