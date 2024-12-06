import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { cn } from "../../utils/functions";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";

const SearchForm = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q");

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ q: e.target.value });
    };

    const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query) return;
        // setDisplay("projects");

        // TODO: fetch projects from API
        console.log(query);
    };

    return (
        <form onSubmit={handleOnSubmit} className="relative z-20 w-full">
            <div
                className={cn(
                    `h-14 rounded-full bg-white flex items-center justify-between
                    border border-slate-300 overflow-hidden max-w-2xl w-full pr-2 mx-auto`,
                    isFocused && "border-slate-950"
                )}
            >
                <input
                    type="search"
                    name="search"
                    placeholder="What is the project name ?"
                    className="w-full h-full px-6 focus:outline-none placeholder:text-slate-400"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={handleOnChange}
                    value={query || ""}
                />
                <button
                    type="submit"
                    className="bg-slate-950 rounded-full px-5 h-10 flex items-center justify-center hover:bg-slate-800 transition-colors"
                >
                    <Search size={24} className="text-white" />
                </button>
            </div>
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-full flex items-center justify-center gap-8 -z-10 
                opacity-40"
            >
                <motion.div
                    className="size-40 rounded-full bg-primary-orange blur-3xl translate-y-12"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15, ease: "easeInOut" }}
                />
                <motion.div
                    className="size-40 rounded-full bg-primary-purple blur-3xl"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                    className="size-40 rounded-full bg-primary-blue blur-3xl translate-y-12"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, delay: 0.45, ease: "easeInOut" }}
                />
            </div>
        </form>
    );
};

export default SearchForm;
