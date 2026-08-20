import { Search } from "lucide-react";

const SearchBox = () => {
    return (

        <div className="relative hidden lg:block w-[430px]">

            <Search
                size={18}
                className="absolute right-4 top-4 text-slate-400"
            />

            <input
                type="text"
                placeholder="جستجو..."
                className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                pr-11
                pl-4
                outline-none
                transition-all
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                "
            />

        </div>

    );
};

export default SearchBox;