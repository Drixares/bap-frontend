import { useParams } from "react-router-dom";
import AppLayout from "../components/globals/app-layout";
import RelatedProjects from '../components/project/related-projects';
import { ProjectWithAuthorsType } from "../types/project";

const projects =[
    {
        "title": "Project Alpha",
        "description": "An innovative research project focused on artificial intelligence",
        "image": "https://via.placeholder.com/300",
        "date": "2023-01-15",
        "slug": "project-alpha",
        "authors": [
            {
                "name": "Sarah Chen",
                "image": "https://via.placeholder.com/300"
            },
            {
                "name": "Michael Brown",
                "image": "https://via.placeholder.com/300"
            }
        ]
    },
    {
        "title": "Project Beta",
        "description": "Exploring quantum computing applications in cryptography",
        "image": "https://via.placeholder.com/300",
        "date": "2023-02-01",
        "slug": "project-beta",
        "authors": [
            {
                "name": "David Wilson",
                "image": "https://via.placeholder.com/300"
            },
            {
                "name": "Emma Davis",
                "image": "https://via.placeholder.com/300"
            }
        ]
    }
]

const ProjectPage = () =>  {
    // Get the project slug from the URL
    const { slug } = useParams();

    return (
        <AppLayout>
            <h1>Project: {slug}</h1>
            <RelatedProjects projects={projects}
            />
        </AppLayout>
    );
};

export default ProjectPage;
