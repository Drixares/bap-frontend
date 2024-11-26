import Footer from "./footer";
import Menu from "./menu";
interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return ( 
        <div className='min-h-svh bg-slate-50 flex flex-col'>
            <Menu />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    );
}
 
export default AppLayout;