import "../App.css";
import AppLayout from "../components/globals/app-layout";
import Globe from "../assets/globe.png";
import ButtonLink from "../components/globals/button-link";
import { ArrowRight } from "lucide-react";
import fakedatas from "../datas/fake/home-categories.json";
import Category from "../components/home/category";
import { CategoryType } from "../types/category";
import SocialProof from "../components/home/social-proof";
import { motion } from "motion/react";
import { TextEffectPerWord } from "../components/ui/text-effect-per-word";

function Root() {
    return (
        <AppLayout>
            <header className="flex flex-col xl:flex-row justify-between w-full px-4 py-[110px] mx-auto max-w-screen-2xl">
                <div className="shrink-0 max-w-screen-xl">
                    {/* <motion.h3 
                        initial={{ opacity: 0, filter: 'blur(10px) brightness(0%)' }} 
                        animate={{ opacity: 1, filter: 'blur(0px) brightness(100%)' }} 
                        transition={{ duration: 1, staggerChildren: 0.01 }}
                        className="text-base md:text-xl xl:text-2xl font-bold"
                    >
                        {"Institutive for Future Technologies".split("").map((char, index) => (
                            <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h3> */}
                    <TextEffectPerWord>
                        Institutive for Future Technologies
                    </TextEffectPerWord>
                    <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold flex flex-col xl:gap-1">
                        <motion.span 
                            initial={{ y: 50, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: .6, delay: 0}}
                        >
                            Inventing
                        </motion.span>
                        <motion.span 
                            initial={{ y: 50, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: .6, delay: 0.5 }}
                        >
                            Technologies that
                        </motion.span>
                        <motion.span 
                            initial={{ y: 50, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: .6, delay: 1 }}
                            className="text-slate-400"
                        >
                            Shape the Future
                        </motion.span>
                    </h1>
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