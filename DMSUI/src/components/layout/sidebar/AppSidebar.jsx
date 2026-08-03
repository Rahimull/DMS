import { useMemo, useState } from "react";
import { Search, ChevronLeft, ShieldCheck } from "lucide-react";

import { sidebarItems } from "@/features/dashboard/data/sidebar";

import {
  Sidebar,
  SidebarContent,
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

    

      
    </Sidebar>
  );
}
