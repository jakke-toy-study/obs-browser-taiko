import React from "react"
import { useHomeStore } from "rendererArea/commonStatus/homeStatusModel";
import {WindowController} from './windowController';

export const Header:React.FC = () => {
    const {
        updateHomeId,
        osName
    } = useHomeStore();
    
    const headerStyles: React.CSSProperties = {borderBottomWidth: 2, borderColor: "silver", userSelect: 'none', color: 'white', fontWeight: 600, fontSize: 20};

    return (
        <div className={`w-full flex key-color-main h-[48px] items-center ${osName == 'win32' ? 'pl-4' : 'pl-20'} pr-4`} style={headerStyles}>
            <div className="flex flex-row flex-grow main-header h-full items-center">
                OBS - Taiko Template Runner
            </div>
            {osName === 'win32' && <WindowController />}
        </div>
    )
}
