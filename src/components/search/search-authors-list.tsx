import { Dispatch, SetStateAction } from "react";
import { AuthorType } from "../../types/author";
import AuthorCard from "./author-card";
import { motion } from "motion/react";

interface AuthorCardProps {
    authors: AuthorType[];
    setSelectedAuthor: Dispatch<SetStateAction<AuthorType | null>>;
}

const SearchAuthorsList = ({ authors, setSelectedAuthor }: AuthorCardProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10">
            {authors.map((author: AuthorType, index: number) => (
                <motion.div
                    key={`project:${index}`}
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
