interface FooterSocialLinkProps {
    name: string;
    link: string;
}

const FooterSocialLink = ({ name, link }: FooterSocialLinkProps) => {
    return ( 
        <button className="w-64 flex items-center justify-center border rounded-full">
            <a href={link} className="w-full p-2 text-slate-100">
                {name}
            </a>
        </button>
    );
}

export default FooterSocialLink;