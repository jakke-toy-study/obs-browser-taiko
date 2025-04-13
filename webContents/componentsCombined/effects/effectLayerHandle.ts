import { EffectHandle } from "./effectWrapper";

export interface EffectLayerHandle {
  play: (id: string) => void;
  stop: (id: string) => void;
  registerEffect: (id: string, ref: EffectHandle) => void;
  unregisterEffect: (id: string) => void;
}