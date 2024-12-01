interface AuthorProps {
    members: { name: string; image: string }[];
}

const Authors:React.FC<AuthorProps> = ({members}) => {
    let string = members[0].name + " and " + (members.length - 1) + " more";
    let images = [members[0].image , members[1].image];
    return (
        <div className='flex items-center h-8'>
            <div className='w-2/12 h-8'>
                <img src={images[1]} alt={members[1].name} className='absolute h-8 ml-6 shadow-md rounded-3xl'></img>
                <img src={images[0]} alt={members[0].name} className='absolute h-8 ml-3 shadow-md rounded-3xl'></img>
            </div>
            <p className='text-xs font-bold'>{string}</p>
        </div>
    )
}

export default Authors;