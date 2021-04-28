const { BrowserWindow, app } = require('electron');
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true
    }
  });

  win.loadFile('index.html');
}

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

app.whenReady().then(createWindow);
