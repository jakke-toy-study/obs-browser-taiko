export interface IPCMessageHandler {
    sendMessage: (message: string) => Promise<string>;
    playEffect: (id: string) => Promise<string>;
}

declare global {
    interface Window {
        electronIPCMessageHandler: IPCMessageHandler
    }
}