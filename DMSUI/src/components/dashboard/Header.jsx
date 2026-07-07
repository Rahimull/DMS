import SearchBox from "./SearchBox";
import NotificationButton from "./NotficationButton";
import UserNav from "./UserNav";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { CalendarDays } from "lucide-react";

const Header = () => {
    return (
        <header className="sticky top-0 z-40 h-20 bg-white/80 backdrop-blur-xl border-b border-slate-200">

            <div className="flex h-full items-center justify-between px-8">

                {/* Right */}

                <div className="flex items-center gap-4">

                    <SidebarTrigger />

                    <div>

                        <h2 className="text-xl font-bold text-slate-800">
                            داشبورد
                        </h2>

                        <p className="text-sm text-slate-500">
                          مدیریت کلینک داندان و زیبایی نورستانی
                        </p>

                    </div>

                </div>

                {/* Center */}

                <SearchBox />

                {/* Left */}

                <div className="flex items-center gap-5">

                    <div className="hidden lg:flex items-center gap-2 rounded-xl border bg-slate-50 px-4 py-2">

                        <CalendarDays
                            size={18}
                            className="text-blue-600"
                        />

                        <span className="text-sm text-slate-600">
                            ۱۴ سرطان ۱۴۰۵
                        </span>

                    </div>

                    <NotificationButton />

                    <UserNav />

                </div>

            </div>

        </header>
    );
};

export default Header;