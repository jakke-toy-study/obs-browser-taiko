import React, {
    forwardRef,
    useImperativeHandle,
    ReactNode,
} from "react";
import { useEffectController, EffectController } from "./effectController";

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
}

export const EffectWrapper = forwardRef<EffectHandle, EffectWrapperProps>(({cssClass, children, className}, ref) => {
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
        >
            {children}
        </div>
    );
});