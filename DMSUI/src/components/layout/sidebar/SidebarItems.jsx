import { useLocation } from "react-router-dom";

import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
} from "@/components/ui/sidebar";




export default function SidebarItems({ item }) {
  const location = useLocation();

  const Icon = item.icon;

  const isActive = item.path
    ? location.pathname === item.path
    : false;

  return (
    <SidebarMenuItem>

      <SidebarMenuButton
        asChild
        isActive={isActive}
        className="gap-3"
      >

        <a href={item.path || "#"} className="flex items-center gap-3">

          <Icon className="h-5 w-5 shrink-0" />

          <span className="flex-1">{item.title}</span>

          {item.badge && (
            <SidebarMenuBadge>
              {item.badge}
            </SidebarMenuBadge>
          )}

        </a>

      </SidebarMenuButton>

    </SidebarMenuItem>
  );
}