import { Link } from "react-router-dom";
import { cn } from "../../utils/functions";

interface ButtonLinkProps {
    children: React.ReactNode;
    className?: string;
    to?: string;
    variant?: "primary" | "secondary";
}

const buttonLinkVariants = {
    primary: "bg-slate-950 text-white",
    secondary: "bg-white text-slate-950 border border-slate-950",
};

const ButtonLink = ({ children, className, to, variant }: ButtonLinkProps) => {
    return (
        <Link
            to={to || "#"}
            className={cn(
                "inline-flex items-center justify-center gap-4 px-6 h-14 rounded-full text-lg group",
                buttonLinkVariants[variant || "primary"],
                className
            )}
        >
            {children}
        </Link>
    );
};

export default ButtonLink;
