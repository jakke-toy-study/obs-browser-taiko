import React from "react"
import WhatsInTheBoxMatt from "../../../../../assets/svg/whatsintheboxMatt.svg?react";

interface BoxComponentProps {
  width?: number,
  height?: number,
}

export const BoxMattComponent:React.FC<BoxComponentProps> = ({width = 128, height = 128}) => {
  return (
      <div>
        <WhatsInTheBoxMatt width={width} height={height} /> 
      </div>
  )
}