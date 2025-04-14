import { dialog, IpcMain } from "electron";
import { UIController } from "../appController/uicontroller/uicontroller";

export const setIpcModalControl = (ipcMain: IpcMain) => {
    ipcMain.handle('call-dialog-error', async (_, title, message) => {
        const mainWindow = UIController.instance.getWindow('main-window');

        if(!mainWindow) return;
        await dialog.showMessageBox(mainWindow, {
            type: "error",
            title: title,
            message: message,
            buttons: ["OK"],
        });
    });
}