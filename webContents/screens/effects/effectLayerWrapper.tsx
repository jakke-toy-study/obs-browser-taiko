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
import { RandomSongEffect } from "./randomSong/randomSongEffect";
  
  export interface EffectLayerWrapperHandle {
    play: (id: string) => void;
    stop: (id: string) => void;
  }
  
  export const EffectLayerWrapper = forwardRef<EffectLayerWrapperHandle>((_, ref) => {
    const layerRef = useRef<EffectLayerHandle>(null);
    const boomRef = useRef<EffectHandle>(null);
    const randomSongRef = useRef<EffectHandle>(null);
  
    useEffect(() => {
      if (layerRef.current) {
        if(boomRef.current) layerRef.current.registerEffect("boom", boomRef.current);
        if(randomSongRef.current) layerRef.current.registerEffect("randomSong", randomSongRef.current);
      }
  
      return () => {
        layerRef.current?.unregisterEffect("boom");
        layerRef.current?.unregisterEffect("randomSong");
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
          <RandomSongEffect ref={randomSongRef} />
        </EffectLayer>
      </div>
    );
  });
  