import Project from "./project.tsx";
import ButtonLink from "../globals/button-link.tsx";
import { ArrowRight } from "lucide-react";
import CategoryHeading2 from "./category-heading2.tsx";
import CategoryDescription from "./category-description.tsx";
import { CategoryType } from "../../types/category.ts";
import ArtificialLives from "../../assets/svg/artificialLives.svg";
import HumanLearning from "../../assets/svg/humanLearning.svg";
import ResilientFutures from "../../assets/svg/resilientFutures.svg";

const categoriesImg = {
    "artificial-lives": ArtificialLives,
    "human-learning": HumanLearning,
    "resilient-futures": ResilientFutures,
};

const Category = ({ category }: { category: CategoryType }) => {
    return (
        <section className="mb-20 flex flex-col gap-16">
            <div className="flex justify-between flex-wrap gap-4 w-full">
                <div className="flex items-center gap-6 h-fit">
                    <CategoryHeading2>{category.title}</CategoryHeading2>
                    <div className="size-14 shrink-0 rounded-xl overflow-hidden bg-slate-950 p-1">
                        <img
                            src={categoriesImg[category.slug]}
                            alt={category.title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <CategoryDescription>{category.description}</CategoryDescription>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-x-5 gap-y-10">
                {category.projects.map((project, index) => (
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
        </section>
    );
};

export default Category;
