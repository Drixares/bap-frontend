import AppLayout from "../components/globals/app-layout";
import RelatedProjects from "../components/project/related-projects";

const projects = [
    {
        title: "Project Alpha",
        description: "An innovative research project focused on artificial intelligence",
        image: "https://via.placeholder.com/300",
        date: "2023-01-15",
        slug: "project-alpha",
        authors: [
            {
                name: "Sarah Chen",
                image: "https://via.placeholder.com/300",
            },
            {
                name: "Michael Brown",
                image: "https://via.placeholder.com/300",
            },
        ],
    },
    {
        title: "Project Beta",
        description: "Exploring quantum computing applications in cryptography",
        image: "https://via.placeholder.com/300",
        date: "2023-02-01",
        slug: "project-beta",
        authors: [
            {
                name: "David Wilson",
                image: "https://via.placeholder.com/300",
            },
            {
                name: "Emma Davis",
                image: "https://via.placeholder.com/300",
            },
        ],
    },
];

const ProjectPage = () => {
    const project = projects[0];
    const projectTheme = "ON A PAS DE THEME";
    const authorRole = "On est là...";

    return (
        <AppLayout>
            <main className="my-16 ">
                <div className="bg-red-300 flex flex-col m-auto max-w-screen-lg">
                    <h1 className="text-6xl">{project.title}</h1>
                    <img className="w-full my-11" src={project.image} alt="project img 1" />
                    <div className="flex justify-between">
                        <div className="space-y-6">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold leading-none">Date</h2>
                                <p className="text-base">{project.date}</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold leading-none">Thematic</h2>
                                <p className="text-base">{projectTheme}</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold leading-none">Members</h2>
                                <ul className="flex flex-col gap-2.5">
                                    {project.authors.map((author) => (
                                        <li className="flex items-center gap-3 my-1">
                                            <img
                                                className="rounded-full size-8"
                                                src={author.image}
                                                alt=""
                                            />
                                            <div className="flex flex-col">
                                                <h3 className="text-sm font-medium">
                                                    {author.name}
                                                </h3>
                                                <p className="text-xs text-slate-700">
                                                    {authorRole}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-blue-300 w-3/5">
                            <h2 className="text-3xl font-semibold mb-4">About</h2>
                            <p className="text-base">{project.description}</p>
                            <img className="w-full my-12" src={project.image} alt="project img 1" />
                            <h2 className="text-3xl font-semibold mb-4">Results</h2>
                            <p className="text-base">{project.description}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between gap-10">
                            <img className="w-full mt-11" src={project.image} alt="project img 1" />
                            <img className="w-full mt-11" src={project.image} alt="project img 1" />
                        </div>
                        <img
                            className="w-full mt-5 mb-12"
                            src={project.image}
                            alt="project img 1"
                        />
                        <div className="flex flex-col items-end mb-40">
                            <h2 className="w-3/5 text-3xl font-semibold mb-4">More sections</h2>
                            <p className="w-3/5 text-base">{project.description}</p>
                        </div>
                    </div>
                    <RelatedProjects projects={projects} />
                </div>
            </main>
        </AppLayout>
    );
};

export default ProjectPage;
