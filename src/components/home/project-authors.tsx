interface AuthorProps {
    authors: { name: string; image: string }[];
}

const ProjectAuthors = ({ authors }: AuthorProps) => {
    const string = authors[0].name + " and " + (authors.length - 1) + " more";
    const firstTwoAuthors = authors.slice(0, 2);

    return (
        <div className="flex items-center gap-2 mx-2">
            <div className="flex items-center -space-x-2.5">
                {firstTwoAuthors.map((author, index) => (
                    <div
                        key={`author:${index}`}
                        className="size-6 rounded-3xl overflow-hidden border-2 border-slate-500"
                    >
                        <img
                            src={author.image}
                            alt={author.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <p className="text-sm font-medium text-gray-600">{string}</p>
        </div>
    );
};

export default ProjectAuthors;
