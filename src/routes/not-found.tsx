import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1 className="text-7xl pt-60 z-10">404</h1>
            <p className="text-8xl p-4 font-bold text-center z-10">Page not found</p>
            <Link to="/" className="w-4/6 rounded-t-full overflow-hidden z-10">
                <img
                    src="src/assets/globe.png"
                    alt="globe"
                    className="z-10 w-full rounded-full"
                    />
            </Link>
            <div className="bg-orange-200 z-0 absolute bottom-10 left-10 w-1/3 h-3/6 rounded-full blur-3xl"></div>
            <div className="bg-teal-200 z-0 absolute bottom-10 right-10 w-1/3 h-3/6 rounded-full blur-3xl"></div>
            <div className="bg-fuchsia-200 z-0 absolute top-40 center w-1/3 h-3/6 rounded-full blur-3xl"></div>
        </div>
    );
};

export default NotFoundPage;
