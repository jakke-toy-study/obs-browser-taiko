import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactNode,
} from "react";
import { EffectHandle } from "./effectWrapper";
import { EffectLayerHandle } from "./effectLayerHandle";

interface Props {
  children?: ReactNode;
}

export const EffectLayer = forwardRef<EffectLayerHandle, Props>(
  ({ children }, ref) => {
    const effectMap = useRef(new Map<string, EffectHandle>());

    useImperativeHandle(ref, () => ({
      play: (id) => {
        effectMap.current.get(id)?.play();
      },
      stop: (id) => {
        effectMap.current.get(id)?.stop();
      },
      registerEffect: (id, handle) => {
        effectMap.current.set(id, handle);
      },
      unregisterEffect: (id) => {
        effectMap.current.delete(id);
      },
    }));

    return (
      <div
        className="effect-layer"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    );
  }
);
