import { useRef, useState } from "react";

export interface EffectController {
    play(): void,
    pause(): void,
    stop(): void;
    isPlaying(): boolean;
    ref: React.RefObject<HTMLElement>
}

export function useEffectController(): EffectController {
    const ref = useRef<HTMLElement>(null);
    const [playing, setPlaying] = useState(false);

    const play = () => {
        const el = ref.current;
        if (!el) return;

        if(el.classList)
        void el.offsetWidth;
        setPlaying(true);
    }

    const pause = () => {
        const el = ref.current;
        if (!el) return;
        el.style.animationPlayState = "paused";
        setPlaying(false);
    }

    const stop = () => {
        const el = ref.current;
        if (!el) return;
        el.style.animationPlayState = "initial";
        setPlaying(false);
    }

    return {
        play,
        pause,
        stop,
        isPlaying: () => playing,
        ref
    }
}