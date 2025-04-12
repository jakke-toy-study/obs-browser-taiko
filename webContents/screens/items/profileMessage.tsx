import React from "react"
import { Message } from "../../components/message/message"
import { Placements } from "../../types/placements"

interface ProfileMessageProps {
    message?: string,
    placement?: Placements
}

export const ProfileMessage:React.FC<ProfileMessageProps> = ({message = "Hello", placement = {top: 0, left: 0}}) => {
    return (
        <div style={{position: 'absolute', top: placement.top, left: placement.left}}>
            <Message message={message} />
        </div>
    )
}
