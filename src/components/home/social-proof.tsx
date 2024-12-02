import Recital from "../../assets/svg/reciTAL.svg";
import Lynxter from "../../assets/svg/lynxter.svg";
import Sonos from "../../assets/svg/sonos.svg";
import Saarlandes from "../../assets/svg/saarlandes.svg";

const sponsors = [
    { name: "ReciTAL", image: Recital },
    { name: "Lynxter", image: Lynxter },
    { name: "Sonos", image: Sonos },
    { name: "Saarlandes", image: Saarlandes },
];

const SocialProof = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 pb-72 px-4">
            <div className="flex items-center gap-8 text-xl">
                <p className="inline-flex items-center gap-2">
                    <span className="text-primary-blue font-extrabold">100+</span>
                    <span className="text-gray-950 font-medium">articles</span>
                </p>
                <p className="inline-flex items-center gap-2">
                    <span className="text-primary-blue font-extrabold">20+</span>
                    <span className="text-gray-950 font-medium">collaborators</span>
                </p>
            </div>
            <div className="gap-8 grid grid-cols-2 md:grid-cols-4">
                {sponsors.map((sponsor, index) => (
                    <div
                        key={`sponsor:${index}`}
                        className="aspect-square max-w-36 w-full rounded-full overflow-hidden bg-slate-200 p-2"
                    >
                        <img
                            src={sponsor.image}
                            alt={sponsor.name + " logo"}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialProof;
