import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  Settings,
  LogOut,
  User,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

const UserNav = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const initials = user?.fullName
    ? user.fullName
        .split(" ")
        .map((name) => name[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "RP";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full outline-none">
          <Avatar className="h-11 w-11 cursor-pointer">
            <AvatarImage
              src={user?.profileImage || "/avatar.png"}
              alt={user?.fullName || "User"}
            />

            <AvatarFallback>
              {initials}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-52 rounded-xl"
      >
        {/* User Information */}
        <div className="px-3 py-2">
          <p className="font-medium">
            {user?.fullName || "کاربر"}
          </p>

          <p className="text-xs text-muted-foreground">
            @{user?.userName || ""}
          </p>
        </div>

        <DropdownMenuItem>
          <User className="ml-2 h-4 w-4" />
          پروفایل
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Settings className="ml-2 h-4 w-4" />
          تنظیمات
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleLogout}
          className="text-red-600 focus:text-red-600"
        >
          <LogOut className="ml-2 h-4 w-4" />
          خروج
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;