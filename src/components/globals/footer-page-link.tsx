interface FooterPageLinkProps {
    name: string;
    link: string;
}

const FooterPageLink = ({ name, link }: FooterPageLinkProps) => {
    return ( 
        <li className="text-slate-300 text-base mb-2">
            <a href={link}>
                {name}
            </a>
        </li>
    );
}
 
export default FooterPageLink;