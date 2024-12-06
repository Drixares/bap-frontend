import { TextEffect } from "./text-effect";

interface TextEffectPerWordProps {
    children: string;
    delay: number;
}

export function TextEffectPerWord({ children, delay }: TextEffectPerWordProps) {
    return (
        <TextEffect per="word" as="h3" preset="blur" delay={delay}>
            {children}
        </TextEffect>
    );
}
