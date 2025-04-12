import React from "react"
import WhatsInTheBox from "../../../assets/svg/whatsinthebox.svg?react";

export const BoxComponent:React.FC = () => {
  return (
      <div>
        <WhatsInTheBox width={128} height={128} /> 
      </div>
  )
}