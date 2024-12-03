import { Dispatch, SetStateAction } from "react";
import { cn } from "../../utils/functions";
import { DisplayType } from "../../types/search";

interface SearchSwitcherProps {
    display: string;
    setDisplay: Dispatch<SetStateAction<DisplayType>>;
}

const SearchSwitcher = ({ display, setDisplay }: SearchSwitcherProps) => {
    return (
        <div className="flex items-center gap-4">
            <button
                className={cn(
                    `border-none outline-none text-slate-950 text-3xl font-bold`,
                    display === "authors" && "opacity-30"
                )}
                onClick={() => setDisplay("projects")}
                disabled={display === "projects"}
            >
                Projects
            </button>
            <button
                className={cn(
                    `border-none outline-none text-slate-950 text-3xl font-bold`,
                    display === "projects" && "opacity-30"
                )}
                onClick={() => setDisplay("authors")}
                disabled={display === "authors"}
            >
                Members
            </button>
        </div>
    );
};

export default SearchSwitcher;
