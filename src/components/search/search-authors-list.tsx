import { Dispatch, SetStateAction } from "react";
import { AuthorType } from "../../types/author";
import AuthorCard from "./author-card";
import { motion } from "motion/react";
import { useSearchParams } from "react-router-dom";

interface AuthorCardProps {
    authors: AuthorType[];
    setSelectedAuthor: Dispatch<SetStateAction<AuthorType | null>>;
}

const SearchAuthorsList = ({ authors, setSelectedAuthor }: AuthorCardProps) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    const filteredAuthors = authors.filter((author) =>
        author.name
            .replace(/\s/g, "")
            .toLowerCase()
            .includes(query.replace(/\s/g, "").toLowerCase())
    );

    if (filteredAuthors.length === 0) {
        return (
            <div className="flex flex-col justify-center gap-4 pt-8">
                <h1 className="text-2xl md:text-4xl font-bold text-slate-800">No authors found</h1>
                <p className="text-lg md:text-xl font-medium text-slate-700">
                    Try searching with a different keyword
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10">
            {filteredAuthors.map((author: AuthorType, index: number) => (
                <motion.div
                    key={`author:${index}`}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.3, delay: (index % 4) * 0.1 },
                    }}
                    viewport={{ once: true }}
                >
                    <AuthorCard author={author} setSelectedAuthor={setSelectedAuthor} />
                </motion.div>
            ))}
        </div>
    );
};

export default SearchAuthorsList;
