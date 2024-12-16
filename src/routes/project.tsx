import { useParams } from "react-router-dom";
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

const ProjectPage = () =>  {
    // Get the project slug from the URL
    const { slug } = useParams();

    return (
        <AppLayout>
            <main className="my-16 ">
                <div className="bg-red-300 flex flex-col m-auto max-w-screen-lg">
                    <h1 className="text-6xl">{slug}</h1>
                    <img className="w-full my-11" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1qC7qPtMAOUR3-ZQsafgfhwmMoyVd5f1hQ&s" alt="project img 1" />
                    <div className="flex justify-between">
                        <div>
                            <div className="mb-6">
                                <h2 className="text-xl  font-semibold mb-4">Date</h2>
                                <p className="text-base">JSP c'est quand</p>
                            </div>
                            <div className="my-6">
                                <h2 className="text-xl  font-semibold my-4">Thematic</h2>
                                <p className="text-base">Faudra mettre un thème</p>
                            </div>
                            <div className="my-6">
                                <h2 className="text-xl  font-semibold my-4">Members</h2>
                                <ul>
                                    <li className="flex my-4">
                                        <img className="rounded-full w-9 h-9 mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1qC7qPtMAOUR3-ZQsafgfhwmMoyVd5f1hQ&s" alt="" />
                                        <div className="flex flex-col content-center">
                                            <h3 className="text-sm font-medium">Mario</h3>
                                            <p className="text-xs">Plombier</p>
                                        </div>
                                    </li>
                                    <li className="flex my-4">
                                        <img className="rounded-full w-9 h-9 mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1qC7qPtMAOUR3-ZQsafgfhwmMoyVd5f1hQ&s" alt="" />
                                        <div className="flex flex-col content-center">
                                            <h3 className="text-sm font-medium">Mario</h3>
                                            <p className="text-xs">Plombier</p>
                                        </div>
                                    </li>
                                    <li className="flex my-4">
                                        <img className="rounded-full w-9 h-9 mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1qC7qPtMAOUR3-ZQsafgfhwmMoyVd5f1hQ&s" alt="" />
                                        <div className="flex flex-col content-center">
                                            <h3 className="text-sm font-medium">Mario</h3>
                                            <p className="text-xs">Plombier</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-blue-300 w-3/5">
                            <h2 className="text-3xl font-semibold mb-4">About</h2>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.</p>
                            <img className="w-full my-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1qC7qPtMAOUR3-ZQsafgfhwmMoyVd5f1hQ&s" alt="project img 1" />
                            <h2 className="text-3xl font-semibold mb-4">Results</h2>
                            <p className="text-base">We understand that motivation plays a crucial role in maintaining an  active lifestyle. That's why we've incorporated exciting features like  badges, rewards, and challenges within Sportly. Achieve your goals and  unlock various milestones to earn recognition and stay motivated on your fitness journey. So, whether you're a beginner looking to kickstart  your fitness routine or a seasoned athlete striving for new personal  bests, Sportly is your ideal companion. Download the app today and  experience the joy of tracking your sport activity like never before!</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between gap-10">
                            <img className="w-full mt-11" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1qC7qPtMAOUR3-ZQsafgfhwmMoyVd5f1hQ&s" alt="project img 1" />
                            <img className="w-full mt-11" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1qC7qPtMAOUR3-ZQsafgfhwmMoyVd5f1hQ&s" alt="project img 1" />
                        </div>
                        <img className="w-full mt-5 mb-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1qC7qPtMAOUR3-ZQsafgfhwmMoyVd5f1hQ&s" alt="project img 1" />
                        <div className="flex flex-col items-end">
                            <h2 className="w-3/5 text-3xl font-semibold mb-4">More sections</h2>    
                            <p className="w-3/5 text-base">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.</p>
                        </div>
                    </div>
                    <RelatedProjects projects={projects}/>
                </div>
            </main>
        </AppLayout>
    );
};

export default ProjectPage;
