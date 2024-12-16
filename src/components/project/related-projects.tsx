import { ProjectWithAuthorsType } from "../../types/project";
import ButtonLink from "../globals/button-link";
import { ArrowRight } from "lucide-react";
import Project from "../home/project";
import CategoryHeading2 from "../home/category-heading2";



const RelatedProjects = ({ projects } : {projects : ProjectWithAuthorsType[]}) => {
    return(
            <div className="flex flex-col justify-between gap-x-5 gap-y-10 max-w-screen-lg mx-auto">
                <CategoryHeading2>Related Projects </CategoryHeading2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
                    {projects.map((project: ProjectWithAuthorsType, index: number) => (
                        <Project key={index} project={project} />
                    ))}
                </div>
                <div className="flex justify-center">
                <ButtonLink to="/search" variant="secondary">
                    See more projects
                    <ArrowRight
                        size={24}
                        className="group-hover:-rotate-45 transition-transform duration-300"
                    />
                </ButtonLink>
            </div>
            </div>
    )
}

export default RelatedProjects;