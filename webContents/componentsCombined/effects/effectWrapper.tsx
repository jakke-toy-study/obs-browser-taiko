import React, {
    forwardRef,
    useImperativeHandle,
    ReactNode,
    useState,
    useEffect,
    useRef,
} from "react";
import { useEffectController } from "./effectController";

export interface EffectHandle {
    play: () => void;
    pause: () => void;
    stop: () => void;
    isPlaying: () => boolean;
}

interface EffectWrapperProps {
    children?: ReactNode;
    className?: string;
    top?: number | string;
    left?: number | string;
    zIndex?: number;
}

export const EffectWrapper = forwardRef<EffectHandle, EffectWrapperProps>(
    ({children, className, top = 0, left = 0, zIndex = 100}, ref) => {
    const effect = useEffectController();
    const [visible, setVisible] = useState(false);
    const activeAnimations = useRef(new Set<string>());

    const elRef = effect.ref;
    
    useEffect(() => {
      const el = elRef.current;
      if (!el) return;
      
      const handleEnd = (e: AnimationEvent) => {
        const name = e.animationName;
        activeAnimations.current.delete(name);
        
        if (activeAnimations.current.size === 0) {
          setVisible(false);
        }
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

          const el = elRef.current;
          if (!el) return;

          activeAnimations.current.clear();

          const animatedElements = el.querySelectorAll("*");
          animatedElements.forEach((node) => {
            const style = getComputedStyle(node);
            const names = style.animationName.split(",").map((n) => n.trim());
            names.forEach((name) => {
              if (name !== "none") {
                activeAnimations.current.add(name);
              }
            });
          });
        
          console.log("등록된 애니메이션:", activeAnimations.current);
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