import { useRef, useState } from "react";

export interface EffectController {
    play(): void,
    pause(): void,
    stop(): void;
    isPlaying(): boolean;
    ref: React.RefObject<HTMLElement>
}

export function useEffectController(cssClassName: string): EffectController {
    const ref = useRef<HTMLElement>(null);
    const [playing, setPlaying] = useState(false);

    const play = () => {
        const el = ref.current;
        if (!el) return;

        el.classList.remove(cssClassName);
        void el.offsetWidth;
        el.classList.add(cssClassName);
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
        el.classList.remove(cssClassName);
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