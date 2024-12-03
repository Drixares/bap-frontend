import { ProjectWithAuthorsType } from "../../types/project";
import Project from "../home/project";

const SearchProjectsList = ({ projects }: { projects: ProjectWithAuthorsType[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
            {projects.map((project: ProjectWithAuthorsType, index: number) => (
                <Project key={`project:${index}`} project={project} />
            ))}
        </div>
    );
};

export default SearchProjectsList;
