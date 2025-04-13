import React, {
    useEffect,
    useImperativeHandle,
    useRef,
    forwardRef,
  } from "react";
  import { EffectLayer } from "../../componentsCombined/effects/effectLayer";
  import { EffectLayerHandle } from "../../componentsCombined/effects/effectLayerHandle";
  import { SampleEffectBoom } from "../../screens/effects/sampleEffect/sampleEffectBoom";
  import { EffectHandle } from "../../componentsCombined/effects/effectWrapper";
  
  export interface EffectLayerWrapperHandle {
    play: (id: string) => void;
    stop: (id: string) => void;
  }
  
  export const EffectLayerWrapper = forwardRef<EffectLayerWrapperHandle>((_, ref) => {
    const layerRef = useRef<EffectLayerHandle>(null);
    const boomRef = useRef<EffectHandle>(null);
  
    useEffect(() => {
      if (layerRef.current && boomRef.current) {
        layerRef.current.registerEffect("boom", boomRef.current);
      }
  
      return () => {
        layerRef.current?.unregisterEffect("boom");
      };
    }, []);
  
    useImperativeHandle(ref, () => ({
      play: (id: string) => {
        layerRef.current?.play(id);
      },
      stop: (id: string) => {
        layerRef.current?.stop(id);
      },
    }));
  
    return (
      <div style={{zIndex: 999}}>
        <EffectLayer ref={layerRef}>
          <SampleEffectBoom ref={boomRef} />
        </EffectLayer>
      </div>
    );
  });
  