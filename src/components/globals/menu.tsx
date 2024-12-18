import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/ift_no_bg.svg";
import ButtonLink from "./button-link";

const Menu = () => {
    // Get the current pathname
    const pathname = useLocation().pathname;

    return (
        <div className="w-full max-w-screen-2xl mx-auto pt-2 px-4 h-32 flex justify-between items-center">
            <Link to="/">
                <img src={Logo} alt="logo Institute for Futures Technologies" />
            </Link>

            <div className="flex items-center gap-4">
                {pathname === "/" ? (
                    <ButtonLink to="/search" variant="secondary">
                        Our projects
                        <ArrowRight
                            size={24}
                            className="group-hover:-rotate-45 transition-transform duration-300"
                        />
                    </ButtonLink>
                ) : (
                    <ButtonLink to="/" variant="secondary">
                        <ArrowLeft size={24} />
                        Back to home
                    </ButtonLink>
                )}
            </div>
        </div>
    );
};

export default Menu;
