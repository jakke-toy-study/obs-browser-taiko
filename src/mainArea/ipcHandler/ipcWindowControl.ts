import { BrowserWindow, IpcMain } from "electron";
import path from "path";
import { UIController } from "../appController/uicontroller/uicontroller";

export const setIpcWindowControl = (ipcMain: IpcMain) => {
    ipcMain.handle('window-control-minimize', (_) => {
        UIController.instance.getWindow('main-window')?.minimize();
    });

    ipcMain.handle('window-control-maximize', (_) => {
        const mainWindow = UIController.instance.getWindow('main-window');
        if(mainWindow?.isMaximized()) {
            mainWindow.unmaximize();
        } else {
            mainWindow?.maximize();
        }
    });

    ipcMain.handle('window-control-quit', (_) => {
        UIController.instance.getWindow('main-window')?.close();
        UIController.instance.removeWindow('main-window');
    });
}