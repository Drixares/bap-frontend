import { Link } from "react-router-dom";

interface FooterPageLinkProps {
    name: string;
    link: string;
}

const FooterPageLink = ({ name, link }: FooterPageLinkProps) => {
    return ( 
        <li className="text-slate-300 text-sm xs:text-base mb-2">
            <Link to={link}>
                {name}
            </Link>
        </li>
    );
}
 
export default FooterPageLink;