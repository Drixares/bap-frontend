import { TextEffect } from "./text-effect";

export function TextEffectPerWord({children} : { children: string }) {
  return (
    <TextEffect per='word' as='h3' preset='blur' delay={1}>
        {children}
    </TextEffect>
  );
}
