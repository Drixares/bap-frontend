import AppLayout from "../components/globals/app-layout";
import RelatedProjects from "../components/project/related-projects";
import AuthorElement from "@/components/project/author-element";
import BannerImg from "../assets/banner-sleep-mode.webp";
import ProjectImg1 from "../assets/sleep-mode-img1.webp";
import ProjectImg2 from "../assets/sleep-mode-img2.webp";
import XiaoXiao from "../assets/xiao-xiao.webp";
import MarineReynaud from "../assets/marine-reynaud.webp";
import MaximeBroussard from "../assets/maxime-broussard.webp";

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
    "title": "Sleep Mode",
    "slug": "sleep-mode",
    "category": "Human Learning",
    "description": "The DVIC's interactive pool[^1] table was created with the aim of creating a platform that can be used to teach abstract notions of mathematics to young student. The pool table uses the principle of gamification[^2] in order to generate some addiction from the user to the educationnal platform.",
    "results": "In conclusion, the constantly projected animations on the interactive billiard table serve as a means to entertain, attract, and amuse users. With the help of AR platform technology, virtual environments can be created to facilitate player interactions. These animations offer a distinctive gaming and learning experience that can bring moments of joy, laughter, and camaraderie. It is a potential tool for motivating students to work and learn on this platform. The system can be further enhanced by utilizing more data surrounding the pool table and incorporating student feedback to make the experience more immersive.",
    "more": "The General-Purpose Operating System for Augmented Interfaces (GOSAI) is an open-source platform allowing to launch augmented reality projects on any support. Created at the De vinci Innovation Center in 2021, it provides all the essential tools, adapted drivers and modules, to interface an application with hardware. The drivers are the interfaces between the hardware and the applications. The different modules of GOSAI are implemented in a way that it is reusable for all applications created. Gosai allows application parallelism and to add an error and application manager.",
    "images": [
        BannerImg,
        ProjectImg1,
        ProjectImg2
    ],
    "date": "01-01-2023",
    "authors": [
        {
            "name": "Marine Reynaud",
            "image": MarineReynaud,
            "role": "author"
        },
        {
            "name": "Maxime Broussard",
            "image": MaximeBroussard,
            "role": "contributor"
        },
        {
            "name": "Xiao Xiao",
            "image": XiaoXiao,
            "role": "supervisor"
        }
    ]
}

const ProjectPage = () => {
    return (
        <AppLayout>
            <div className="flex flex-col m-auto max-w-screen-lg mt-32 px-4">
                <h1 className="text-6xl font-black">{project.title}</h1>
                <div className="w-full h-auto my-11 rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" src={project.images[0]} alt="project img 1" />
                </div>
                <div className="flex flex-col sm:flex-row gap-y-8 justify-between">
                    <div className="space-y-6">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-semibold leading-none">Date</h2>
                            <p className="text-base">{project.date}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-semibold leading-none">Thematic</h2>
                            <p className="text-base">{project.category}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-semibold leading-none">Members</h2>
                            <ul className="flex flex-col gap-2.5">
                                {project.authors.map((author) => (
                                    <AuthorElement key={`author:${author.name}`} author={author} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="sm:w-3/5">
                        <h2 className="text-3xl font-semibold mb-4">About</h2>
                        <p className="text-base">{project.description}</p>
                        <img className="w-full my-12 rounded-2xl" src={project.images[1]} alt="project img 1" />
                        <h2 className="text-3xl font-semibold mb-4">Results</h2>
                        <p className="text-base">{project.results}</p>
                    </div>
                </div>
                <div className="mb-10 md:mb-32">
                    <div className="flex justify-between gap-6">
                        <div className="mt-11 rounded-2xl">
                            <img className="rounded-2xl w-full h-full object-cover" src={project.images[2]} alt="project img 1" />
                        </div>
                        <div className="mt-11 rounded-2xl">
                            <img className="rounded-2xl w-full h-full object-cover" src={project.images[2]} alt="project img 1" />
                        </div>
                    </div>
                    <img className="w-full mt-5 mb-12 rounded-2xl" src={project.images[0]} alt="project img 1" />
                    <div className="flex flex-col md:items-end mb-40">
                        <h2 className="md:w-3/5 text-3xl font-semibold mb-4">More sections</h2>
                        <p className="md:w-3/5 text-base">{project.more}</p>
                    </div>
                </div>
                <RelatedProjects projects={projects} />
            </div>
        </AppLayout>
    );
};

export default ProjectPage;
