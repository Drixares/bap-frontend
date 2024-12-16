import { motion, Transition, Variants } from "motion/react";
import AnimatedLogo from "./animated-logos";
import ArtificialLives from "../../assets/svg/artificialLives.svg";
import HumanLearning from "../../assets/svg/humanLearning.svg";
import ResilientFutures from "../../assets/svg/resilientFutures.svg";

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

const AnimatedLogoContainer = () => {
    return (
        <motion.div
            // ref={scope}
            className="hidden xl:block relative w-full origin-center "
            style={{
                transformOrigin: "center center",
            }}
            initial="initial"
            animate={["rotate"]}
            variants={containerVariants}
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
    );
};

export default AnimatedLogoContainer;
