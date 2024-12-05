import "../App.css";
import AppLayout from "../components/globals/app-layout";
import Globe from "../assets/globe.png";
import ButtonLink from "../components/globals/button-link";
import { ArrowRight } from "lucide-react";
import fakedatas from "../datas/fake/home-categories.json";
import Category from "../components/home/category";
import { CategoryType } from "../types/category";
import SocialProof from "../components/home/social-proof";
import { TextEffectPerWord } from "../components/ui/text-effect-per-word";
import AnimatedHeading1 from "../components/home/heading1";

function Root() {
    return (
        <AppLayout>
            <header className="flex flex-col xl:flex-row justify-between w-full px-4 py-[110px] mx-auto max-w-screen-2xl">
                <div className="shrink-0 max-w-screen-xl">
                    <TextEffectPerWord>Institutive for Future Technologies</TextEffectPerWord>
                    <AnimatedHeading1 />
                    <ButtonLink to="search" variant="primary" className="mt-10">
                        See our innovate projects
                        <ArrowRight />
                    </ButtonLink>
                </div>
                <img
                    src={Globe}
                    alt=""
                    className="max-w-[54rem] w-2/3 -mr-80 max-xl:mx-auto max-xl:w-full max-xl:mt-3"
                />
            </header>
            <SocialProof />
            <div className="flex flex-col gap-36 w-full max-w-screen-2xl mx-auto px-4">
                {fakedatas.map((category) => (
                    <Category
                        key={`category:${category.slug}`}
                        category={category as CategoryType}
                    />
                ))}
            </div>
        </AppLayout>
    );
}

export default Root;
