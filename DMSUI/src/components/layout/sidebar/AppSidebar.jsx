import { useMemo, useState } from "react";
import { Search, ChevronLeft, ShieldCheck } from "lucide-react";

import { sidebarItems } from "@/features/dashboard/data/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
} from "@/components/ui/sidebar";

import SidebarGroupComponent from "./SidebarGroup";

export default function AppSidebar() {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (!query.trim()) return sidebarItems;

    return sidebarItems
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase()),
        ),
      }))
      .filter((group) => group.items.length);
  }, [query]);

  return (
    <Sidebar
      side="right"
      collapsible="icon"
      className="
  border-l
  bg-white
  shadow-xl
  "
    >
      {/* HEADER */}

      <SidebarHeader
  className="
  relative
  overflow-hidden
  border-b
  border-white/20
  bg-gradient-to-br
  from-blue-800
  via-blue-600
  to-cyan-500
  p-5
  text-white
  "
>


  {/* Background Shapes */}

  <div
    className="
    absolute
    -right-16
    -top-16
    h-48
    w-48
    rounded-full
    bg-white/10
    blur-2xl
    "
  />


  <div
    className="
    absolute
    -bottom-10
    -left-10
    h-32
    w-32
    rounded-full
    bg-cyan-300/20
    blur-xl
    "
  />



  {/* Logo Area */}

  <div
    className="
    relative
    flex
    items-center
    gap-4
    "
  >

    <div
      className="
      flex
      h-14
      w-14
      shrink-0
      items-center
      justify-center
      rounded-2xl
      bg-white/95
      shadow-xl
      ring-4
      ring-white/20
      "
    >

      <span
        className="
        text-3xl
        "
      >
        🦷
      </span>

    </div>



    <div
      className="
      group-data-[collapsible=icon]:hidden
      "
    >

      <div
        className="
        flex
        items-center
        gap-2
        "
      >

        <h1
          className="
          text-xl
          font-black
          tracking-wide
          "
        >
          DMS
        </h1>


        <span
          className="
          rounded-full
          bg-white/20
          px-2
          py-0.5
          text-[10px]
          font-bold
          backdrop-blur
          "
        >
          ERP
        </span>

      </div>


      <p
        className="
        mt-1
        text-xs
        text-blue-100
        "
      >
        Dental Management System
      </p>


    </div>


  </div>




  {/* Search */}

  <div
    className="
    relative
    mt-5
    group-data-[collapsible=icon]:hidden
    "
  >

    <Search
      className="
      absolute
      left-3
      top-3
      h-4
      w-4
      text-white/70
      "
    />


    <SidebarInput

      value={query}

      onChange={(e)=>setQuery(e.target.value)}

      placeholder="جستجوی منو..."

      className="
      h-10
      rounded-xl
      border-white/20
      bg-white/15
      pl-10
      text-white
      shadow-inner
      backdrop-blur-md

      placeholder:text-white/60

      focus-visible:ring-2
      focus-visible:ring-white/40

      "

    />


  </div>



  {/* Version */}

  <div
    className="
    relative
    mt-4
    flex
    justify-between
    text-[11px]
    text-blue-100
    group-data-[collapsible=icon]:hidden
    "
  >

    


  </div>


</SidebarHeader>

      {/* MENU */}

      <SidebarContent
        className="
px-3
py-4
"
      >
        <SidebarMenu
          className="
space-y-3
"
        >
          {filteredItems.map((group) => (
            <SidebarGroupComponent key={group.title} group={group} />
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER */}

      <SidebarFooter
        className="
  border-t
  bg-gradient-to-b
  from-slate-50
  to-white
  p-4
  "
      >
        <div
          className="
    group
    rounded-2xl
    border
    border-slate-200
    bg-white
    p-3
    shadow-sm
    transition-all
    duration-300
    hover:shadow-md
    "
        >
          <div
            className="
      flex
      items-center
      gap-3
      "
          >
            {/* Avatar */}

            <div className="relative shrink-0">
              <div
                className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-indigo-600
          via-blue-600
          to-cyan-500
          text-sm
          font-black
          text-white
          shadow-lg
          "
              >
                RP
              </div>

              {/* Online */}

              <span
                className="
          absolute
          bottom-0
          right-0
          h-3.5
          w-3.5
          rounded-full
          border-2
          border-white
          bg-emerald-500
          "
              />
            </div>

            {/* User Info */}

            <div
              className="
        min-w-0
        flex-1
        group-data-[collapsible=icon]:hidden
        "
            >
              <p
                className="
          truncate
          text-sm
          font-bold
          text-slate-800
          "
              >
                Rahimullah Pashay
              </p>

              <div
                className="
          mt-1
          flex
          items-center
          gap-1.5
          text-xs
          text-slate-500
          "
              >
                <ShieldCheck
                  className="
            h-3.5
            w-3.5
            text-blue-600
            "
                />

                <span>System Administrator</span>
              </div>
            </div>

            {/* Arrow */}

            <ChevronLeft
              className="
        h-4
        w-4
        text-slate-400
        transition-transform
        group-hover:-translate-x-1
        group-data-[collapsible=icon]:hidden
        "
            />
          </div>

          {/* Status */}

          <div
            className="
      mt-3
      flex
      items-center
      justify-between
      rounded-xl
      bg-slate-50
      px-3
      py-2
      text-xs
      group-data-[collapsible=icon]:hidden
      "
          >
            <span className="text-slate-500">Status</span>

            <span
              className="
        flex
        items-center
        gap-1
        font-semibold
        text-emerald-600
        "
            >
              <span
                className="
          h-2
          w-2
          rounded-full
          bg-emerald-500
          "
              />
              Online
            </span>
          </div>
        </div>

        {/* Version */}

        <p
          className="
    mt-3
    text-center
    text-[11px]
    text-slate-400
    group-data-[collapsible=icon]:hidden
    "
        >
          DMS Clinic System • v1.0.0
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
