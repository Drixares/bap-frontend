import { Link } from "react-router-dom";

interface FooterSocialLinkProps {
    name: string;
    link: string;
}

const FooterSocialLink = ({ name, link }: FooterSocialLinkProps) => {
    return ( 
        <Link 
            to={link} 
            className="w-full p-2 text-slate-100 border border-slate-100 hover:text-slate-400
            hover:border-slate-400 transition-colors rounded-full 
            text-center text-base"
        >
            {name}
        </Link>
    );
}

export default FooterSocialLink;