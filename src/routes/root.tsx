import "../App.css";
import AppLayout from "../components/globals/app-layout";
import Globe from "../assets/globe.png";
import ButtonLink from "../components/globals/button-link";
import { ArrowRight } from "lucide-react";

function Root() {
    return (
        <AppLayout>
            <header className="flex flex-col xl:flex-row justify-between w-full px-4 py-[110px] mx-auto max-w-screen-2xl">
                <div className="shrink-0 max-w-screen-xl">
                    <h3 className="text-base md:text-xl xl:text-2xl font-bold">
                        Institutive for Future Technologies
                    </h3>
                    <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold flex flex-col xl:gap-1">
                        <span>Inventing</span>
                        <span>Technologies that</span>
                        <span className="text-slate-400">Shape the Future</span>
                    </h1>
                    <ButtonLink to="search" variant="primary" className="mt-10">
                        See our innovate projects
                        <ArrowRight />
                    </ButtonLink>
                </div>
                <img
                    src={Globe}
                    alt=""
                    className="max-w-[54rem] w-2/3 -mr-80 max-xl:mx-auto max-xl:w-full max-xl:mt-3"
                />
            </header>
        </AppLayout>
    );
}

export default Root;
