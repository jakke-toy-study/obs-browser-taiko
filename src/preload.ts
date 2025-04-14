import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronIPCMessageHandler', {
    sendMessage: (message: string) => ipcRenderer.invoke('setting-message', message),
    playEffect: (id: string) => ipcRenderer.invoke('effect-play', id),
});

contextBridge.exposeInMainWorld('electronWindowControlAPI', {
    minimize: () => ipcRenderer.invoke('window-control-minimize'),
    maximize: () => ipcRenderer.invoke('window-control-maximize'),
    quit: () => ipcRenderer.invoke('window-control-quit'),
});

contextBridge.exposeInMainWorld('electronSystemAPI', {
    receiveOSInfo: (callback) => ipcRenderer.on('os-info', (_event, osInfo) => callback(osInfo)),
    callDialogError: (title: string, message: string) => ipcRenderer.invoke('call-dialog-error', title, message),
});

