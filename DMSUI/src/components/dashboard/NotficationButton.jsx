import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotificationButton = () => {

    return (

        <Button
            size="icon"
            variant="outline"
            className="relative rounded-xl"
        >

            <Bell size={18} />

            <span
                className="
                absolute
                -top-1
                -left-1
                h-5
                w-5
                rounded-full
                bg-red-500
                text-white
                text-xs
                flex
                items-center
                justify-center
                "
            >
                4
            </span>

        </Button>

    );
};

export default NotificationButton;