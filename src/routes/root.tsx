import "../App.css";
import AppLayout from "../components/globals/app-layout";
// import Globe from "../assets/globe.png";
import ButtonLink from "../components/globals/button-link";
import { ArrowRight } from "lucide-react";
import fakedatas from "../datas/fake/home-categories.json";
import Category from "../components/home/category";
import { CategoryType } from "../types/category";
import SocialProof from "../components/home/social-proof";
import { TextEffectPerWord } from "../components/ui/text-effect-per-word";
import AnimatedHeading1 from "../components/home/heading1";
import ArtificialLives from "../assets/svg/artificialLives.svg";
import HumanLearning from "../assets/svg/humanLearning.svg";
import ResilientFutures from "../assets/svg/resilientFutures.svg";
import { Transition, Variants } from "motion/react";
import AnimatedLogo from "../components/home/animated-logos";
import { motion } from "motion/react";

const containerVariants: Variants = {
    initial: {
        rotate: 0,
    },
    rotate: {
        rotate: 360,
        transition: {
            duration: 1.5,
            type: "spring",
            bounce: 0.2,
            bounceDamping: 1,
            delay: 2.5,
        },
    },
};

const variants: Variants = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    grow: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1.4,
        },
    },
    counterRotate: {
        rotate: -360,
        transition: {
            duration: 1.5,
            type: "spring",
            bounce: 0.2,
            bounceDamping: 1,
            delay: 2.5,
        },
    },
};

const moveLogosTransition: Transition = {
    duration: 0.5,
    type: "spring",
    bounce: 0.2,
    bounceDamping: 1,
    delay: 2,
};

const moveLogosPositions = [
    {
        x: -130,
        y: -130,
        transition: moveLogosTransition,
    },
    {
        x: 70,
        y: -90,
        transition: moveLogosTransition,
    },
    {
        x: -90,
        y: 80,
        transition: moveLogosTransition,
    },
];

function Root() {
    return (
        <AppLayout>
            <header className="flex flex-col xl:flex-row justify-between w-full px-4 py-[110px] mx-auto max-w-screen-2xl">
                <div className="shrink-0 max-w-screen-xl">
                    <TextEffectPerWord delay={0.52}>
                        Institutive for Future Technologies
                    </TextEffectPerWord>
                    <AnimatedHeading1 />
                    <ButtonLink to="search" variant="primary" className="mt-10">
                        See our innovate projects
                        <ArrowRight />
                    </ButtonLink>
                </div>
                <motion.div
                    className="hidden xl:block relative w-full origin-center "
                    style={{
                        transformOrigin: "center center",
                    }}
                    variants={containerVariants}
                    initial="initial"
                    animate="rotate"
                >
                    <AnimatedLogo
                        logo={{ srcImg: ArtificialLives, title: "Artificial Lives" }}
                        variants={variants}
                        move={moveLogosPositions[0]}
                    />
                    <AnimatedLogo
                        logo={{ srcImg: HumanLearning, title: "Human Learning" }}
                        variants={variants}
                        move={moveLogosPositions[1]}
                    />
                    <AnimatedLogo
                        logo={{ srcImg: ResilientFutures, title: "Resilient Futures" }}
                        variants={variants}
                        move={moveLogosPositions[2]}
                    />
                    {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-5 rounded-full bg-red-500" /> */}
                </motion.div>
                {/* <img
                    src={Globe}
                    alt=""
                    className="max-w-[54rem] w-2/3 -mr-80 max-xl:mx-auto max-xl:w-full max-xl:mt-3"
                /> */}
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
