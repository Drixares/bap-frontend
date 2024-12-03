import { ProjectType } from "./project";

export type AuthorType = {
    name: string;
    job: string;
    slug: string;
    image: string;
    description: string;
    projects: ProjectType[];
};
