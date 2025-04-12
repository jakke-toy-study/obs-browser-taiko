import React from "react"
import MessagePlate from '../../../assets/svg/message.svg?react';

interface MessageProps {
    message?: string
}

export const Message:React.FC<MessageProps> = ({message = "Hello"}) => {
    return (
        <div>
            <div style={{position: 'absolute'}}>
                <MessagePlate width={600} height={300}/>
            </div>
            <div className="font-kukde" style={{position: 'absolute', left: 60, top: 140, fontSize: 24, width: 508, overflow:'hidden' }}>
                {message}
            </div>
        </div>
    )
}
