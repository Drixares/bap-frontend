interface AuthorElementProps {
    author: {
        image: string;
        name: string;
        role: string;
    };
}

const AuthorElement = ({ author }: AuthorElementProps) => {
    return (
        <li className="flex items-center gap-3">
            <div className="rounded-full size-10 ml-2 overflow-hidden">
                <img className="w-full h-full object-cover" src={author.image} alt="" />
            </div>
            <div className="flex flex-col content-center">
                <h3 className="text-sm font-medium">{author.name}</h3>
                <p className="text-xs text-slate-700">{author.role}</p>
            </div>
        </li>
    );
};

export default AuthorElement;
