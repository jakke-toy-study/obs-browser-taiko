import React from "react"
import { GameOptions } from "../../../../types/gameOptions"
import { SongGenre } from "../../../../types/songGenre"
import PaperAsset from "../../../../../assets/svg/paper.svg?react";

interface SongPaperProps {
    songName?: string,
    artistName?: string,
    genre?: SongGenre
    gameOption?: GameOptions,
    width?: number,
    height?: number,
}

export const SongPaper: React.FC<SongPaperProps> = ({
    songName="Title", 
    artistName="Artist", 
    genre="Undefined",
    gameOption, 
    width = 808, 
    height = 608
}) => {
    return (
        <div>
            <PaperAsset width={width} height={height} />
            <div style={{position: "absolute", top: 0, left: 0}}>
                <div style={{position: 'absolute', top: 20, left: 30, fontSize: 60, width: 780}} className="font-kukde">
                    {songName}
                </div>
                <div style={{position: 'absolute', top: 90, left: 30, fontSize: 40, width: 780}} className="font-kukde">
                    {artistName}
                </div>
                <div style={{position: 'absolute', top: 140, left: 30, fontSize: 40, width: 780}} className="font-kukde">
                    {genre}
                </div>
            </div>
        </div>
    )
}
