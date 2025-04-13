import React, {
    forwardRef,
    useImperativeHandle,
    ReactNode,
    useState,
    useEffect,
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
    const [visible, setVisible] = useState(false);

    const elRef = effect.ref;
    
    useEffect(() => {
        const el = elRef.current;
        if (!el) return;
  
        const handleEnd = () => {
          setVisible(false);
        };
  
        el.addEventListener("animationend", handleEnd);
        return () => {
          el.removeEventListener("animationend", handleEnd);
        };
    }, [elRef]);

    useImperativeHandle(ref, () => ({
        play: () => {
          setVisible(true);
          effect.play();
        },
        pause: () => {
          effect.pause();
        },
        stop: () => {
          setVisible(false);
          effect.stop();
        },
        isPlaying: effect.isPlaying,
      }));


    return (
        <div
            ref={effect.ref as React.RefObject<HTMLDivElement>}
            className={className}
            style={{
                position: "absolute",
                top,
                left,
                zIndex,
                pointerEvents: "none",
                display: visible ? "inline-block" : "none"
            }}
        >
            {children}
        </div>
    );
});