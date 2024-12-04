import { AuthorAvatarType } from "./author";

export type ProjectType = {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    category: string;
    authors: ProjectsAuthorType[];
    banner: ProjectBannerType;
    publishedAt: string;
};

export type ProjectsAuthorType = {
    id: number;
    documentId: string;
    avatar: AuthorAvatarType;
    name: string;
};

export type ProjectBannerType = {
    id: number;
    documentId: string;
    url: string;
};

export type ProjectWithAuthorsType = ProjectType & {
    authors: ProjectsAuthorType[];
};
