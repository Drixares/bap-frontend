import { ProjectWithAuthorsType } from "../../types/project";
import Project from "../home/project";
import { motion } from "motion/react";
import { useSearchParams } from "react-router-dom";

const SearchProjectsList = ({ projects }: { projects: ProjectWithAuthorsType[] }) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const filteredProjects = projects.filter((project) =>
        project.title
            .replace(/\s/g, "")
            .toLowerCase()
            .includes(query.replace(/\s/g, "").toLowerCase())
    );

    if (filteredProjects.length === 0) {
        return (
            <div className="flex flex-col justify-center gap-4 pt-8">
                <h1 className="text-2xl md:text-4xl font-bold text-slate-800">No projects found</h1>
                <p className="text-lg md:text-xl font-medium text-slate-700">
                    Try searching with a different keyword
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
            {filteredProjects.map((project, index: number) => (
                <motion.div
                    key={`project:${index}`}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.3, delay: (index % 3) * 0.1 },
                    }}
                    viewport={{ once: true }}
                >
                    <Project project={project} />
                </motion.div>
            ))}
        </div>
    );
};

export default SearchProjectsList;
