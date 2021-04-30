const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification: (message) => {
      ipcRenderer.send('notify', message);
    }
  },
  readFileApi: {
    readFile: () => {
      const res = ipcRenderer.sendSync('file')
      return res
    }
  },
  senderApi: {
    sendWhatsappMessage: (message, contacts) => {
      ipcRenderer.send('send', message, contacts);
    }
  }
});
