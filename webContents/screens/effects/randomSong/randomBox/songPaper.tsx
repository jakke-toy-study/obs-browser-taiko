import React from "react"
import { GameOptions } from "../../../../types/gameOptions"
import { SongGenre } from "../../../../types/songGenre"
import PaperAsset from "../../../../../assets/svg/paper.svg?react";
import { SongLevel } from "../../../../types/songLevel";
import { genreColors } from "../../../../../common/genreColors";
import { courseColors } from "../../../../../common/courseColors";
import { wrapLangSpecificFont } from "../../../../utils/matchLangFont";

interface SongPaperProps {
    songName?: string,
    artistName?: string,
    genre?: SongGenre,
    level?: SongLevel
    gameOption?: GameOptions,
    width?: number,
    height?: number,
}

export const SongPaper: React.FC<SongPaperProps> = ({
    songName="Title", 
    artistName="Artist", 
    genre="Undefined",
    gameOption,
    level = {course: 'oni', level: 10},
    width = 808, 
    height = 608
}) => {
    return (
        <div>
            <PaperAsset width={width} height={height} />
            <div style={{position: "absolute", display: 'flex', top: 44, left: 40, flex: 1, flexDirection: 'column', gap: 12}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div 
                        style={{
                            background: genreColors[genre], 
                            fontSize: 40, 
                            textAlign:'center', 
                            padding: '4px 20px', 
                            borderRadius: 12, 
                            color: 'white',
                            whiteSpace: 'nowrap',
                            display: "inline-block"
                        }}
                        className="font-kukde"
                        >
                        {genre}
                    </div>
                    <div
                        className="font-kukde"
                        style={{
                            background: courseColors[level.course],
                            fontSize: 40,
                            marginLeft: 'auto',
                            padding: '4px 20px', 
                            borderRadius: '999px',
                            whiteSpace: 'nowrap',
                            color: 'white',
                            textAlign: 'center',
                            width: 140
                        }}>
                        ★ {level.level}
                    </div>
                </div>
                <div style={{fontSize: songName.length > 17 ? 40 : 60, width: 720, overflow: 'clip'}} className="font-kukde">
                    {wrapLangSpecificFont(songName)}
                </div>
                <hr style={{borderWidth: 4, borderColor: 'black'}}/>
                <div style={{fontSize: artistName.length > 17 ? 20 : 40, width: 720}}>
                    {wrapLangSpecificFont(artistName)}
                </div>
            </div>
        </div>
    )
}
