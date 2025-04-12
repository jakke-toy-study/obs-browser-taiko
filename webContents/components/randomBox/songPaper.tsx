import React from "react"
import { GameOptions } from "../../types/gameOptions"
import { SongGenre } from "../../types/songGenre"
import PaperAsset from "../../../assets/svg/paper.svg?react";

interface SongPaperProps {
    songName: string,
    artistName: string,
    genre: SongGenre
    gameOption?: GameOptions
}

export const SongPaper: React.FC<SongPaperProps> = ({songName, artistName, genre, gameOption}) => {
    return (
        <div>
            <PaperAsset />
        </div>
    )
}
