import React, { createContext, useContext } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";


const SidebarContext = createContext(null);


export function SidebarProvider({ children }) {
  return (
    <SidebarContext.Provider value={{}}>
      {children}
    </SidebarContext.Provider>
  );
}


export function useSidebar() {
  return useContext(SidebarContext);
}


export function Sidebar({
  children,
  className,
}) {
  return (
    <aside
      className={cn(
        "w-64 h-screen border-l bg-white flex flex-col",
        className
      )}
    >
      {children}
    </aside>
  );
}


export function SidebarHeader({
  children,
  className,
}) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
}


export function SidebarContent({
  children,
  className,
}) {
  return (
    <div className={cn("flex-1 overflow-y-auto", className)}>
      {children}
    </div>
  );
}


export function SidebarFooter({
  children,
  className,
}) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
}


export function SidebarGroup({
  children,
}) {
  return <div>{children}</div>;
}


export function SidebarGroupLabel({
  children,
  className,
  ...props
}) {
  return (
    <div
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
}


export function SidebarGroupContent({
  children,
}) {
  return <div>{children}</div>;
}


export function SidebarMenu({
  children,
  className,
}) {
  return (
    <ul className={cn(className)}>
      {children}
    </ul>
  );
}


export function SidebarMenuItem({
  children,
}) {
  return (
    <li>
      {children}
    </li>
  );
}


export function SidebarMenuButton({
  asChild = false,
  children,
  className,
  ...props
}) {

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "flex w-full items-center rounded-md px-3 py-2 hover:bg-slate-100",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}


export function SidebarMenuBadge({
  children
}) {
  return (
    <span className="ml-auto text-xs">
      {children}
    </span>
  );
}


export function SidebarInput({
  className,
  ...props
}) {
  return (
    <input
      className={cn(
        "w-full rounded-md border px-3 py-2",
        className
      )}
      {...props}
    />
  );
}