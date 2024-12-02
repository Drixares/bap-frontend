import { useState } from "react";
import AppLayout from "../components/globals/app-layout";
import SearchForm from "../components/search/search-form";
import projects from "../datas/fake/search-projects.json";
import { ProjectType } from "../types/project";
import SearchSwitcher from "../components/search/search-switcher";
import { DisplayType } from "../types/search";
import Project from "../components/home/project";

const SearchPage = () => {
    const [display, setDisplay] = useState<DisplayType>("projects");

    return (
        <AppLayout>
            <header className="flex flex-col items-center justify-center gap-14 pt-32 px-4">
                <div className="flex flex-col items-center gap-8 z-50">
                    <h1 className="text-6xl font-bold text-slate-950">
                        Explore our innovatives projects
                    </h1>
                    <p className="text-3xl font-medium text-slate-800">
                        Discover and be aware of our innovations
                    </p>
                </div>
                <SearchForm />
            </header>
            <div className="w-full max-w-screen-2xl mx-auto px-4 mt-64 flex flex-col gap-12">
                <SearchSwitcher display={display} setDisplay={setDisplay} />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
                    {projects.map((project: ProjectType, index) => (
                        <Project key={`project:${index}`} project={project} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
};

export default SearchPage;
