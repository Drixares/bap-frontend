import AppLayout from "../components/globals/app-layout";
import RelatedProjects from '../components/project/related-projects';

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

const project = {
    "title": "Fly like an Egyptian",
    "image": [
        "https://www.capsulecomputers.com.au/wp-content/uploads/2014/04/JoJos-Bizarre-Adventure-Stardust-Crusaders-Episode-3-Screenshot-01-600x338.jpg",
        "https://booshalmightyreviews.wordpress.com/wp-content/uploads/2014/06/enhance.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGwjIHwppRTBLgm8bRXTQA0H92KL4EhfDWg&s",
        "https://www.nautiljon.com/images/perso/00/94/mohamed_avdol_10249.webp",
        "https://www.nautiljon.com/images/description/00/13/1440856025297_image.jpg",
    ],
    "about": "La mère de Jotaro étant gravemement malade, Jotaro et ses compagnon partir en Egypte pour combattre un vampire",
    "results": "Après avoir battue le vampire, la mère de Jotaro se rétablie rapidement.",
    "more": "C'est la partie 3, et ya genre 9 partie je crois...",
    "date": "12/08/1995",
    "thematic": "JoJo's Bizzare Adventure",
    "authors": [
        {
            "name": "Jotaro",
            "role": "protagonise",
            "image": "https://i.pinimg.com/474x/29/44/23/29442399bae2157e858c4c5bf73b9ea6.jpg"
        },
        {
            "name": "Dio",
            "role": "antagoniste",
            "image": "https://i1.sndcdn.com/artworks-ZZwITQBkzFzEjthR-ygFkkA-t500x500.jpg"
        }
    ]
}

const ProjectPage = () =>  {
    return (
        <AppLayout>
            <main className="my-16 ">
                <div className="bg-red-300 flex flex-col m-auto max-w-screen-lg">
                    <h1 className="text-6xl">{project.title}</h1>
                    <img className="w-full my-11" src={project.image[0]} alt="project img 1" />
                    <div className="flex justify-between">
                        <div>
                            <div className="mb-6">
                                <h2 className="text-xl  font-semibold mb-4">Date</h2>
                                <p className="text-base">{project.date}</p>
                            </div>
                            <div className="my-6">
                                <h2 className="text-xl  font-semibold my-4">Thematic</h2>
                                <p className="text-base">{project.thematic}</p>
                            </div>
                            <div className="my-6">
                                <h2 className="text-xl  font-semibold my-4">Members</h2>
                                <ul>
                                    {project.authors.map((author) => (
                                    <li className="flex my-4">
                                        <img className="rounded-full w-9 h-9 mx-2" src={author.image} alt="" />
                                        <div className="flex flex-col content-center">
                                            <h3 className="text-sm font-medium">{author.name}</h3>
                                            <p className="text-xs">{author.role}</p>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-blue-300 w-3/5">
                            <h2 className="text-3xl font-semibold mb-4">About</h2>
                            <p className="text-base">{project.about}</p>
                            <img className="w-full my-12" src={project.image[1]} alt="project img 1" />
                            <h2 className="text-3xl font-semibold mb-4">Results</h2>
                            <p className="text-base">{project.results}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between gap-10">
                            <img className="w-full mt-11" src={project.image[2]} alt="project img 1" />
                            <img className="w-full mt-11" src={project.image[3]} alt="project img 1" />
                        </div>
                        <img className="w-full mt-5 mb-12" src={project.image[4]} alt="project img 1" />
                        <div className="flex flex-col items-end mb-40">
                            <h2 className="w-3/5 text-3xl font-semibold mb-4">More sections</h2>    
                            <p className="w-3/5 text-base">{project.more}</p>
                        </div>
                    </div>
                    <RelatedProjects projects={projects}/>
                </div>
            </main>
        </AppLayout>
    );
};

export default ProjectPage;
