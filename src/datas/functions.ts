import { authorsUrl, projectsUrl } from "./queries";

export async function getAuthors() {
    const response = await fetch(import.meta.env.VITE_API_URL + authorsUrl);
    const data = await response.json();
    return data;
}

export async function getProjects() {
    const response = await fetch(import.meta.env.VITE_API_URL + projectsUrl);
    const data = await response.json();
    return data;
}
