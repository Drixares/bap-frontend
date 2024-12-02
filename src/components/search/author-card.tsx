import ImagePlaceholder from "../../assets/svg/image-placeholder.svg";

import { Link } from "react-router-dom";
import { AuthorType } from "../../types/author";

interface AuthorProps {
    author: AuthorType;
}

const AuthorCard = ({ author }: AuthorProps) => {
    return (
        <Link to="#" className="w-full flex flex-col gap-4 group">
            <div className="w-full h-80 rounded-2xl flex justify-center items-center overflow-hidden">
                <img
                    src={ImagePlaceholder}
                    alt={author.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="flex flex-col gap-1 mx-2">
                <h3 className="text-xl font-semibold text-slate-950">{author.name}</h3>
                <p className="text-slate-600">{author.job}</p>
            </div>
        </Link>
    );
};

export default AuthorCard;
