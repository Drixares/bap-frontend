import { Dispatch, SetStateAction } from "react";
import { AuthorType } from "../../types/author";
import AuthorCard from "./author-card";

interface AuthorCardProps {
    authors: AuthorType[];
    setSelectedAuthor: Dispatch<SetStateAction<AuthorType | null>>;
}

const SearchAuthorsList = ({ authors, setSelectedAuthor }: AuthorCardProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10">
            {authors.map((author: AuthorType, index: number) => (
                <AuthorCard
                    key={`author:${index}`}
                    author={author}
                    setSelectedAuthor={setSelectedAuthor}
                />
            ))}
        </div>
    );
};

export default SearchAuthorsList;
