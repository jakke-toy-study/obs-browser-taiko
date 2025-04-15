import React from "react"
import { BoxComponent } from "../randomBox/boxComponent";
import { BoxMattComponent } from "../randomBox/boxMattComponent";
import { Hand } from "../randomBox/hand";
import { HandNoPaper } from "../randomBox/handNoPaper";
import { SongPaper } from "../randomBox/songPaper";
import './randomSongEffectStyle.css';

export const RandomSongEffectCore:React.FC = () => {
    return (
        <div style={{width: 1920, height: 1080}} className="random-song-core">
            {/* Box */}
            <div className="random-box" style={{position: "absolute", scale: '70%', left: 540, top: 300}}>
                <div style={{position: 'absolute', top: 60}}>
                    <BoxComponent width={520} height={520} />
                </div>
                <div style={{width: 128, position: 'absolute', left: 196}} className="random-hand-nopaper">
                    <HandNoPaper />
                </div>
                <div style={{width: 128, position: 'absolute', left: 196}} className="random-hand-paper">
                    <Hand />
                </div>
                <div style={{position: 'absolute', top: 60}}>
                    <BoxMattComponent width={520} height={520} />
                </div>
            </div>
            {/* Paper */}
            <div style={{position: 'absolute', top: 60, left: 320, scale: '60%'}} className="random-song-paper">
                <SongPaper genre={"Game Music"} songName="Synthesis." artistName="tn-shi, 山神カルタ" />
            </div>
        </div>
    )
}
