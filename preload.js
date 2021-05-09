const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification: (message) => {
      ipcRenderer.send('notify', message);
    }
  },
  readFileApi: {
    readFile: () => {
      const res = ipcRenderer.sendSync('file');
      return res;
    }
  },
  readImageApi: {
    readImage: () => {
      const res = ipcRenderer.sendSync('image');
      return res;
    }
  },
  senderApi: {
    sendWhatsappMessage: (message, contacts, timeBefore, timeAfter) => {
      ipcRenderer.send('send', message, contacts, timeBefore, timeAfter);
    }
  },
  imageApi: {
    sendImage: () => {
      return;
    }
  }
});
