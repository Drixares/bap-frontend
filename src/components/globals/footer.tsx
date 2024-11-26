const Footer = () => {
    return ( 
        <footer className="w-full max-w-screen-2xl mx-auto py-4 px-4">
            <p className="text-center text-sm text-slate-500">
                &copy; {new Date().getFullYear()} Institute for Futures Technologies. All rights reserved.
            </p>
        </footer>
    );
}
 
export default Footer;