import { useParams } from "react-router-dom";
import AppLayout from "../components/globals/app-layout";

const ProjectPage = () => {
    // Get the project slug from the URL
    const { slug } = useParams();

    return (
        <AppLayout>
            <h1>Project: {slug}</h1>
        </AppLayout>
    );
};

export default ProjectPage;
