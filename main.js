const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');

const notificationSender = require('./api/notification');
const openDialogReadFile = require('./api/readFileApi');
const openDialogReadImage = require('./api/readImageApi');
const sendWhatsappMessage = require('./api/senderApi');
const imageCopyToClipboard = require('./api/imageSendApi');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, 'assets/icon.ico'),
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.setMenuBarVisibility(false);

  win.loadFile('index.html');
}

//remover antes de criar o package
// require('electron-reload')(__dirname, {
//   electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
// });

ipcMain.on('notify', (event, message) => {
  notificationSender(message);
});

ipcMain.on('imageSend', (event, path) => {
  imageCopyToClipboard(path);
});

ipcMain.on('file', (event) => {
  const result = openDialogReadFile();
  event.returnValue = result;
});

ipcMain.on('image', (event) => {
  const result = openDialogReadImage();
  event.returnValue = result;
});

ipcMain.on(
  'send',
  (
    event,
    message,
    contacts,
    timeBefore,
    timeAfter,
    isSendingImage,
    imagePath
  ) => {
    sendWhatsappMessage(
      message,
      contacts,
      timeBefore,
      timeAfter,
      isSendingImage,
      imagePath
    );
  }
);

app.whenReady().then(createWindow);
