import { ChangeEvent, useRef, useState } from "react"
import { Header } from 'rendererArea/components/header/header';

const DEFAULT_MESSAGE = "HELLO";

export const HomeScreen = () => {
    const [message, setMessage] = useState<string>(DEFAULT_MESSAGE);
    const effectIdRef = useRef<HTMLInputElement>(null);

    const setProfileMessage = async () => {
        await window.electronIPCMessageHandler.sendMessage(message);
    }

    const onClickPlayEffect = async () => {
        const id = effectIdRef.current?.value;
        if(!id) return;
        
        await window.electronIPCMessageHandler.playEffect(id);
    }

    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex flex-col gap-2 p-2">
                <div className="flex flex-col gap-2">
                    <label>Set Profile Message</label>
                    <div className="flex flex-row gap-2">
                        <input className="border rounded-md w-[320px]" onChange={onChangeMessage} defaultValue={message}/>
                        <button className="border rounded-md pl-2 pr-2" onClick={setProfileMessage}>Set message</button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Play Animation</label>
                    <div className="flex flex-row gap-2">
                        <input className="border rounded-md w-[320px]" ref={effectIdRef} placeholder="Type your animation id..."/>
                        <button className="border rounded-md pl-2 pr-2" onClick={onClickPlayEffect}>Play it</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
