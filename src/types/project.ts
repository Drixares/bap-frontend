import { AuthorAvatarType } from "./author";

export type ProjectType = {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    category: string;
    banner: ProjectBannerType;
    publishedAt: string;
    authors: ProjectsAuthorType[];
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
