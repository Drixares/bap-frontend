import FooterSocialLink from "./footer-social-link";
import FooterPageLink from "./footer-page-link";
import IFT from "../../assets/Group.svg";
import DV from "../../assets/Frame.svg";

const paths = [
    {
        "label": "Home",
        "url": "/",
    },
    {
        "label": "Projects",
        "url": "/search",
    },
    {
        "label": "Authors",
        "url": "/search",
    },
]

const Footer = () => {
    return ( 
        <footer className="m-20 mb-10 px-24 py-16 rounded-3xl bg-slate-950 flex flex-col justify-center">
            <h2 className="text-slate-50 text-5xl font-extrabold">Connect with us</h2>
            <div className="flex justify-between py-12">
                <FooterSocialLink name="Facebook" link="https://www.facebook.com/iftdevinci/"></FooterSocialLink>
                <FooterSocialLink name="Instagram" link="https://www.instagram.com/ift_devinci/"></FooterSocialLink>
                <FooterSocialLink name="LinkedIn" link="https://www.linkedin.com/company/ift-devinci/"></FooterSocialLink>
                <FooterSocialLink name="Twitter" link="https://x.com/IFT_devinci"></FooterSocialLink>
            </div>
            <div className="h-36 flex justify-between">
                <div className="w-48 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <img src={IFT} alt="Logo IFT" />
                        <img src={DV} alt="Logo DeVinci" />
                    </div>
                    <p className="text-slate-100 text-sm">12 Avenue Léonard de Vinci 92400 Courbevoie, France</p>
                </div>
                <div className="flex w-72 justify-between">
                    <ul className="flex flex-col">
                        <h3 className="text-slate-100 text-xl mb-3">PAGES</h3>
                        {paths.map((path, index) => (
                            <FooterPageLink 
                                key={`footer:link:${index}`}
                                name={path.label} 
                                link={path.url}
                            />
                        ))}
                    </ul>
                    <ul className="text-slate-100 text-sm flex flex-col">
                        <h3 className="text-xl mb-3">CONTACT</h3>
                        <li className="mb-2"><a href="tel:+33-01-41-16-70-00">+33 01 41 16 70 00</a></li>
                        <li><a href="mailto:dvic@devinci.fr">dvic@devinci.fr</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;