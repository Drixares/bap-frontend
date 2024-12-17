import AppLayout from "../components/globals/app-layout";
import RelatedProjects from "../components/project/related-projects";
import Img1 from "../assets/svg/image-placeholder.svg";
import Img2 from "../assets/svg/devScreen.svg";
import Img3 from "../assets/svg/astronaut.svg";
import Img4 from "../assets/svg/yellowRoom.svg";

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

const project = {
    title: "The title of the Project",
    image: [
        Img1,
        Img2,
        Img3,
        Img4
    ],
    about: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.",
    results: "We understand that motivation plays a crucial role in maintaining an active lifestyle. That's why we've incorporated exciting features like badges, rewards, and challenges within Sportly. Achieve your goals and unlock various milestones to earn recognition and stay motivated on your fitness journey. So, whether you're a beginner looking to kickstart your fitness routine or a seasoned athlete striving for new personal bests, Sportly is your ideal companion. Download the app today and experience the joy of tracking your sport activity like never before!",
    more: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.",
    date: "November 25, 2024",
    thematic: "Resilient Futures",
    authors: [
        {
            name: "John Doe",
            role: "Innovator",
            image: "https://color-hex.org/colors/cbd5e1.png",
        },
        {
            name: "John Doe",
            role: "Innovator",
            image: "https://color-hex.org/colors/cbd5e1.png",
        },
        {
            name: "John Doe",
            role: "Innovator",
            image: "https://color-hex.org/colors/cbd5e1.png",
        }
    ],
};

const ProjectPage = () => {
    return (
        <AppLayout>
            <main className="my-16 ">
                <div className="flex flex-col m-auto max-w-screen-lg">
                    <h1 className="text-6xl">{project.title}</h1>
                    <img className="w-full my-11" src={project.image[0]} alt="project img 1" />
                    <div className="flex justify-between">
                        <div className="space-y-6">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl font-semibold leading-none">Date</h2>
                                <p className="text-base">{project.date}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl font-semibold leading-none">Thematic</h2>
                                <p className="text-base">{project.thematic}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl font-semibold leading-none">Members</h2>
                                <ul className="flex flex-col gap-2.5">
                                    {project.authors.map((author) => (
                                        <li className="flex items-center gap-3">
                                            <img
                                                className="rounded-full size-8 ml-2"
                                                src={author.image}
                                                alt=""
                                            />
                                            <div className="flex flex-col content-center">
                                                <h3 className="text-sm font-medium">
                                                    {author.name}
                                                </h3>
                                                <p className="text-xs text-slate-700">
                                                    {author.role}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-3/5">
                            <h2 className="text-3xl font-semibold mb-4">About</h2>
                            <p className="text-base">{project.about}</p>
                            <img
                                className="w-full my-12"
                                src={project.image[1]}
                                alt="project img 1"
                            />
                            <h2 className="text-3xl font-semibold mb-4">Results</h2>
                            <p className="text-base">{project.results}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between gap-10">
                            <img
                                className="w-full mt-11"
                                src={project.image[2]}
                                alt="project img 1"
                            />
                            <img
                                className="w-full mt-11"
                                src={project.image[2]}
                                alt="project img 1"
                            />
                        </div>
                        <img
                            className="w-full mt-5 mb-12"
                            src={project.image[3]}
                            alt="project img 1"
                        />
                        <div className="flex flex-col items-end mb-40">
                            <h2 className="w-3/5 text-3xl font-semibold mb-4">More sections</h2>
                            <p className="w-3/5 text-base">{project.more}</p>
                        </div>
                    </div>
                    <RelatedProjects projects={projects} />
                </div>
            </main>
        </AppLayout>
    );
};

export default ProjectPage;
