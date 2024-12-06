import { motion, Variant, Variants } from "framer-motion";
import LogoBlock from "./logo-block";

interface AnimatedLogosProps {
    variants: Variants;
    move: Variant;
    logo: {
        srcImg: string;
        title: string;
    };
}

const AnimatedLogo = ({ variants, move, logo }: AnimatedLogosProps) => {
    return (
        <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            variants={{
                ...variants,
                move: move,
            }}
            initial="initial"
            animate={["grow", "move"]}
        >
            <LogoBlock {...logo} size={20} />
        </motion.div>
    );
};

export default AnimatedLogo;
