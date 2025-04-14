import { app, BrowserWindow, ipcMain } from 'electron';
import { setIPCMessageHandler } from './mainArea/ipcHandler/ipcElectronMessageHandler';
import path from 'path';
import { AppController } from './mainArea/appController/appController';
import os from 'os';

if (require('electron-squirrel-startup')) app.quit();

let mainWindow: BrowserWindow | null;

const createWindow = () => {
  console.log(path.join(__dirname, 'preload.js'));
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Commonland Desktop',
    titleBarStyle: os.platform() == 'win32'? 'hidden' : 'hiddenInset',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      devTools: !app.isPackaged,
    },
  });
  
  if (!app.isPackaged) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../.vite/index.html'));
  }

  // Send os info
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow?.webContents.send('os-info', {
      platform: os.platform(),
      arch: os.arch(),
      release: os.release(),
      mode: app.isPackaged ? 'dist' : 'dev'
    });
  });

  // Prevent refresh on dist environment
  if(app.isPackaged) {
    mainWindow.webContents.on('before-input-event', (event, input) => {
      if (
        input.key === 'F5' || 
        (input.control && input.key === 'r') || 
        (input.control && input.shift && input.key === 'R')
      ) {
        event.preventDefault();
      }
    });
  }
  
  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });
};

app.on('ready', () => {
  createWindow();

  setIPCMessageHandler(ipcMain);

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