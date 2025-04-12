import React from "react"
import { ChatBackground } from "../../components/chats/chatBackground"

interface ChatsProps {
    title?: string,
}

export const Chats:React.FC<ChatsProps> = ({title = "Chats"}) => {
    return (
        <div>
            <ChatBackground />
        </div>
    )
}
