import StatsCard from "./StateCard";

import {
    DollarSign,
    Users,
    Calendar,
    Activity
} from "lucide-react";

const items = [

    {
        title:"درآمد امروز",
        value:"AFN 18,250",
        change:18,
        icon:DollarSign,
        color:"#2563EB",
        bgColor:"#DBEAFE"
    },

    {
        title:"بیماران",
        value:"2,458",
        change:12,
        icon:Users,
        color:"#22C55E",
        bgColor:"#DCFCE7"
    },

    {
        title:"نوبت‌های امروز",
        value:"46",
        change:-3,
        icon:Calendar,
        color:"#F59E0B",
        bgColor:"#FEF3C7"
    },

    {
        title:"درمان‌های انجام شده",
        value:"387",
        change:9,
        icon:Activity,
        color:"#8B5CF6",
        bgColor:"#EDE9FE"
    }

];

const StatsSection = () => {

    return (

        <section
            className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
            "
        >

            {

                items.map(item=>(

                    <StatsCard
                        key={item.title}
                        item={item}
                    />

                ))

            }

        </section>

    );

};

export default StatsSection;