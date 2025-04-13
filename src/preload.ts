import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronIPCMessageHandler', {
    sendMessage: (message: string) => ipcRenderer.invoke('setting-message', message),
    playEffect: (id: string) => ipcRenderer.invoke('effect-play', id),
});