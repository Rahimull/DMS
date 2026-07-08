import { useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Search, ChevronLeft } from "lucide-react";

import {sidebarItems}  from "../../../features/dashboard/data/sidebar";

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
  const location = useLocation();
  const [query, setQuery] = useState("");

  // ===============================
  // Filter Menu (Search Feature)
  // ===============================
  const filteredItems = useMemo(() => {
    if (!query.trim()) return sidebarItems;

    return sidebarItems
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <Sidebar
      side="right"
      collapsible="icon"
      className="border-l bg-background"
    >

      {/* ================= HEADER ================= */}
      <SidebarHeader className="p-4 border-b border-border">

        <div className="flex items-center gap-3 mb-4">

          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
            🦷
          </div>

          <div className="leading-tight">
            <h1 className="text-sm font-bold">Dental DMS</h1>
            <p className="text-xs text-muted-foreground">
              Clinic Management System
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="relative">

          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />

          <SidebarInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجو..."
            className="pl-8"
          />

        </div>

      </SidebarHeader>

      {/* ================= CONTENT ================= */}
      <SidebarContent className="px-2 py-3">

        <SidebarMenu className="space-y-4">

          {filteredItems.map((group) => (
            <SidebarGroupComponent
              key={group.title}
              group={group}
            />
          ))}

        </SidebarMenu>

      </SidebarContent>

      

      {/* ================= FOOTER ================= */}
      <SidebarFooter className="border-t border-border p-4">

        <div className="flex items-center gap-3">

          {/* Avatar */}
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
            RP
          </div>

          {/* User Info */}
          <div className="flex-1 leading-tight">
            <p className="text-sm font-medium">Rahimullah</p>
            <p className="text-xs text-muted-foreground">
              Administrator
            </p>
          </div>

          <ChevronLeft className="h-4 w-4 text-muted-foreground" />

        </div>

        {/* Version */}
        <p className="text-[10px] text-muted-foreground mt-3 text-center">
          v1.0.0
        </p>

      </SidebarFooter>

    </Sidebar>
  );
}