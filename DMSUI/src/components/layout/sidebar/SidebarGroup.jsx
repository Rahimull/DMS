import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

import SidebarItem from "./SidebarItems";
import { useSidebarState } from "@/features/dashboard/hooks/useSidebarState";


export default function SidebarGroupComponent({ group }) {

  const location = useLocation();

  const {
    isGroupOpen,
    toggleGroup,
    openGroup
  } = useSidebarState();


  const open = isGroupOpen(group.title);


  const isActiveGroup = group.items.some(
    item =>
      item.path &&
      location.pathname.startsWith(item.path)
  );


  useEffect(() => {

    if(isActiveGroup){
      openGroup(group.title);
    }

  },[
    isActiveGroup,
    group.title,
    openGroup
  ]);



  return (

    <SidebarGroup className="px-2 mb-2">


      <div
        className={`
          rounded-xl
          transition-all
          duration-200

          ${
            isActiveGroup
            ?
            "bg-blue-50 border border-blue-200"
            :
            "hover:bg-slate-50"
          }
        `}
      >


        {/* Header */}

        <SidebarGroupLabel

          onClick={()=>toggleGroup(group.title)}

          className="
            h-auto
            px-3
            py-3
            cursor-pointer
            flex
            items-center
            justify-between
            rounded-xl
          "

        >


          <div className="flex items-center gap-3">


            <div
              className={`
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                text-sm
                font-bold

                ${
                  isActiveGroup
                  ?
                  "bg-blue-600 text-white"
                  :
                  "bg-slate-100 text-slate-600"
                }
              `}
            >

              {group.title.charAt(0)}

            </div>



            <div>


              <p
                className="
                text-sm
                font-semibold
                text-slate-700
                "
              >

                {group.title}

              </p>


              <p
                className="
                text-[11px]
                text-slate-400
                "
              >

                {group.items.length} مورد

              </p>


            </div>


          </div>




          <ChevronDown

            size={17}

            className={`
              text-slate-400
              transition-transform
              duration-300

              ${
                open
                ?
                "rotate-180 text-blue-600"
                :
                ""
              }

            `}

          />


        </SidebarGroupLabel>



        {/* Items */}

        <div
          className={`
            grid
            transition-all
            duration-300

            ${
              open
              ?
              "grid-rows-[1fr]"
              :
              "grid-rows-[0fr]"
            }

          `}
        >

          <div className="overflow-hidden">


            <SidebarGroupContent
              className="
              px-2
              pb-3
              "
            >


              <SidebarMenu
                className="
                space-y-1
                "
              >

                {
                  group.items.map(item=>(

                    <SidebarItem

                      key={item.title}

                      item={item}

                    />

                  ))
                }


              </SidebarMenu>


            </SidebarGroupContent>


          </div>

        </div>


      </div>


    </SidebarGroup>

  );
}