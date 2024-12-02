import ImagePlaceholder from "../../assets/svg/image-placeholder.svg";
import { AuthorType } from "../../types/author";
import { Dispatch, SetStateAction } from "react";

interface AuthorProps {
    author: AuthorType;
    setSelectedAuthor: Dispatch<SetStateAction<AuthorType | null>>;
}

const AuthorCard = ({ author, setSelectedAuthor }: AuthorProps) => {
    return (
        <button
            onClick={() => setSelectedAuthor(author)}
            className="w-full flex flex-col gap-4 group"
        >
            <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img
                    src={ImagePlaceholder}
                    alt={author.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="space-y-1 text-start mx-2">
                <h3 className="text-xl font-semibold text-slate-950">{author.name}</h3>
                <p className="text-slate-600">{author.job}</p>
            </div>
        </button>
    );
};

export default AuthorCard;
