import { FileSearch, Plus } from "lucide-react";

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
        className="
        h-[380px]
        "
      >

        <div
          className="
          flex
          flex-col
          items-center
          justify-center
          px-6
          text-center
          "
        >


          {/* Icon */}

          <div
            className="
            relative
            mb-6
            "
          >

            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-blue-200
              blur-xl
              opacity-40
              "
            />


            <div
              className="
              relative
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-blue-50
              to-cyan-50
              ring-1
              ring-blue-100
              shadow-lg
              "
            >

              <FileSearch
                className="
                h-11
                w-11
                text-blue-500
                "
                strokeWidth={1.8}
              />

            </div>

          </div>




          {/* Title */}

          <h3
            className="
            text-xl
            font-black
            text-slate-800
            "
          >

            {title}

          </h3>




          {/* Description */}

          <p
            className="
            mt-3
            max-w-md
            text-sm
            leading-6
            text-slate-500
            "
          >

            {description}

          </p>




          {/* Action */}

          {
            buttonText && (

              <Button

                onClick={onButtonClick}

                className="
                mt-7
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-6
                shadow-md
                transition-all
                hover:-translate-y-0.5
                hover:shadow-lg
                "

              >

                <Plus
                  className="
                  me-2
                  h-4
                  w-4
                  "
                />


                {buttonText}


              </Button>

            )
          }



        </div>


      </td>


    </tr>

  );
}