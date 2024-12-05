import { motion } from "motion/react";

const AnimatedHeading1 = () => {
    return (
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold flex flex-col xl:gap-1">
            <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0 }}
            >
                Inventing
            </motion.span>
            <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                Technologies that
            </motion.span>
            <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-slate-400"
            >
                Shape the Future
            </motion.span>
        </h1>
    );
};

export default AnimatedHeading1;
