import { Dispatch, SetStateAction } from "react";
import { AuthorType } from "../../types/author";
import ImagePlaceholder from "../../assets/svg/image-placeholder.svg";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthorPopupProps {
    author: AuthorType;
    onClose: Dispatch<SetStateAction<AuthorType | null>>;
}

const AuthorPopup = ({ author, onClose }: AuthorPopupProps) => {
    return (
        <>
            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                z-50 max-w-xl w-full bg-white rounded-xl p-5 flex flex-col gap-4"
            >
                <div className="w-full h-60 sm:h-96 rounded-xl overflow-hidden">
                    <img
                        src={ImagePlaceholder}
                        alt={author.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-3">
                        <h3 className="text-gray-950 text-2xl font-semibold">{author.name}</h3>
                        <span className="text-slate-500">{author.job}</span>
                    </div>
                    <p className="text-slate-950">{author.description}</p>
                </div>
                <hr className="border-slate-200" />
                <div className="flex flex-col gap-3">
                    <span className="text-slate-500 text-xl font-semibold ">Projects</span>
                    <div className="flex flex-col gap-3">
                        {author.projects.map((project, index) => (
                            <Link
                                to={`/project/${project.slug}`}
                                key={`author:project:${index}`}
                                className="flex items-center justify-between gap-4 pr-8 transition-colors duration-200 group"
                            >
                                <div className="flex flex-col">
                                    <h3 className="text-gray-950 text-lg font-semibold group-hover:underline">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-800 text-sm">{project.description}</p>
                                </div>
                                <ArrowUpRight size={24} className="group-hover:text-primary-blue" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="fixed inset-0 bg-slate-50/70 top-0 left-0 z-40"
                onClick={() => onClose(null)}
            />
        </>
    );
};

export default AuthorPopup;
