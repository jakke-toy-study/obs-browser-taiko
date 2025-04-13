import React from "react";
import { EffectWrapper, EffectHandle } from "../../../componentsCombined/effects/effectWrapper";
import "./sampleEffectStyle.css";

export const SampleEffectBoom = React.forwardRef<EffectHandle>((_, ref) => {
  return (
    <EffectWrapper ref={ref} cssClass="boom" className="effect-target">
      💥 Boom!
    </EffectWrapper>
  );
});