import Authors from './authors.tsx';

interface ProjectProps {
    project: {
        title: string;
        description: string;
        image: string;
        date: string;
        members: { name: string; image: string }[];
    };
}

const Project = ( {project}: ProjectProps ) => {
    return (
        <div className='w-4/12 border-8 border-transparent h-fit'>
            <div className="w-full h-80 rounded-2xl flex justify-center items-center overflow-hidden"><img src={project.image} alt={project.title} className="w-full"></img></div>
            <p className=' text-xs mt-2 ml-1 text-slate-800'> {project.date} </p>
            <h3 className='font-bold text-lg ml-1'>{project.title}</h3>
            <p className='text-xs mb-3 ml-1'>{project.description}</p>
            <Authors members = {project.members}/>
        </div>
    );
}

export default Project;