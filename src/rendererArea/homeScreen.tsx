import React, { ChangeEvent, useEffect, useState } from "react"

const DEFAULT_MESSAGE = "HELLO";

export const HomeScreen = () => {
    const [message, setMessage] = useState<string>(DEFAULT_MESSAGE);
    const ipcTest = async () => {
        await window.electronIPCElectronTest.sendMessage(message);
    }

    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    return (
        <div className="p-2 flex flex-col gap-2">
            <div>
                Hello, this is jakke's obs browser kit.
            </div>
            <hr/>
            <div className="flex flex-row gap-2">
                <input className="border rounded-md w-[180px]" onChange={onChangeMessage} defaultValue={message}/>
                <button className="border" onClick={ipcTest}>IPC Test</button>
            </div>
        </div>
    )
}
