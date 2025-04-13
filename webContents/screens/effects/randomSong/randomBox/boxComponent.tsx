import React from "react"
import WhatsInTheBox from "../../../../../assets/svg/whatsinthebox.svg?react";

interface BoxComponentProps {
  width?: number,
  height?: number,
}

export const BoxComponent:React.FC<BoxComponentProps> = ({width = 128, height = 128}) => {
  return (
      <div>
        <WhatsInTheBox width={width} height={height} /> 
      </div>
  )
}