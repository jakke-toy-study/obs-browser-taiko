import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronIPCElectronTest', {
    sendMessage: (message: string) => ipcRenderer.invoke('electron-test', message),
});