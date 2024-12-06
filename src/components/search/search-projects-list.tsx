import { ProjectWithAuthorsType } from "../../types/project";
import Project from "../home/project";
import { motion } from "motion/react";

const SearchProjectsList = ({ projects }: { projects: ProjectWithAuthorsType[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
            {projects.map((project: ProjectWithAuthorsType, index: number) => (
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
