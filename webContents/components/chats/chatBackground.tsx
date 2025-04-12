import React from "react"

interface ChatBackgroundProps {
    color?: string;
    opacity?: number;
    width?: number,
    height?: number,
}

export const ChatBackground:React.FC<ChatBackgroundProps> = ({color = "#000000", opacity = 1, width = 320, height = 600}) => {
    const styles: React.CSSProperties = {
        color: hexToRgba(color, opacity),
        width: width,
        height: height
    }

    return (
        <div style={styles}>
            
        </div>
    )
}

function hexToRgba(hex: string, opacity: number): string {
    const cleanHex = hex.replace('#', '');
  
    let r = 0, g = 0, b = 0;
  
    if (cleanHex.length === 3) {
      r = parseInt(cleanHex[0] + cleanHex[0], 16);
      g = parseInt(cleanHex[1] + cleanHex[1], 16);
      b = parseInt(cleanHex[2] + cleanHex[2], 16);
    } else if (cleanHex.length === 6) {
      r = parseInt(cleanHex.slice(0, 2), 16);
      g = parseInt(cleanHex.slice(2, 4), 16);
      b = parseInt(cleanHex.slice(4, 6), 16);
    } else {
      throw new Error("Invalid hex color format");
    }
  
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  