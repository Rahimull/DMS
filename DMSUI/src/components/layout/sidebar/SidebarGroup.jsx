import { useEffect } from "react";
import { useLocation } from "react-router-dom";



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
  const { isGroupOpen, toggleGroup, openGroup } = useSidebarState();

  const open = isGroupOpen(group.title);

  const isActiveGroup = group.items.some((item) =>
    item.path ? location.pathname.startsWith(item.path) : false
  );

  // ✅ FIX: move side-effect here
  useEffect(() => {
    if (isActiveGroup) {
      openGroup(group.title);
    }
  }, [isActiveGroup, group.title, openGroup]);

  return (
    <SidebarGroup>

      <SidebarGroupLabel
        onClick={() => toggleGroup(group.title)}
        className="
          cursor-pointer
          flex items-center justify-between
          px-3 py-2
          text-xs font-bold uppercase
          text-muted-foreground
        "
      >
        <span>{group.title}</span>

        <span className="text-[10px]">
          {open ? "−" : "+"}
        </span>

      </SidebarGroupLabel>

      {open && (
        <SidebarGroupContent>
          <SidebarMenu className="space-y-1">
            {group.items.map((item) => (
              <SidebarItem key={item.title} item={item} />
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      )}

    </SidebarGroup>
  );
}