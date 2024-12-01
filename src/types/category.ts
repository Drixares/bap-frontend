import { ProjectType } from "./project";

export type CategoryType = {
    title: string;
    description: string;
    slug: "artificial-lives" | "human-learning" | "resilient-futures";
    projects: ProjectType[];
};
