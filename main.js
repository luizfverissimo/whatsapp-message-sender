const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');

const notificationSender = require('./api/notification');
const openDialogReadFile = require('./api/readFileApi');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
}

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

ipcMain.on('notify', (event, message) => {
  notificationSender(message);
});

ipcMain.on('file', (event) => {
  const result = openDialogReadFile();
  event.returnValue = result;
});

app.whenReady().then(createWindow);
