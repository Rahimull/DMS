import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bell, Search } from "lucide-react";

export function AppHeader() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-background px-4">

      {/* Sidebar toggle */}
      <SidebarTrigger />

      {/* Search */}
      <div className="relative w-full max-w-sm">
        <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="جستجو در سیستم..."
          className="pr-8 bg-background border-border focus-visible:ring-primary"
        />
      </div>

      <div className="mr-auto flex items-center gap-3">

        {/* Notifications */}
        <button className="relative">
          <Bell className="h-5 w-5 text-muted-foreground hover:text-primary transition" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <Separator orientation="vertical" className="h-6" />

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10" />
          <span className="text-sm font-medium">مدیر سیستم</span>
        </div>

      </div>
    </header>
  );
}