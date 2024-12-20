import Project from "./project.tsx";
import ButtonLink from "../globals/button-link.tsx";
import { ArrowRight } from "lucide-react";
import CategoryHeading2 from "./category-heading2.tsx";
import CategoryDescription from "./category-description.tsx";
import { CategoryType } from "../../types/category.ts";
import ArtificialLives from "../../assets/svg/artificialLives.svg";
import HumanLearning from "../../assets/svg/humanLearning.svg";
import ResilientFutures from "../../assets/svg/resilientFutures.svg";
import { ProjectWithAuthorsType } from "../../types/project.ts";
import { motion } from "motion/react";
import LogoBlock from "./logo-block.tsx";

const categoriesImg = {
    "artificial-lives": ArtificialLives,
    "human-learning": HumanLearning,
    "resilient-futures": ResilientFutures,
};

const Category = ({ category }: { category: CategoryType }) => {
    return (
        <section className="flex flex-col gap-16">
            <div className="flex justify-between flex-wrap gap-4 w-full">
                <div className="flex items-center gap-6 h-fit">
                    <CategoryHeading2>{category.title}</CategoryHeading2>
                    <LogoBlock
                        title={category.title}
                        srcImg={categoriesImg[category.slug]}
                        size={14}
                    />
                </div>
                <CategoryDescription>{category.description}</CategoryDescription>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-x-5 gap-y-10">
                {category.projects.map((project: ProjectWithAuthorsType, index: number) => (
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
