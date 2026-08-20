import SearchBox from "./SearchBox";
import NotificationButton from "./NotficationButton";
import UserNav from "./UserNav";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { CalendarDays, Menu } from "lucide-react";


const Header = () => {

    const today = new Intl.DateTimeFormat(
        "fa-AF",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    ).format(new Date());


    return (
        <header
            className="
                sticky
                top-0
                z-40
                h-20
                border-b
                border-slate-200/80
                bg-white/85
                backdrop-blur-xl
            "
        >

            <div
                className="
                    flex
                    h-full
                    items-center
                    justify-between
                    gap-6
                    px-5
                    lg:px-8
                "
            >


                {/* Right Section */}

                <div
                    className="
                        flex
                        items-center
                        gap-4
                        min-w-fit
                    "
                >

                    <SidebarTrigger
                        className="
                            rounded-xl
                            hover:bg-slate-100
                            transition
                        "
                    >
                        <Menu size={20}/>
                    </SidebarTrigger>


                    <div
                        className="
                            hidden
                            sm:block
                            leading-tight
                        "
                    >



                        <p
                            className="
                                mt-1
                                text-xs
                                text-slate-500
                            "
                        >
                            سیستم مدیریت کلینیک دندان و زیبایی نورستانی
                        </p>

                    </div>

                </div>



                {/* Search */}

                <div
                    className="
                        hidden
                        md:flex
                        flex-1
                        max-w-xl
                    "
                >
                    <SearchBox />
                </div>




                {/* Left Section */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >


                    {/* Date */}

                    <div
                        className="
                            hidden
                            xl:flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-slate-200
                            bg-gradient-to-l
                            from-slate-50
                            to-white
                            px-4
                            py-2.5
                            shadow-sm
                        "
                    >

                        <div
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-50
                            "
                        >

                            <CalendarDays
                                size={18}
                                className="text-blue-600"
                            />

                        </div>


                        <div>

                            <p
                                className="
                                    text-xs
                                    text-slate-400
                                "
                            >
                                امروز
                            </p>


                            <p
                                className="
                                    text-sm
                                    font-medium
                                    text-slate-700
                                "
                            >
                                {today}
                            </p>

                        </div>


                    </div>



                    <NotificationButton />


                    <UserNav />


                </div>


            </div>

        </header>


     
    );
};


export default Header;