import Project from './project.tsx';
import ButtonLink from '../globals/button-link.tsx';
import { ArrowRight } from 'lucide-react';

interface CategoryProps {
    category: {
        title: string;
        description: string;
        image: string;
        projects: { title: string; description: string; image: string; date: string; members: { name: string; image: string }[] }[];
    };
}

const Category = ( {category}: CategoryProps ) => {
    return(
        <div className="mb-20 max-w-screen-2xl mx-auto">
            <div className='flex justify-between mb-5'>
                <div className='flex'>
                    <h2 className='ml-20 mr-5 text-3xl text-gray-900 font-bold'>{category.title}</h2>
                    <img src={category.image} alt={category.title} className='h-10 rounded-md'></img>
                </div>
                <div className='mr-20 w-3/6'>
                    <p className='text-sm text-slate-700'>{category.description}</p>
                </div>
            </div>
            <div className='flex justify-between mr-20 ml-20'>
                {category.projects.map((project, index) => (
                    <Project key={index} project={project} />
                ))}
            </div>
            <div className='flex justify-center'>
                <ButtonLink to="/search" variant="secondary">
                    See more projects
                    <ArrowRight
                        size={24} 
                        className='group-hover:-rotate-45 transition-transform duration-300'>    
                    </ArrowRight>
                </ButtonLink>
            </div>
        </div>
    );

};

export default Category;