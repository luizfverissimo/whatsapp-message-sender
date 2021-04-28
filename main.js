const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');

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

ipcMain.on('notify', (_, message) => {
  new Notification({
    title: 'notification',
    body: message
  }).show();
});

app.whenReady().then(createWindow);
