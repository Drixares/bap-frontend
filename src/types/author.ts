export type AuthorType = {
    id: number;
    documentId: string;
    name: string;
    description: string;
    job: string;
    slug: string;
    avatar: AuthorAvatarType;
    projects: AuthorProjectType[];
};

export type AuthorAvatarType = {
    id: number;
    documentId: string;
    name: string;
    url: string;
} | null;

export type AuthorProjectType = {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    description: string;
};
