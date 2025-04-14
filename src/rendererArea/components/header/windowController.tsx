import React from "react"
import './windowControllerStyle.css';

export const WindowController:React.FC = () => {
    return (
        <div className="flex flex-row gap-2">
            <button onClick={() => {window.electronWindowControlAPI.minimize()}} className="menu-btn-neutral">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke='black'>
                    <line x1="3" y1="7" x2="13" y2="7" strokeWidth="1"/>
                </svg>
            </button>
            <button onClick={() => {window.electronWindowControlAPI.maximize()}} className="menu-btn-neutral">
                <svg width="16" height="16" viewBox="0 0 16 16"  fill="none" stroke="black">
                    <rect x="3" y="3" width="10" height="10" strokeWidth={1}/>
                </svg>
            </button>
            <button onClick={() => {window.electronWindowControlAPI.quit()}} className="menu-btn-negative">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="black">
                    <line x1="3" y1="3" x2="13" y2="13" strokeWidth="1"/>
                    <line x1="3" y1="13" x2="13" y2="3" strokeWidth="1"/>
                </svg>
            </button>
        </div>
    )
}
