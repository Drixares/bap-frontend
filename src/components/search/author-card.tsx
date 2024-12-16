import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import ImagePlaceholder from "../../assets/svg/image-placeholder.svg";
import { AuthorType } from "../../types/author";
import { Dispatch, SetStateAction } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthorProps {
    author: AuthorType;
    setSelectedAuthor: Dispatch<SetStateAction<AuthorType | null>>;
}

const AuthorCard = ({ author }: AuthorProps) => {
    return (
        <MorphingDialog
            transition={{
                type: "spring",
                bounce: 0.05,
                duration: 0.25,
            }}
        >
            <MorphingDialogTrigger
                style={{
                    borderRadius: "12px",
                }}
                className="w-full flex flex-col gap-4 group"
            >
                <div className="w-full h-80 rounded-2xl overflow-hidden" tabIndex={0}>
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
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
                <MorphingDialogContent
                    style={{
                        borderRadius: "24px",
                    }}
                    className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
                >
                    <MorphingDialogImage
                        src={ImagePlaceholder}
                        alt={author.name}
                        className="h-full w-full"
                    />
                    <div className="p-6">
                        <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                            {author.name}
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                            {author.job}
                        </MorphingDialogSubtitle>
                        <MorphingDialogDescription
                            disableLayoutAnimation
                            variants={{
                                initial: { opacity: 0, scale: 0.8, y: 100 },
                                animate: { opacity: 1, scale: 1, y: 0 },
                                exit: { opacity: 0, scale: 0.8, y: 100 },
                            }}
                        >
                            <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                                {author.description}
                            </p>
                            <div className="flex flex-col gap-3 mt-4">
                                <span className="text-slate-500 text-xl font-semibold ">
                                    Projects
                                </span>
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
                                                <p className="text-slate-800 text-sm">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <ArrowUpRight
                                                size={24}
                                                className="group-hover:text-primary-blue"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className="text-zinc-50" />
                </MorphingDialogContent>
            </MorphingDialogContainer>
        </MorphingDialog>
    );
};

export default AuthorCard;
