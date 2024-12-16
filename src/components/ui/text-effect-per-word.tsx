import { PresetType, TextEffect } from "./text-effect";

interface TextEffectPerWordProps {
    children: string;
    delay: number;
    preset: PresetType | undefined;
}

export function TextEffectPerWord({ children, delay, preset }: TextEffectPerWordProps) {
    return (
        <TextEffect per="word" as="h3" preset={preset} delay={delay}>
            {children}
        </TextEffect>
    );
}
