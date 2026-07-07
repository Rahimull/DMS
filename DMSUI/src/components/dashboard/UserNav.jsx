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
    User
} from "lucide-react";

const UserNav = () => {

    return (

        <DropdownMenu>

            <DropdownMenuTrigger>

                <Avatar className="cursor-pointer h-11 w-11">

                    <AvatarImage src="/avatar.png" />

                    <AvatarFallback>

                        RP

                    </AvatarFallback>

                </Avatar>

            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="start"
                className="w-52 rounded-xl"
            >

                <DropdownMenuItem>

                    <User className="ml-2 h-4 w-4" />

                    پروفایل

                </DropdownMenuItem>

                <DropdownMenuItem>

                    <Settings className="ml-2 h-4 w-4" />

                    تنظیمات

                </DropdownMenuItem>

                <DropdownMenuItem>

                    <LogOut className="ml-2 h-4 w-4" />

                    خروج

                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>

    );
};

export default UserNav;