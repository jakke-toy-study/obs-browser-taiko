import { app, BrowserWindow, ipcMain } from 'electron';
import { setIPCElectronTestHandler } from './mainArea/ipcHandler/ipcElectronTestHandler';
import path from 'path';
import { startOverlayServer } from './mainArea/webServer/server';
import { startWebSocket } from './mainArea/webSocket/webSocketServer';
import { AppController } from './mainArea/appController/appController';

if (require('electron-squirrel-startup')) app.quit();

let mainWindow: BrowserWindow | null;

const createWindow = () => {
  console.log(path.join(__dirname, 'preload.js'));
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),  // preload 스크립트 설정
    },
  });
  
  if (!app.isPackaged) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../.vite/index.html'));
  }
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', () => {
  createWindow();

  setIPCElectronTestHandler(ipcMain);

  AppController.initiate();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});