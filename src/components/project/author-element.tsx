interface AuthorElementProps {
    author: {
        image: string;
        name: string;
        job: string;
    };
}

const AuthorElement = ({ author }: AuthorElementProps) => {
    return (
        <li className="flex items-center gap-3">
            <img className="rounded-full size-8 ml-2" src={author.image} alt="" />
            <div className="flex flex-col content-center">
                <h3 className="text-sm font-medium">{author.name}</h3>
                <p className="text-xs text-slate-700">{author.job}</p>
            </div>
        </li>
    );
};

export default AuthorElement;
