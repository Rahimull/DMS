import { NavLink } from "react-router-dom";

import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";


export default function SidebarItems({ item }) {

  const Icon = item.icon;


  return (

    <SidebarMenuItem>


      <SidebarMenuButton
        asChild
        className="
          h-auto
          p-0
          hover:bg-transparent
        "
      >

        <NavLink

          to={item.path}

          className={({isActive}) =>
            `
            group
            relative
            flex
            h-11
            items-center
            gap-3
            rounded-xl
            px-3
            transition-all
            duration-200


            ${
              isActive
              ?
             
              "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
              :
              "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
            }

            `
          }

        >


          {({isActive})=>(

            <>


              {/* Active Line */}

              {
                isActive &&
                <span
                  className="
                  absolute
                  right-0
                  top-2
                  bottom-2
                  w-1
                  rounded-l-full
                  bg-white
                  "
                />
              }



              {/* Icon */}

              <span
                className={`
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                transition


                ${
                  isActive
                  ?
                  "bg-white/20"
                  :
                  "bg-slate-100 text-blue-600 group-hover:bg-blue-100"
                }

                `}
              >

                <Icon
                  size={18}
                  strokeWidth={2}
                />

              </span>




              {/* Text */}

              <span
                className="
                flex-1
                truncate
                text-sm
                font-medium
                "
              >

                {item.title}

              </span>




              {/* Badge */}

              {
                item.badge &&
                <span
                  className={`
                    rounded-full
                    px-2
                    py-0.5
                    text-[11px]
                    font-bold


                    ${
                      isActive
                      ?
                      "bg-white text-blue-600"
                      :
                      "bg-red-500 text-white"
                    }

                  `}
                >

                  {item.badge}

                </span>
              }


            </>

          )}


        </NavLink>


      </SidebarMenuButton>


    </SidebarMenuItem>

  );
}