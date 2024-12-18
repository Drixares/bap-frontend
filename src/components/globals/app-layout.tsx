import { useEffect } from "react";
import Footer from "./footer/footer";
import Menu from "./menu";
import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    const pathname = useLocation().pathname;

    useEffect(() => {
        document.body.scrollTop = 0;
    }, [pathname]);

    return (
        <div className="min-h-svh bg-slate-50 flex flex-col">
            <Menu />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
};

export default AppLayout;
