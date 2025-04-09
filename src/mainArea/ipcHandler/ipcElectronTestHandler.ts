import { IpcMain } from "electron";
import { AppController } from "../appController/appController";

export function setIPCElectronTestHandler(ipcMain: IpcMain) {
    ipcMain.handle('electron-test', async (_, message: string) => {
        AppController.instance.broadcast("SET_TEXT", message);
    });
}