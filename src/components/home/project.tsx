import ProjectAuthors from "./project-authors";
import { ProjectType } from "../../types/project";
import ImagePlaceholder from "../../assets/svg/image-placeholder.svg";

interface ProjectProps {
    project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
    // date format : October 12, 2024
    const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="w-full flex flex-col gap-5">
            <div className="w-full h-80 rounded-2xl flex justify-center items-center overflow-hidden">
                <img
                    src={ImagePlaceholder}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-2 mx-2">
                <p className="text-sm text-slate-600 font-medium">{formattedDate}</p>
                <h3 className="font-bold text-lg text-gray-950">{project.title}</h3>
                <p className="text-sm text-gray-800">{project.description}</p>
            </div>
            <ProjectAuthors members={project.members} />
        </div>
    );
};

export default Project;