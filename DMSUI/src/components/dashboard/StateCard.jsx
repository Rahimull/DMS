import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";




const StatsCard = ({ item }) => {

    const Icon = item.icon;

    const positive = item.change >= 0;

    return (

        <motion.div

            whileHover={{
                y: -6,
                scale: 1.02
            }}

            transition={{
                duration: .25
            }}

            className="
            rounded-3xl
            border
            bg-white
            p-6
            shadow-sm
            hover:shadow-xl
            transition-all
            "

        >

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-slate-500 text-sm">

                        {item.title}

                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-slate-800">

                        {item.value}

                    </h2>

                </div>

                <div
                    className="h-16 w-16 rounded-2xl flex items-center justify-center"
                    style={{
                        backgroundColor: item.bgColor
                    }}
                >

                    <Icon
                        size={30}
                        style={{
                            color: item.color
                        }}
                    />

                </div>

            </div>

            <div className="mt-6 flex items-center justify-between">

                <div
                    className={`
                    flex items-center gap-2
                    rounded-full
                    px-3
                    py-1
                    text-sm
                    ${
                        positive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }
                    `}
                >

                    {

                        positive
                            ? <ArrowUpRight size={16}/>
                            : <ArrowDownRight size={16}/>

                    }

                    {Math.abs(item.change)}%

                </div>

                <span className="text-sm text-slate-400">

                    نسبت به ماه گذشته

                </span>

            </div>

            {/* Spark Line */}

            <div className="mt-5">

                <div className="flex items-end gap-1 h-12">

                    {[20,35,28,45,33,50,40,55,60].map((h,index)=>(

                        <div

                            key={index}

                            className="flex-1 rounded-full bg-blue-500/15"

                            style={{
                                height:`${h}%`
                            }}

                        />

                    ))}

                </div>

            </div>

        </motion.div>

    );

};

export default StatsCard;