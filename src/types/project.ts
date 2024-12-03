export type ProjectType = {
    title: string;
    description: string;
    image: string;
    date: string;
    slug: string;
};

export type ProjectsAuthorsType = {
    name: string;
    image: string;
};

export type ProjectWithAuthorsType = ProjectType & {
    authors: ProjectsAuthorsType[];
};
