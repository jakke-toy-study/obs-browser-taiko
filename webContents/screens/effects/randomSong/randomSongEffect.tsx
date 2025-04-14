import React from "react"
import { EffectHandle, EffectWrapper } from "../../../componentsCombined/effects/effectWrapper"
import { RandomSongEffectCore } from "./core/randomSongEffectCore";
import './randomSongEffectStyle.css';

export const RandomSongEffect = React.forwardRef<EffectHandle>((_, ref) => {
    return (
        <EffectWrapper ref={ref}>
            <RandomSongEffectCore />
        </EffectWrapper>
    );
});
