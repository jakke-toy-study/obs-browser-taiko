import React from "react"
import { GameOptions } from "../../../../types/gameOptions"
import { SongGenre } from "../../../../types/songGenre"
import PaperAsset from "../../../../../assets/svg/paper.svg?react";
import { SongLevel } from "../../../../types/songLevel";
import { genreColors } from "../../../../../common/genreColors";
import { courseColors } from "../../../../../common/courseColors";

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
            <div style={{position: "absolute", top:20, left: 20}}>
                <div style={{position: 'absolute', top: 20, left: 30, fontSize: songName.length > 17 ? 40 : 60, width: 720, overflow: 'clip'}} className="font-kukde">
                    {songName}
                </div>
                <div style={{position: 'absolute', top: 90, left: 30, fontSize: artistName.length > 17 ? 20 : 40, width: 720}} className="font-kukde">
                    {artistName}
                </div>
                <div style={{position: 'absolute', top: 160, left: 30}}>
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
                </div>
                <div style={{position: 'absolute', top: 260, left: 30}}>
                    <div
                        className="font-kukde"
                        style={{
                            background: courseColors[level.course],
                            fontSize: 40,
                            padding: '4px 20px', 
                            borderRadius: '999px',
                            whiteSpace: 'nowrap',
                            color: 'white',
                            minWidth: 80
                        }}>
                        ★ {level.level}
                    </div>
                </div>
            </div>
        </div>
    )
}
