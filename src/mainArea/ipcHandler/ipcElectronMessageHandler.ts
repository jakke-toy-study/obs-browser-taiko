import { IpcMain } from "electron";
import { AppController } from "../appController/appController";

export function setIPCMessageHandler(ipcMain: IpcMain) {
    ipcMain.handle('setting-message', async (_, message: string) => {
        AppController.instance.broadcast("SET_TEXT", message);
    });

    ipcMain.handle('effect-play', async (_, message: string) => {
        AppController.instance.broadcast("PLAY_EFFECT", message);
    });
}