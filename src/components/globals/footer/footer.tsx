import FooterSocialLink from "./footer-social-link";
import FooterPageLink from "./footer-page-link";
import IFT from "../../../assets/Group.svg";
import DV from "../../../assets/Frame.svg";
import FooterHeading3 from "./footer-heading3";

const paths = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Projects",
        url: "/search",
    },
    {
        label: "Authors",
        url: "/search",
    },
];

const socials = [
    {
        name: "Facebook",
        link: "https://www.facebook.com/iftdevinci/",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/ift_devinci/",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/company/ift-devinci/",
    },
    {
        name: "Twitter",
        link: "https://x.com/IFT_devinci",
    },
];

const Footer = () => {
    return (
        <div className="w-full md:px-4 pt-72">
            <footer
                className="relative mx-auto w-full max-w-screen-2xl py-16 flex flex-col justify-center 
                bg-slate-950 gap-12 md:rounded-3xl md:mb-4 px-6 xs:px-12 md:px-24 overflow-hidden"
            >
                <h2 className="text-slate-50 text-3xl xs:text-4xl md:text-5xl font-extrabold">
                    Connect with us
                </h2>
                <div className="flex items-center gap-3 md:gap-5 max-md:flex-wrap">
                    {socials.map((social, index) => (
                        <FooterSocialLink
                            key={`footer:social:${index}`}
                            name={social.name}
                            link={social.link}
                        />
                    ))}
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-between gap-12">
                    <div className="w-48 flex flex-col justify-between">
                        <div className="flex justify-between">
                            <img src={IFT} alt="Logo IFT" />
                            <img src={DV} alt="Logo DeVinci" />
                        </div>
                        <p className="text-slate-100 mt-4 text-sm">
                            12 Avenue Léonard de Vinci 92400 Courbevoie, France
                        </p>
                    </div>
                    <div className="flex justify-between w-full max-w-72 gap-8">
                        <div className="flex flex-col">
                            <FooterHeading3>PAGES</FooterHeading3>
                            <ul className="space-y-2">
                                {paths.map((path, index) => (
                                    <FooterPageLink
                                        key={`footer:link:${index}`}
                                        name={path.label}
                                        link={path.url}
                                    />
                                ))}
                            </ul>
                        </div>
                        <div className="text-sm flex flex-col">
                            <FooterHeading3>CONTACT</FooterHeading3>
                            <ul className="space-y-2 text-sm xs:text-base text-slate-300">
                                <FooterPageLink
                                    link="tel:+33-01-41-16-70-00"
                                    name="+33 01 41 16 70 00"
                                />
                                <FooterPageLink
                                    link="mailto:dvic@devinci.fr"
                                    name="dvic@devinci.fr"
                                />
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute -bottom-44 left-1/2 transform -translate-x-1/2 w-3/4 h-40 rounded-[100%]
                    bg-primary-blue blur-3xl"
                />
            </footer>
        </div>
    );
};

export default Footer;
