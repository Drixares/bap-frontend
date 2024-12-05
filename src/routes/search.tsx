import { useState } from "react";
import AppLayout from "../components/globals/app-layout";
import SearchForm from "../components/search/search-form";
import projects from "../datas/fake/search-projects.json";
import authors from "../datas/fake/search-authors.json";
import { ProjectWithAuthorsType } from "../types/project";
import SearchSwitcher from "../components/search/search-switcher";
import { DisplayType } from "../types/search";
import { AuthorType } from "../types/author";
import AuthorPopup from "../components/search/author-popup";
import SearchProjectsList from "../components/search/search-projects-list";
import SearchAuthorsList from "../components/search/search-authors-list";
import { motion } from "motion/react";

const SearchPage = () => {
    const [display, setDisplay] = useState<DisplayType>("projects");
    const [selectedAuthor, setSelectedAuthor] = useState<AuthorType | null>(null);

    return (
        <AppLayout>
            <header className="flex flex-col items-center justify-center gap-14 pt-32 px-4">
                <div className="text-start sm:text-center flex flex-col items-center gap-8 z-30">
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold text-slate-950"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0 }}
                    >
                        Explore our innovatives projects
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-3xl font-medium text-slate-700"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        Discover and be aware of our innovations
                    </motion.p>
                </div>
                <SearchForm />
            </header>
            <div className="w-full max-w-screen-2xl mx-auto px-4 mt-64 flex flex-col gap-12">
                <SearchSwitcher display={display} setDisplay={setDisplay} />
                {display === "projects" && (
                    <SearchProjectsList projects={projects as ProjectWithAuthorsType[]} />
                )}
                {display === "authors" && (
                    <SearchAuthorsList
                        authors={authors as AuthorType[]}
                        setSelectedAuthor={setSelectedAuthor}
                    />
                )}
            </div>
            {selectedAuthor && (
                <AuthorPopup author={selectedAuthor} onClose={() => setSelectedAuthor(null)} />
            )}
        </AppLayout>
    );
};

export default SearchPage;
