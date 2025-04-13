import React, {
    forwardRef,
    useImperativeHandle,
    ReactNode,
} from "react";
import { useEffectController } from "./effectController";

export interface EffectHandle {
    play: () => void;
    pause: () => void;
    stop: () => void;
    isPlaying: () => boolean;
}

interface EffectWrapperProps {
    cssClass: string;
    children?: ReactNode;
    className?: string;
    top?: number | string;
    left?: number | string;
    zIndex?: number;
}

export const EffectWrapper = forwardRef<EffectHandle, EffectWrapperProps>(
    ({cssClass, children, className, top = 0, left = 0, zIndex = 100}, ref) => {
    const effect = useEffectController(cssClass);

    useImperativeHandle(ref, () => ({
        play: effect.play,
        pause: effect.pause,
        stop: effect.stop,
        isPlaying: effect.isPlaying
    }));


    return (
        <div
            ref={effect.ref as React.RefObject<HTMLDivElement>}
            className={className}
            style={{
                position: "absolute",
                top,
                left,
                zIndex, // ✅ 적용
                pointerEvents: "none",
            }}
        >
            {children}
        </div>
    );
});